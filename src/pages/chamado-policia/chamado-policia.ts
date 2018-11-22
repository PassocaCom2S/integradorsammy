import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChamadoBombeiroPage } from '../chamado-bombeiro/chamado-bombeiro';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment } from '@ionic-native/google-maps';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { AttendancePage } from '../attendance/attendance';

@IonicPage()

@Component({
  selector: 'page-chamado-policia',
  templateUrl: 'chamado-policia.html',
})

export class ChamadoPoliciaPage {

  public chamado: FormGroup = new FormGroup({
    'vitima': new FormControl(true, [Validators.required]),
  });


  resp_coords: any;
  latitude: any;
  longitude: any;
  map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
    private geolocation: Geolocation,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController) {
    this.chamado = this.formBuilder.group({
      vitima: ['', Validators.required]
    });
  }

  concluirChamado() {
    let toast = this.toastCtrl.create({
      message: 'Requisição enviada com sucesso! Favor aguarde no lugar até a chegada de socorro.',
      duration: 5000,
      position: 'middle'
    });

    this.navCtrl.push(AttendancePage);
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  dadosChamado() {

     const data = new Date().toISOString()
     const tempo = data.split('T')
     const dia = tempo[0];
     const hora = tempo[1];


       let call = {
        'call': {
          'user': '1',
          'date': dia,
          'time': hora,
          'status': 'Em andamento',
          'latitude': this.latitude,
          'longitude': this.longitude
        }
      };
    this.userProvider.addCall(call).then(
      (result: any) => {
       this.toastCtrl
          .create({ message: 'Chamado criado com sucesso!', duration: 5000 }).present();
    }).catch((error: any) => {
      this.toastCtrl
        .create({ message: 'Falha ao criar chamada: ' + error.error, duration: 5000 }).present();
        console.log(error);
    })
      
  }

  loadMap() {
    
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.latitude,
          lng: this.longitude
        },
        zoom: 18,
        tilt: 30
      }
    }
    this.map = GoogleMaps.create('map', mapOptions);
    let marker: Marker = this.map.addMarkerSync({
      title: 'Me',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.latitude,
        lng: this.longitude
      }
    });
    this.latitude = mapOptions.camera.target.lat;
    this.longitude = mapOptions.camera.target.lon;
    marker.showInfoWindow();
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.resp_coords = resp.coords;
        console.log(this.resp_coords);
        this.latitude = this.resp_coords.latitude;
        this.longitude = this.resp_coords.longitude;
        this.loadMap();
        let watch = this.geolocation.watchPosition();
        watch.subscribe((resp) => {
          this.resp_coords = resp.coords;
          this.latitude = this.resp_coords.latitude;
          this.longitude = this.resp_coords.longitude;
          this.loadMap();
        }, (error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }

}

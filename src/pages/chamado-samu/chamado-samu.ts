import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment } from '@ionic-native/google-maps';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ChamadoSamuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamado-samu',
  templateUrl: 'chamado-samu.html',
})
export class ChamadoSamuPage {
  resp_coords: any;
  latitude: any;
  longitude: any;
  map: GoogleMap;
  private chamado: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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
      duration: 4000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  dadosChamado() {
    console.log(this.chamado.value);
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

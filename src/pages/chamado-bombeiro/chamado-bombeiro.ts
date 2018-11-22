import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment } from '@ionic-native/google-maps';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ChamadoBombeiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamado-bombeiro',
  templateUrl: 'chamado-bombeiro.html',
})
export class ChamadoBombeiroPage {

  //Variaveis do usuário da aplicação.
  user: any;

  //Variaveis para utilização da camera.
  photo: string = '';

  //Variaveis para utilização do mapa.
  resp_coords: any;
  latitude: any;
  longitude: any;
  map: GoogleMap;

  //Grupo para inputs presentes na pagina.
  private chamado: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private camera: Camera,
    public userProvider: UserProvider) {

    this.chamado = this.formBuilder.group({
      vitima: ['', Validators.required]
    });

    this.getUser();
  }

  //Metodo GET para recuperar dos dados do usuário.
  getUser() {
    this.userProvider.getUser().then(data => {
      this.user = data;
      console.log(this.user);
    })
  }

  //Metodo para capturar uma imagem com a câmera.
  takePicture() {
    this.photo = '';
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  //ToastController para exibir um mensagem de "Chamado concluido com sucesso"
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

  //Metodo para carregar o "Mini mapa" com base nas coordenadas.
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

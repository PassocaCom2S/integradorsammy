import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttendanceProvider } from '../../providers/attendance/attendance';
import { HomePage } from '../home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Marker} from '@ionic-native/google-maps';
@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  public resp_coords: any;
  public latitude: any;
  public longitude: any;
  public map: GoogleMap;

  public attendance: any;
  public chamada: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    public attendanceProvider: AttendanceProvider) {

    this.getAttendance();
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

  getAttendance() {
    this.attendanceProvider.getAttendance()
      .then(data => {
        this.attendance = data;
        this.chamada = this.attendance[this.attendance.length-1]
      });
  }

  voltarMenu() {
    this.navCtrl.push(HomePage);
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

}

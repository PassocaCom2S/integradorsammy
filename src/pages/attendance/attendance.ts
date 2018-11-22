import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttendanceProvider } from '../../providers/attendance/attendance';
import { HomePage } from '../home/home';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  attendance: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public attendanceProvider: AttendanceProvider) {

    this.getAttendance();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  getAttendance() {
    this.attendanceProvider.getAttendance()
      .then(data => {
        this.attendance = data;
        console.log(this.attendance);
      });
  }

  voltarMenu() {
    this.navCtrl.push(HomePage);
  }

}

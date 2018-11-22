import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChamadoPoliciaPage } from '../chamado-policia/chamado-policia';
import { ChamadoBombeiroPage } from '../chamado-bombeiro/chamado-bombeiro';
import { ChamadoSamuPage } from '../chamado-samu/chamado-samu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage = HomePage;

  constructor(public navCtrl: NavController) {

  }

  chamadoPolicia(){
    this.navCtrl.push(ChamadoPoliciaPage);
  }

  chamadoBombeiro(){
    this.navCtrl.push(ChamadoBombeiroPage);
  }

  chamadoSamu(){
    this.navCtrl.push(ChamadoSamuPage);
  }

}

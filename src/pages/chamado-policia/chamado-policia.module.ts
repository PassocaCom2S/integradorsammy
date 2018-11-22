import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamadoPoliciaPage } from './chamado-policia';

@NgModule({
  declarations: [
    ChamadoPoliciaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChamadoPoliciaPage),
  ],
})
export class ChamadoPoliciaPageModule {}

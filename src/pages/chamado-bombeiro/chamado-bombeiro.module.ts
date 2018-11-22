import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamadoBombeiroPage } from './chamado-bombeiro';

@NgModule({
  declarations: [
    ChamadoBombeiroPage,
  ],
  imports: [
    IonicPageModule.forChild(ChamadoBombeiroPage),
  ],
})
export class ChamadoBombeiroPageModule {}

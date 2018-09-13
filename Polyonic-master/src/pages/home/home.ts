import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ElectronService } from 'ngx-electron';

import { SignatureModalPage } from '../modals/signature/signature';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public signature: string

  constructor(public navCtrl: NavController, private electron: ElectronService, public modalCtrl: ModalController) {
    if (this.electron.isElectronApp) {
      console.log('Running Electron:', this.electron);
    } else {
      console.log('Mode web');
    }
  }

  openSignatureModal(signature) {
    let modal = this.modalCtrl.create(SignatureModalPage, {signature: signature}, {cssClass: "modal-fullscreen"});
    modal.present();
    modal.onDidDismiss(data => {
      this.signature = data
      console.log (data)
    });
  }

}

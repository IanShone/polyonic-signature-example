import { Component, ViewChild } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: "page-signature",
  templateUrl: "signature.html"
})
export class SignatureModalPage {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  
  signature

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };
  
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    
    this.signature = (params.get("signature"));
    
  }
  
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    //this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    //console.log(this.signaturePad.toDataURL());
  
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    //console.log('begin drawing');
  }
  
  drawClear(){
    this.signaturePad.clear()
  }

  drawSave(){
    this.signature = this.signaturePad.toDataURL()
    this.viewCtrl.dismiss(this.signature);
  }

  dismiss() {
    this.viewCtrl.dismiss(this.signature);
  }
}
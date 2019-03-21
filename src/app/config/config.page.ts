import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();

  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigPage } from '../config/config.page';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private modalController: ModalController){


  }

  ngOnInit() {
  }

  async openConfig(){
    const modal = await this.modalController.create({
      component: ConfigPage,
      
    });
    modal.present();

  }

}

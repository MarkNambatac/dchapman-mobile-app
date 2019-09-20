import { Component, OnInit } from '@angular/core';
import { ContactPage } from '../contact/contact.page';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {
  data:any;
  id : string;

  constructor(public navCtrl: NavController, private route: ActivatedRoute,public modalController: ModalController) {
  
  }

  async presentModal(item) {
    const modal = await this.modalController.create({
      component: ContactPage,
      componentProps: item
    });
    return await modal.present();
  }
  ngOnInit() {
    fetch('../../assets/database.json').then(res => res.json()).then(json => { 
      this.data = json;
      console.log(this.data)
    });
  }

}

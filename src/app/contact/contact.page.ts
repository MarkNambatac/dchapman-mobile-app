import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController, NavParams, ModalController } from '@ionic/angular';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage implements OnInit {
  @Input() item: object;
  id: string;
  name: string;
  alias: string;
  criminalcase: string;
  gender: string;
  weight: number;
  eyes: string;
  hair: string;
  age: number;
  birthday: string;
  citizenship: string;
  avatar: string;
  reward: string;
  crime: string;

  constructor(private route: ActivatedRoute, private callNumber: CallNumber,public alertController: AlertController, navParams: NavParams,public modalController: ModalController ) {
    this.name = navParams.data.name
    this.alias = navParams.data.alias
    this.criminalcase = navParams.data.criminal_case
    this.crime = navParams.data.crime
    this.reward = navParams.data.reward
    this.gender = navParams.data.physicaldescription.gender
    this.weight = navParams.data.physicaldescription.weight
    this.eyes = navParams.data.physicaldescription.eyes
    this.hair = navParams.data.physicaldescription.hair
    this.age = navParams.data.personaldata.age
    this.birthday = navParams.data.personaldata.birthday
    this.citizenship = navParams.data.personaldata.citizenship
    this.avatar = navParams.data.avatar

   }
    
  ngOnInit() {
   
  }
  
  callPolice() {
    this.callNumber.callNumber("09177052259", true) 
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Are you sure this is the person?',
      message: 'False calls will automatically delete your profile and the app itself and you can never download the app again on the same mobile phone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
            this.callPolice()
          }
        }
      ]
    });

    await alert.present();
  }

  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}

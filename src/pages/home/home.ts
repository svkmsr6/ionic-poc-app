import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl:AlertController
  ) {

  }

  showOptions() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'radio',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Venerated Clan Collector',
      subTitle: 'Hyangadiri udaal! Shanivarig siguvle nimmaun ?',
      inputs:[{
        type:'text',
        placeholder:'Your Response'
      }],
      buttons: [
      {
        text:'OK',
        handler:data => console.log(data)
      },{
        text:'Cancel',
        handler:() => console.log('Cancel Clicked')
      },{
        text:'Reset',
        handler:() => console.log('Reset Clicked')
      }]
    });
    alert.present();
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}

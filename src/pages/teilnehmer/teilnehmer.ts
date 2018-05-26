import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content, AlertController } from 'ionic-angular';
import { TeilnehmerServiceProvider } from '../../providers/teilnehmer-service/teilnehmer-service';
import { Observable } from 'rxjs/Observable';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the TeilnehmerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teilnehmer',
  templateUrl: 'teilnehmer.html',
})
export class TeilnehmerPage {

  @ViewChild(Content) content: Content;
  allTeilnehmer: Observable<any[]>;
  newTeilnehmer: any = '';

  constructor(public navCtrl: NavController, public teilnehmerService: TeilnehmerServiceProvider, private keyboard: Keyboard, private alertCtrl: AlertController) {
    this.allTeilnehmer = this.teilnehmerService.getAllTeilnehmer();
  }

  addTeilnehmer() {

    let prompt = this.alertCtrl.create({
      title: 'Add Teilnehmer',
      inputs: [
      {
        name: 'vorname',
        placeholder: 'Vorname'
      },
      {
        name: 'name',
        placeholder: 'Name'
      }
    ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            if (data.name.length === 0 || !data.name.trim() || data.vorname.length === 0 || !data.vorname.trim()) {
              console.log("empty");
            } else {
              this.teilnehmerService.addTeilnehmer(data.vorname,data.name).then(() => {
                this.newTeilnehmer = "";
                this.keyboard.close();
                this.content.scrollToBottom();
              });
            }
          }
        }
      ]
    });

    prompt.present();


  }

  editTeilnehmer(key, teilnehmer) {
    let prompt = this.alertCtrl.create({
      title: 'Edit Teilnehmer',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.teilnehmerService.updateTeilnehmer(key,data.title);
           /* let index = this.allPosten.indexOf(posten);

            if (index > -1) {
              this.notes[index] = data;
            }*/
          }
        }
      ]
    });
    prompt.present();
  }

  

  removeTeilnehmer(id) {
    this.teilnehmerService.deleteTeilnehmer(id);
  }
}

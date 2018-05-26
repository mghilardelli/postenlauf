import { Component, ViewChild } from '@angular/core';
import { NavController, Content, AlertController } from 'ionic-angular';
import { PostenServiceProvider } from '../../providers/posten-service/posten-service';
import { Observable } from 'rxjs/Observable';
import { Keyboard } from '@ionic-native/keyboard';
import { PostendetailPage } from '../postendetail/postendetail';

@Component({
  selector: 'page-posten',
  templateUrl: 'posten.html'
})
export class PostenPage {
  postendetailPage = PostendetailPage;

  @ViewChild(Content) content: Content;
  allPosten: Observable<any[]>;
  newPosten: any = '';

  constructor(public navCtrl: NavController, public postenService: PostenServiceProvider, private keyboard: Keyboard, private alertCtrl: AlertController) {
    this.allPosten = this.postenService.getAllPosten();
  }

  addPosten() {

    let prompt = this.alertCtrl.create({
      title: 'Add Posten',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            if (data.title.length === 0 || !data.title.trim()) {
              console.log("empty");
            } else {
              this.postenService.addPosten(data.title).then(() => {
                this.newPosten = "";
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

  editPosten(key, posten) {
    let prompt = this.alertCtrl.create({
      title: 'Edit Note',
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
            this.postenService.updatePosten(key,data.title);
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

  

  removePosten(id) {
    this.postenService.deleteItem(id);
  }

  openPostenDetail(item) {
    this.navCtrl.push(PostendetailPage, {
      posten: item
    })

  }


}

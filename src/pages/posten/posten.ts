import { Component, ViewChild } from '@angular/core';
import { NavController, Content, AlertController} from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Observable } from 'rxjs/Observable'; 
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-posten',
  templateUrl: 'posten.html'
})
export class PostenPage {

  @ViewChild(Content) content: Content;
    allPosten: Observable<any[]>;
    newPosten: any ='';

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider, private keyboard: Keyboard, private alertCtrl : AlertController) {
    this.allPosten = this.firebaseService.getAllPosten();
  }

  addPosten(){ 

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
                  if(data.title.length === 0 || !data.title.trim()){ 
                    console.log("empty"); 
                  }else{ 
                    this.firebaseService.addPosten(data.title).then(()=>{ 
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

  removePosten(id){
    this.firebaseService.deleteItem(id);
  }


}
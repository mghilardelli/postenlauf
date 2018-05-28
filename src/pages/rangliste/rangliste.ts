import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultatProvider } from '../../providers/resultat/resultat';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the RanglistePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rangliste',
  templateUrl: 'rangliste.html',
})
export class RanglistePage {

private todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      title: [''],
      description: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RanglistePage');
  }
  

  logForm(){
    console.log(this.todo.value)
  }

}

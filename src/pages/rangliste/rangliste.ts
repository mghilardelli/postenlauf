import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
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

  public rangliste;

  //@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public resultatService: ResultatProvider) {

    this.makeRangliste();
  }

    makeRangliste(){
      this.rangliste = this.resultatService.CalculatePointsforRangliste();
      console.log(this.rangliste);
    }
    
  }



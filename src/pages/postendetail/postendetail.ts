import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { TeilnehmerServiceProvider } from '../../providers/teilnehmer-service/teilnehmer-service';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the PostendetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postendetail',
  templateUrl: 'postendetail.html',
})


export class PostendetailPage {

  public posten;

  @ViewChild(Content) content: Content;
  allTeilnehmer: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public teilnehmerService: TeilnehmerServiceProvider) {
    this.posten = navParams.get('posten');
    this.allTeilnehmer = this.teilnehmerService.getAllTeilnehmer();
  }

  logForm(form) {
    console.log(form)
  }

}

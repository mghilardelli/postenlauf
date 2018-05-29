import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { TeilnehmerServiceProvider } from '../../providers/teilnehmer-service/teilnehmer-service';
import { ResultatProvider } from '../../providers/resultat/resultat';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';


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
  private todo : FormGroup;

  @ViewChild(Content) content: Content;
  allTeilnehmer: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,public teilnehmerService: TeilnehmerServiceProvider, public ranglisteService: ResultatProvider) {
    this.posten = navParams.get('posten');
    this.allTeilnehmer = this.teilnehmerService.getAllTeilnehmer();
    this.todo = this.formBuilder.group({
      option: [''], 
      range: [''],
     
    });
  }

  sendForm(){
    this.ranglisteService.addResultat(this.posten.Name, this.todo.value.range, this.todo.value.option);
    this.todo.value.range = 0;
    this.navCtrl.push(PostendetailPage, {
      posten: this.posten
    })
  }

}

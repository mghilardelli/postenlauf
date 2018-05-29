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

  private todo: FormGroup;

  @ViewChild(Content) content: Content;
  allResulatate: Observable<any[]>;
  newTeilnehmer: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public resultatService: ResultatProvider) {
    this.allResulatate = resultatService.getAllResultat();
    this.todo = this.formBuilder.group({
      title: [''],
      description: [''],
    });
    


    // Iteration function
    /* this.results.forEach(function (a) {
       if (!this[a.Name]) {
           this[a.Name] = { Name: a.Name, Punktzahl: 0 };
          this.rangliste.push(this[a.Name]);
       }
       this[a.Name].Punktzahl += a.Punktzahl;
   }, Object.create(null));*/

  }

}

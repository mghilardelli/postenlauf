import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable'; 

/*
  Generated class for the ResultatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResultatProvider {

  resultatRef: AngularFireList<any>; 
  allResults: Observable<any[]>; 

  constructor(public afd: AngularFireDatabase) {
    this.resultatRef = this.afd.list('/Resultat/');
    this.allResults = this.resultatRef.snapshotChanges().map(changes => { 
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })); 
    });
     
  }

addResultat(newPosten, newPunktzahl, newTeilnehmer){
    return this.resultatRef.push({Posten: newPosten, Punktzahl: newPunktzahl, Teilnehmer: newTeilnehmer})
  }

  getAllResultat(){
    return this.allResults;
  }

  

  /*
  updateTeilnehmer(key, newText){
    return this.teilnehmerRef.update(key,{Name: newText});
  }

 // doneItem(key, status){
//    return this.postenRef.update(key, {isDone: status});
 // }

  deleteTeilnehmer(key){
    this.teilnehmerRef.remove(key);
  }*/

}

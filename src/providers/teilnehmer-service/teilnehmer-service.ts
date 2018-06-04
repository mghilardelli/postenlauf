import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable'; 

/*
  Generated class for the TeilnehmerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeilnehmerServiceProvider {

  teilnehmerRef: AngularFireList<any>; 
  allTeilnehmer: Observable<any[]>; 

  constructor(public afd: AngularFireDatabase) {
    this.teilnehmerRef = this.afd.list('/Teilnehmer/');
    this.allTeilnehmer = this.teilnehmerRef.snapshotChanges().map(changes => { 
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })); 
    });
     
  }

  getAllTeilnehmer(){
    return this.allTeilnehmer;
  }

  addTeilnehmer(newPrename, newName){
    return this.teilnehmerRef.push({Vorname: newPrename, Name: newName})
  }

  updateTeilnehmer(key, newText){
    return this.teilnehmerRef.update(key,{Name: newText});
  }

  updateTeilnehmerPunktzahl(key, points) {
    return this.teilnehmerRef.update(key, {Punktzahl: points});
  }

  getTeilnehmer(name) {
this.allTeilnehmer.forEach(function(a) {
  a.forEach(function(b) {
    if(b.Name == name) 
    return b;
  })
})
  }

 // doneItem(key, status){
//    return this.postenRef.update(key, {isDone: status});
 // }

  deleteTeilnehmer(key){
    this.teilnehmerRef.remove(key);
  }

}

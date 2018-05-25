import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable'; 

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  postenRef: AngularFireList<any>; 
  allPosten: Observable<any[]>; 

  constructor(public afd: AngularFireDatabase) {
    this.postenRef = this.afd.list('/Posten/');
    this.allPosten = this.postenRef.snapshotChanges().map(changes => { 
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })); 
    });
     
  }

  getAllPosten(){
    return this.allPosten;
  }

  addPosten(newName){
    return this.postenRef.push({Name: newName})
  }

  updatePosten(key, newText){
    return this.postenRef.update(key,{Name: newText});
  }

 // doneItem(key, status){
//    return this.postenRef.update(key, {isDone: status});
 // }

  deleteItem(key){
    this.postenRef.remove(key);
  }

}

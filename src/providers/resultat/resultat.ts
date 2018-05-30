import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DataSnapshot } from '@firebase/database-types';

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

  addResultat(newPosten, newPunktzahl, newTeilnehmer) {
    return this.resultatRef.push({ Posten: newPosten, Punktzahl: newPunktzahl, Teilnehmer: newTeilnehmer })
  }

  getAllResultat() {
    return this.allResults;
  }


  CalculatePointsforRangliste() {
    this.afd.database.ref('/Resultat').on('value', function (snapshot) {
      var returnArr = [];

      for (let key in snapshot.val()) {
        returnArr.push(snapshot.val()[key]);
      }

      let res = [];
      returnArr.forEach(function (a) {
        if (!this[a.Teilnehmer]) {
          this[a.Teilnehmer] = { Teilnehmer: a.Teilnehmer, Punktzahl: 0 };
          res.push(this[a.Teilnehmer]);
      
        }
        this[a.Teilnehmer].Punktzahl += a.Punktzahl;
      }, Object.create(null));
      console.log(res);
      return res;
    });
  }
}

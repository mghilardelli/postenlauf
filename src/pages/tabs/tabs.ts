import { Component } from '@angular/core';

import { TeilnehmerPage } from '../teilnehmer/teilnehmer';
import { PostenPage } from '../posten/posten';
import { RanglistePage } from '../rangliste/rangliste';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TeilnehmerPage;
  tab2Root = PostenPage;
  tab3Root = RanglistePage;

  constructor() {

  }
}

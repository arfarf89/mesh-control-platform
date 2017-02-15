import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaNavService } from '../theme';
import { NAV } from '../app.menu';

@Component({
  selector: 'pages',
  styles: [],
  template: `
    <ba-nav-bar></ba-nav-bar>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com">Akveo</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _navService: BaNavService,) {
  }

  ngOnInit() {
    this._navService.updateNavByRoutes(<Routes>NAV);
  }
}

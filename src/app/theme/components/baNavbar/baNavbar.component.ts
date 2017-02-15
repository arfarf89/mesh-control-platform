import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { GlobalState } from '../../../global.state';
import { BaNavService } from '../../services';

import 'style-loader!./baNavbar.scss';

@Component({
  selector: 'ba-nav-bar',
  templateUrl: './baNavbar.html',
})
export class BaNavbar {

  public isScrolled:boolean = false;
  public navs: any[];
  protected _navItemsSub: Subscription;
  protected _onRouteChange: Subscription;

  constructor(private _router:Router, private _state:GlobalState, private _service:BaNavService) {
    // this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
    //   this.isMenuCollapsed = isCollapsed;
    // });
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public updateNav(newNavs) {
    this.navs = newNavs;
    this.selectNavAndNotify();
  }

  public selectNavAndNotify(): void {
    if (this.navs) {
      this.navs = this._service.selectNavItem(this.navs);
      this._state.notifyDataChanged('nav.activeLink', this._service.getCurrentItem());
    }
  }

  public ngOnInit(): void {

    this._onRouteChange = this._router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        if (this.navs) {
          this.selectNavAndNotify();
        } else {
          // on page load we have to wait as event is fired before nav elements are prepared
          setTimeout(() => this.selectNavAndNotify());
        }
      }
    });

    this._navItemsSub = this._service.navItems.subscribe(this.updateNav.bind(this));
  }
}

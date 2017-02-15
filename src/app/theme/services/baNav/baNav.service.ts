import {Injectable} from '@angular/core';
import {Router, Routes} from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BaNavService {
  navItems = new BehaviorSubject<any[]>([]);

  protected _currentNavItem = {};

  constructor(private _router:Router) { }

  public updateNavByRoutes(routes: Routes) {
    let convertedRoutes = this.convertRoutesToNavs(_.cloneDeep(routes));
    this.navItems.next(convertedRoutes);
  }

  public convertRoutesToNavs(routes:Routes):any[] {
    let items = this._convertArrayToItems(routes);
    return this._skipEmpty(items);
  }

  public getCurrentItem():any {
    return this._currentNavItem;
  }

  public selectNavItem(navItems:any[]):any[] {
    let items = [];
    navItems.forEach((item) => {
      this._selectItem(item);

      if (item.selected) {
        this._currentNavItem = item;
      }

      if (item.children && item.children.length > 0) {
        item.children = this.selectNavItem(item.children);
      }
      items.push(item);
    });
    return items;
  }

  protected _skipEmpty(items:any[]):any[] {
    let nav = [];
    items.forEach((item) => {
      let navItem;
      if (item.skip) {
        if (item.children && item.children.length > 0) {
          navItem = item.children;
        }
      } else {
        navItem = item;
      }

      if (navItem) {
        nav.push(navItem);
      }
    });

    return [].concat.apply([], nav);
  }

  protected _convertArrayToItems(routes:any[], parent?:any):any[] {
    let items = [];
    routes.forEach((route) => {
      items.push(this._convertObjectToItem(route, parent));
    });
    return items;
  }

  protected _convertObjectToItem(object, parent?:any):any {
    let item:any = {};
    if (object.data && object.data.nav) {
      // this is a nav object
      item = object.data.nav;
      item.route = object;
      delete item.route.data.nav;
    } else {
      item.route = object;
      item.skip = true;
    }

    // we have to collect all paths to correctly build the url then
    if (Array.isArray(item.route.path)) {
      item.route.paths = item.route.path;
    } else {
      item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
      if (!!item.route.path) item.route.paths.push(item.route.path);
    }

    if (object.children && object.children.length > 0) {
      item.children = this._convertArrayToItems(object.children, item);
    }

    let prepared = this._prepareItem(item);

    return prepared;
  }

  protected _prepareItem(object:any):any {
    if (!object.skip) {
      object.target = object.target || '';
      object.pathMatch = object.pathMatch || 'full';
      return this._selectItem(object);
    }

    return object;
  }

  protected _selectItem(object:any):any {
    object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
    return object;
  }
}
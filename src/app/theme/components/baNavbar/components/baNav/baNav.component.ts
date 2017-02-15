import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {GlobalState} from '../../../../../global.state';
import { BaNavService } from '../../../../services';

import 'style-loader!./baNav.scss';

@Component({
  selector: 'ba-nav',
  templateUrl: './baNav.html',
})
export class BaNav {

  @Input() nav:any;

  constructor(private _router:Router, private _service: BaNavService, private _state: GlobalState) {
  }



}
import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {mainNavigation} from './navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[];

  constructor() {
    this.items = mainNavigation;
  }
}

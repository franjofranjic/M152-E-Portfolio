import {MenuItem} from 'primeng/api';

export const mainNavigation: MenuItem[] = [
  {
    label: 'Home',
    routerLink: '.',
    fragment: 'home',
    style: 'color: white'
  },
  {
    label: 'The Watch',
    routerLink: '.',
    fragment: 'video'
  },
  {
    label: 'Facts & Figures',
    routerLink: '.',
    fragment: 'history'
  }
];

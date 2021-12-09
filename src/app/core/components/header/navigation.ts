import {MenuItem} from 'primeng/api';

export const mainNavigation: MenuItem[] = [
  {
    label: 'Home',
    routerLink: '.',
    fragment: 'home'
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

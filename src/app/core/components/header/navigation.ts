import {MenuItem} from 'primeng/api';

export const mainNavigation: MenuItem[] = [
  {
    label: 'home',
    icon: 'pi pi-fw pi-images',
    routerLink: '.',
    fragment: 'home'
  },
  {
    label: 'Die Uhr',
    icon: 'pi pi-fw pi-clock',
    routerLink: '.',
    fragment: 'video'
  },
  {
    label: 'Facts & Figures',
    icon: 'pi pi-fw pi-chart-line',
    routerLink: '.',
    fragment: 'history'
  }
];

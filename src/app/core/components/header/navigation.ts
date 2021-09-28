import {MenuItem} from 'primeng/api';

export const mainNavigation: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi pi-fw pi-home',
    routerLink: 'dashboard'
  },
  {
    label: 'Kunden',
    icon: 'pi pi-fw pi-users',
    routerLink: 'clients'
  },
  {
    label: 'Produkte',
    icon: 'pi pi-fw pi-users',
    routerLink: 'products'
  },
  {
    label: 'Einkauf/Verkauf',
    icon: 'pi pi-fw pi-users',
    routerLink: 'sales'
  }
];

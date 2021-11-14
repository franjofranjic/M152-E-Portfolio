import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./features/video/video.module').then(m => m.VideoModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./features/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

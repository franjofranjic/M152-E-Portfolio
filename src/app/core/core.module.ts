import {CommonModule, registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PrimeNGConfig} from 'primeng/api';
import {SharedModule} from '../shared/shared.module';

import * as components from './components';

import {HeaderComponent} from './components/header/header.component';

import localeDe from '@angular/common/locales/de-CH';
import {HomeModule} from '../features/home/home.module';
import {HistoryModule} from '../features/history/history.module';
import {VideoModule} from '../features/video/video.module';

@NgModule({
  declarations: [...components.list, HeaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    HistoryModule,
    VideoModule,
  ],
  exports: [
    ...components.list
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-CH'}
  ]
})

export class CoreModule {
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
    registerLocaleData(localeDe);
  }
}

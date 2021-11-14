import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    HomeComponent
  ],
  bootstrap: []
})
export class HomeModule { }

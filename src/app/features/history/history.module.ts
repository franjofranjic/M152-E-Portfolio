import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {HistoryComponent} from './history.component';

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  exports: [
    HistoryComponent,
  ],
  bootstrap: [],
})
export class HistoryModule { }

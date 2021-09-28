import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as prime from './prime';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...prime.modules,
  ],
  providers: [
    DatePipe,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ...prime.modules,
  ],
  declarations: [],
})
export class SharedModule {}

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UiStore, UiState } from './ui.store';
import {Observable} from 'rxjs';
import {ThemeType} from './ui.model';

@Injectable({ providedIn: 'root' })
export class UiQuery extends Query<UiState> {

  constructor(protected store: UiStore) {
    super(store);
  }

  selectIsDark(): Observable<boolean> {
    return this.select('darkmode');
  }

}

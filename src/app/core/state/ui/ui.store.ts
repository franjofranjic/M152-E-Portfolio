import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

export interface UiState {
  darkmode: boolean;
}

export function createInitialState(): UiState {
  return {
    darkmode: false,
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'ui'})
export class UiStore extends Store<UiState> {

  constructor() {
    super(createInitialState());
  }

}


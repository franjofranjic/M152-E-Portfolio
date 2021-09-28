import {ID} from '@datorama/akita';

export interface Ui {
  id: ID;
  theme: ThemeType;
  darkMode: boolean;
}


export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}


/**
 * A factory function that creates Ui
 */
export function createUi(params: Partial<Ui>): Ui {
  return {} as Ui;
}

import {Inject, Injectable} from '@angular/core';
import {UiStore} from './ui.store';
import {ThemeType} from './ui.model';
import {DOCUMENT} from '@angular/common';

@Injectable({providedIn: 'root'})
export class UiService {

  static readonly THEME_MAP: { [key: string]: string } = {
    LIGHT: 'saga-blue',
    DARK: 'vela-blue',
    // DARKER: 'arya-blue'
  };
  private readonly LOCAL_STORAGE_KEY = 'vvw-darkmode';

  constructor(private uiStore: UiStore,
              @Inject(DOCUMENT) private document: Document) {
  }

  initTheme(): void {
    const localStorageTheme = localStorage.getItem(this.LOCAL_STORAGE_KEY);

    const isDark = localStorageTheme === 'true' ?? false;
    const theme = isDark ? ThemeType.DARK : ThemeType.LIGHT;
    this.setTheme(theme, isDark);
  }

  toggleTheme(): void {
    if (this.uiStore.getValue().darkmode) {
      this.setTheme(ThemeType.LIGHT, false);
    } else {
      this.setTheme(ThemeType.DARK, true);
    }
  }


  private setTheme(theme: ThemeType, isDark: boolean): void {
    this.document.getElementById('theme-link')?.setAttribute(
      'href', `assets/themes/${UiService.THEME_MAP[theme]}/theme.css`
    );
    this.document.body.classList.remove(ThemeType.LIGHT, ThemeType.DARK);
    this.document.body.classList.add(theme);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, String(isDark));

    this.uiStore.update(({darkmode: isDark}));
  }

}

export function uiInitializer(uiService: UiService): () => void {
  return () => uiService.initTheme();
}

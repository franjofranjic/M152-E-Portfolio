import {DOCUMENT} from '@angular/common';
import {TestBed} from '@angular/core/testing';

import {TestingModule} from '../../../testing/testing.module';

import {UiStore} from './ui.store';
import {UiService} from './ui.service';
import {ThemeType} from './ui.model';

describe('UiService', () => {
  let uiService: UiService;
  let uiStore: UiStore;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiService, UiStore],
      imports: [TestingModule]
    });

    uiService = TestBed.inject(UiService);
    uiStore = TestBed.inject(UiStore);
    document = TestBed.inject(DOCUMENT);
  });

  it('should be created', () => {
    expect(uiService).toBeDefined();
  });

  describe('initTheme', () => {
    it('should init dark theme with local storage value', () => {
      spyOn(localStorage, 'getItem').and.returnValue('true');
      spyOn<any>(uiService, 'setTheme').and.stub();
      uiService.initTheme();

      expect(localStorage.getItem).toHaveBeenCalledWith('vvw-darkmode');
      expect((uiService as any).setTheme).toHaveBeenCalledWith(ThemeType.DARK, true);
    });

    it('should init light theme with invalid local storage value', () => {
      spyOn(localStorage, 'getItem').and.returnValue('INVALID_VALUE');
      spyOn<any>(uiService, 'setTheme').and.stub();

      uiService.initTheme();

      expect(localStorage.getItem).toHaveBeenCalledWith('vvw-darkmode');
      expect((uiService as any).setTheme).toHaveBeenCalledWith(ThemeType.LIGHT, false);
    });

    it('should init light theme with no local storage value', () => {
      spyOn(localStorage, 'getItem').and.returnValue(undefined);
      spyOn<any>(uiService, 'setTheme').and.stub();

      uiService.initTheme();

      expect(localStorage.getItem).toHaveBeenCalledWith('vvw-darkmode');
      expect((uiService as any).setTheme).toHaveBeenCalledWith(ThemeType.LIGHT, false);
    });
  });

  describe('setTheme', () => {
    it('should set the theme in store and local storage', () => {
      spyOn(localStorage, 'setItem').and.stub();
      const element = {
        setAttribute: (param1: any, param2: any) => null
      };
      spyOn(element, 'setAttribute').and.stub();
      spyOn(document, 'getElementById').and.returnValue(element as never);
      spyOn(uiStore, 'update').and.stub();

      (uiService as any).setTheme(ThemeType.DARK, true);

      expect(document.getElementById).toHaveBeenCalledWith('theme-link');
      expect(element.setAttribute).toHaveBeenCalledWith(
        'href', 'assets/themes/vela-blue/theme.css'
      );
      expect(localStorage.setItem).toHaveBeenCalledWith('vvw-darkmode', 'true');
      expect(uiStore.update).toHaveBeenCalledWith({darkmode: true});
    });
  });

  describe('toggleTheme', () => {
    it('should toggle the theme from light to dark', () => {
      spyOn<any>(uiService, 'setTheme').and.stub();

      spyOn(uiStore, 'getValue').and.returnValue({darkmode: false});

      uiService.toggleTheme();

      expect((uiService as any).setTheme).toHaveBeenCalledWith(ThemeType.DARK, true);
    });
  });

});

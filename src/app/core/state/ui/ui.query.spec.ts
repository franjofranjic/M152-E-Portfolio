import { UiQuery } from './ui.query';
import { UiStore } from './ui.store';

describe('UiQuery', () => {
  let query: UiQuery;

  beforeEach(() => {
    query = new UiQuery(new UiStore());
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

  it('select isDark should return false', (done) => {
    query.__store__.update(({darkmode: false}));
    query.selectIsDark().subscribe(isDark => {
      expect(isDark).toBeFalse();
      done();
    });
  });

});

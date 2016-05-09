import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DemoNg2AppComponent } from '../app/demo-ng2.component';

beforeEachProviders(() => [DemoNg2AppComponent]);

describe('App: DemoNg2', () => {
  it('should create the app',
      inject([DemoNg2AppComponent], (app: DemoNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'demo-ng2 works!\'',
      inject([DemoNg2AppComponent], (app: DemoNg2AppComponent) => {
    expect(app.title).toEqual('demo-ng2 works!');
  }));
});

import { TestBed } from '@angular/core/testing';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // beforeAll(() => {
  //   TestBed.initTestEnvironment(
  //     BrowserTestingModule,
  //     platformBrowserDynamicTesting()
  //   );
  // });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'prueba-angular-13'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('prueba-angular-13');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('prueba-angular-13 app is running!');
  });
});

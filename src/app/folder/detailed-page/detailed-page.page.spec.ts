import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DetailedPagePage } from './detailed-page.page';

describe('DetailedPagePage', () => {
  let component: DetailedPagePage;
  let fixture: ComponentFixture<DetailedPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DetailedPagePage, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture =  TestBed.createComponent(DetailedPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

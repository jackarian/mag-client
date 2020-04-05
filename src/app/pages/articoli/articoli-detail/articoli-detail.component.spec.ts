import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoliDetailComponent } from './articoli-detail.component';

describe('ArticoliDetailComponent', () => {
  let component: ArticoliDetailComponent;
  let fixture: ComponentFixture<ArticoliDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticoliDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticoliDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

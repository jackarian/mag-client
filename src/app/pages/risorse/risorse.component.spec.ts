import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisorseComponent } from './risorse.component';

describe('RisorseComponent', () => {
  let component: RisorseComponent;
  let fixture: ComponentFixture<RisorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

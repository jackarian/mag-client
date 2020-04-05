import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermessiDetailComponent } from './permessi-detail.component';

describe('PermessiDetailComponent', () => {
  let component: PermessiDetailComponent;
  let fixture: ComponentFixture<PermessiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermessiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermessiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

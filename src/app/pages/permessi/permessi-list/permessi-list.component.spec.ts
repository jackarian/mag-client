import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermessiListComponent } from './permessi-list.component';

describe('PermessiListComponent', () => {
  let component: PermessiListComponent;
  let fixture: ComponentFixture<PermessiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermessiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermessiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

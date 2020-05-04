import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallazioneListComponent } from './installazione-list.component';

describe('InstallazioneListComponent', () => {
  let component: InstallazioneListComponent;
  let fixture: ComponentFixture<InstallazioneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallazioneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallazioneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

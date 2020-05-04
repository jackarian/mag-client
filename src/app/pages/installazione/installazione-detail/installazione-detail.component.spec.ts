import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallazioneDetailComponent } from './installazione-detail.component';

describe('InstallazioneDetailComponent', () => {
  let component: InstallazioneDetailComponent;
  let fixture: ComponentFixture<InstallazioneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallazioneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallazioneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaVideosComponent } from './neta-videos.component';

describe('NetaVideosComponent', () => {
  let component: NetaVideosComponent;
  let fixture: ComponentFixture<NetaVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetaVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaNewsComponent } from './neta-news.component';

describe('NetaNewsComponent', () => {
  let component: NetaNewsComponent;
  let fixture: ComponentFixture<NetaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetaNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

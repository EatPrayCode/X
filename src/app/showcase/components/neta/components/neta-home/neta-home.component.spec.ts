import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaHomeComponent } from './neta-home.component';

describe('NetaHomeComponent', () => {
  let component: NetaHomeComponent;
  let fixture: ComponentFixture<NetaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

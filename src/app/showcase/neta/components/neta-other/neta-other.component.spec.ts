import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaOtherComponent } from './neta-other.component';

describe('NetaOtherComponent', () => {
  let component: NetaOtherComponent;
  let fixture: ComponentFixture<NetaOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetaOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetasByHistoryComponent } from './netas-by-history.component';

describe('NetasByHistoryComponent', () => {
  let component: NetasByHistoryComponent;
  let fixture: ComponentFixture<NetasByHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetasByHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetasByHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

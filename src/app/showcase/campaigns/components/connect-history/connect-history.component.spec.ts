import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectHistoryComponent } from './connect-history.component';

describe('ConnectHistoryComponent', () => {
  let component: ConnectHistoryComponent;
  let fixture: ComponentFixture<ConnectHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

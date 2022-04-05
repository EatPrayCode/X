import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectNewComponent } from './connect-new.component';

describe('ConnectNewComponent', () => {
  let component: ConnectNewComponent;
  let fixture: ComponentFixture<ConnectNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

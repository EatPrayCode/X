import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetasPopularComponent } from './netas-popular.component';

describe('NetasPopularComponent', () => {
  let component: NetasPopularComponent;
  let fixture: ComponentFixture<NetasPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetasPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetasPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

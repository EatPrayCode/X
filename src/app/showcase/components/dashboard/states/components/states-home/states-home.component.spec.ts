import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesHomeComponent } from './states-home.component';

describe('StatesHomeComponent', () => {
  let component: StatesHomeComponent;
  let fixture: ComponentFixture<StatesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

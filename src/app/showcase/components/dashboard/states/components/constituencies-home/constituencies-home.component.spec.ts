import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituenciesHomeComponent } from './constituencies-home.component';

describe('ConstituenciesHomeComponent', () => {
  let component: ConstituenciesHomeComponent;
  let fixture: ComponentFixture<ConstituenciesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstituenciesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstituenciesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

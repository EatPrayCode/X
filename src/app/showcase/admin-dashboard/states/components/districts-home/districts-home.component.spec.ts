import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsHomeComponent } from './districts-home.component';

describe('DistrictsHomeComponent', () => {
  let component: DistrictsHomeComponent;
  let fixture: ComponentFixture<DistrictsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

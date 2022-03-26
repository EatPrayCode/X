import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagesHomeComponent } from './villages-home.component';

describe('VillagesHomeComponent', () => {
  let component: VillagesHomeComponent;
  let fixture: ComponentFixture<VillagesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagesDetailsComponent } from './villages-details.component';

describe('VillagesDetailsComponent', () => {
  let component: VillagesDetailsComponent;
  let fixture: ComponentFixture<VillagesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

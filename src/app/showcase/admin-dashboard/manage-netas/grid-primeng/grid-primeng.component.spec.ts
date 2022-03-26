import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPrimengComponent } from './grid-primeng.component';

describe('GridPrimengComponent', () => {
  let component: GridPrimengComponent;
  let fixture: ComponentFixture<GridPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

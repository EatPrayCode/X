import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituencyDetailsComponent } from './constituency-details.component';

describe('ConstituencyDetailsComponent', () => {
  let component: ConstituencyDetailsComponent;
  let fixture: ComponentFixture<ConstituencyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstituencyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstituencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituencyHomeComponent } from './constituency-home.component';

describe('ConstituencyHomeComponent', () => {
  let component: ConstituencyHomeComponent;
  let fixture: ComponentFixture<ConstituencyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstituencyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstituencyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

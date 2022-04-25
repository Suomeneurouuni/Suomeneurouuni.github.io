import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbtnComponent } from './formbtn.component';

describe('FormbtnComponent', () => {
  let component: FormbtnComponent;
  let fixture: ComponentFixture<FormbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

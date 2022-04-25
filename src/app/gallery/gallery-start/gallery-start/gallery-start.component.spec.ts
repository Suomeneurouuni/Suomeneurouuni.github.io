import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryStartComponent } from './gallery-start.component';

describe('GalleryStartComponent', () => {
  let component: GalleryStartComponent;
  let fixture: ComponentFixture<GalleryStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

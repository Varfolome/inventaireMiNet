import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsPositionAddSectionComponent } from './objects-position-add-section.component';

describe('ObjectsPositionAddSectionComponent', () => {
  let component: ObjectsPositionAddSectionComponent;
  let fixture: ComponentFixture<ObjectsPositionAddSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsPositionAddSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsPositionAddSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

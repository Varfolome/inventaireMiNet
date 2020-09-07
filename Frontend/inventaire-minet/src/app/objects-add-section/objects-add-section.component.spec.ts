import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsAddSectionComponent } from './objects-add-section.component';

describe('ObjectsAddSectionComponent', () => {
  let component: ObjectsAddSectionComponent;
  let fixture: ComponentFixture<ObjectsAddSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsAddSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsAddSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

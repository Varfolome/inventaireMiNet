import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsTypeControlSectionComponent } from './objects-type-control-section.component';

describe('ObjectsTypeControlSectionComponent', () => {
  let component: ObjectsTypeControlSectionComponent;
  let fixture: ComponentFixture<ObjectsTypeControlSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsTypeControlSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsTypeControlSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

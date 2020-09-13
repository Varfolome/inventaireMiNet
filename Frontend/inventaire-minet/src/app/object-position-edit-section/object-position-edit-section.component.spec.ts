import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPositionEditSectionComponent } from './object-position-edit-section.component';

describe('ObjectPositionEditSectionComponent', () => {
  let component: ObjectPositionEditSectionComponent;
  let fixture: ComponentFixture<ObjectPositionEditSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectPositionEditSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPositionEditSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

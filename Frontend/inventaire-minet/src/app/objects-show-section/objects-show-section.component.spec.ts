import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsShowSectionComponent } from './objects-show-section.component';

describe('ObjectsShowSectionComponent', () => {
  let component: ObjectsShowSectionComponent;
  let fixture: ComponentFixture<ObjectsShowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsShowSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsShowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

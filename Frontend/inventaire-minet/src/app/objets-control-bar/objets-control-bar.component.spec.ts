import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetsControlBarComponent } from './objets-control-bar.component';

describe('ObjetsControlBarComponent', () => {
  let component: ObjetsControlBarComponent;
  let fixture: ComponentFixture<ObjetsControlBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetsControlBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetsControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

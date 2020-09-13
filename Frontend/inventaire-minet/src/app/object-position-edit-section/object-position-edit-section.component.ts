import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-position-edit-section',
  templateUrl: './object-position-edit-section.component.html',
  styleUrls: ['./object-position-edit-section.component.css']
})
export class ObjectPositionEditSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() show;
  @Input() typeEditObject;
}

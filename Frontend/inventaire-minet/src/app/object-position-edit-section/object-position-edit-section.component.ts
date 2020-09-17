import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-position-edit-section',
  templateUrl: './object-position-edit-section.component.html',
  styleUrls: ['./object-position-edit-section.component.css']
})
export class ObjectPositionEditSectionComponent implements OnInit {

  @Input() show;
  @Input() paramList;

  constructor() { }

  ngOnInit(): void {

  }

  ShowList(){
    console.log(this.paramList);

  }

}

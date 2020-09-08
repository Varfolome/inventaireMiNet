import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objects-position-add-section',
  templateUrl: './objects-position-add-section.component.html',
  styleUrls: ['./objects-position-add-section.component.css']
})
export class ObjectsPositionAddSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



    parameters = [];
    addParameter(newParameter : string) : void {
      if(newParameter) {
        this.parameters.push(newParameter);
      }
    }

}

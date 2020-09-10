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

    //const API_URL_EDIT_DEMAND = "http://localhost:8080/editDemand";

    parameters = [];
    addParameter(newParameter : string) : void {
      if(newParameter) {
        this.parameters.push(newParameter.toUpperCase());
      }
    }

    searchForParameter(parameter : string) {
      let n = this.parameters.length;
      let i : number;
      let index : number;
      for (i = 0; i<n; i++){
        if(this.parameters[i] === parameter) {
          return i;
        }
      }
    }

    removeParameter(parameter : string) : void {
      let parameterIndex  = this.searchForParameter(parameter);
      this.parameters.splice(parameterIndex,1);
      //alert(parameter);
    }

    TryToEdit(objectType : string) {
      let uppercase_objectType = objectType.toUpperCase();
      const editDemand = { uppercase_objectType };
      const API_URL_EDIT_DEMAND = "http://localhost:8080/editDemand";
      console.log(editDemand);

      fetch(API_URL_EDIT_DEMAND, {
        method: 'POST',
        body: JSON.stringify(editDemand),
        headers: {
          'content-type' : 'application/json'
        }
      });
    }

}

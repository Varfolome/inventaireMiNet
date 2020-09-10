import { Component, OnInit } from '@angular/core';
import { HeapNode } from '../abstraction/HeapNode';

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
        if(this.notExistingParameter(newParameter.toUpperCase()) === 1) {
          console.log(this.searchForParameter(newParameter));
          this.parameters.push(newParameter.toUpperCase());
        }
        else {
            alert("Ce paramètre existe déjà");
        }
      }
    }

    searchForParameter(parameter : string) {
      let n = this.parameters.length;
      let i : number;
      for (i = 0; i<n; i++){
        if(this.parameters[i] === parameter) {
          return i;
        }
      }
      return -1;
    }

    notExistingParameter(parameter : string) {
      if(this.searchForParameter(parameter) === -1){
        return 1;
      }
      else {
        return 0;
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

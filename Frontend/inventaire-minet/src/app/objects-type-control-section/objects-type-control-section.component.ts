import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { InventoryTypeObject } from '../abstraction/InventoryTypeObject';
import { InventoryTypeParameter } from '../abstraction/InventoryTypeParameter';
@Component({
  selector: 'app-objects-type-control-section',
  templateUrl: './objects-type-control-section.component.html',
  styleUrls: ['./objects-type-control-section.component.css']
})
export class ObjectsTypeControlSectionComponent implements OnInit {

  @Input() show = true;
  //public a = new InventoryTypeObject("clavier");
  //public b = new InventoryTypeParameter("kek");
  public objectTypeList = [];
  @Output() myOutput : EventEmitter<any> = new EventEmitter();
  //this.GetAllTables();

  constructor() {
  }

  ngOnInit(): void {
    this.GetAllTables();
  }

   GetAllTables() {
    const API_URL ="http://localhost:5000/get_all_tables";
    fetch(API_URL)
      .then(response => response.json())
      .then(table => {

        for(let i=0; i<table.length; i++) {

          let objectType = new InventoryTypeObject(table[i]);
          this.objectTypeList.push(objectType);
        }

      });
}

  AddTypeObject() {
    this.myOutput.emit([true,false,false]);
  }

  SearchForObject(type : string) : InventoryTypeObject {
    for(let i=0; i<this.objectTypeList.length; i++){

      if(this.objectTypeList[i].type === type) {
        return i;
      }
    }
  }

    EditTypeObject(typeOfObject : InventoryTypeObject) {

      let o = this.SearchForObject(typeOfObject);
      let c = new InventoryTypeParameter("Kek");
      //console.log(this.objectTypeList[o].InventoryTypeParameters.length);

      this.objectTypeList[o].InventoryTypeParameters.push(c);
      //console.log(this.objectTypeList[o].InventoryTypeParameters[0].paramName);
      let send = [];
      let n = this.objectTypeList[o].InventoryTypeParameters.length;
      for(let i=0; i<n; i++){
        send.push(this.objectTypeList[o].InventoryTypeParameters[i].paramName);
      }
      console.log(send);

      this.myOutput.emit([false,false,true,send]);
    }

}

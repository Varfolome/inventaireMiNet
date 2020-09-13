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
  public a = new InventoryTypeObject("clavier");
  public b = new InventoryTypeParameter("kek");
  public objectTypeList = [this.a];
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
        let tableArray = table.body;
        console.log(table.body);

        for(let i=0; i<tableArray.length; i++) {

          let objectType = new InventoryTypeObject(tableArray[i].type);
          objectType.paramNumber = tableArray[i].paramNumber;
          this.objectTypeList.push(objectType);
        }
      console.log(this.objectTypeList);

      });
}

  AddTypeObject() {
    this.myOutput.emit([true,false,false]);
  }

  EditTypeObject(typeObject : InventoryTypeObject) {
    typeObject.InventoryTypeParameters.push(this.b);
    this.myOutput.emit([false,false,true,typeObject]);
  }


}

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

  constructor() {
  }

  ngOnInit(): void {


  }

  AddTypeObject() {
    this.myOutput.emit([true,false,false]);
  }

  EditTypeObject(typeObject) {
    typeObject.InventoryTypeParameters.push(this.b);
    this.myOutput.emit([false,false,true,typeObject]);
  }


}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InventoryTypeObject } from '../abstraction/InventoryTypeObject';
@Component({
  selector: 'app-objects-type-control-section',
  templateUrl: './objects-type-control-section.component.html',
  styleUrls: ['./objects-type-control-section.component.css']
})
export class ObjectsTypeControlSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async ShowAllTables() {
    const API_URL_GET_TABLES = "http://localhost:8080/";
    let response = await fetch(API_URL_GET_TABLES);
  }
  a = new InventoryTypeObject("clavier");
  show = true;
  objectTypeList = [this.a];
  @Output() myOutput : EventEmitter<any> = new EventEmitter();
  AddTypeObject() {
    this.show = false;
    this.myOutput.emit(true);
  }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  //async ShowAllTables() {
    //const API_URL_GET_TABLES = "http://localhost:8080/";
    //let response = await fetch(API_URL_GET_TABLES);
  //}
  a = new InventoryTypeObject("clavier");
  @Input() show = true;
  objectTypeList = [this.a];
  @Output() myOutput : EventEmitter<any> = new EventEmitter();
  AddTypeObject() {
    this.myOutput.emit([true,false]);
  }

}

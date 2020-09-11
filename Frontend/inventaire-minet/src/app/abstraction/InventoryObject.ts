import {InventoryParameter} from './InventoryParameter';

export  class InventoryObject {

  public name;
  public paramNumber;
  public InventoryParameters : any;

  public getName() : string {
    return this.name;
  }

  public constructor(name : string, paramNumber : number) {
    this.name = name;
    this.paramNumber = paramNumber;
    this.InventoryParameters = [];
  }
}

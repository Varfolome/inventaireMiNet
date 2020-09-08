import {InventoryParameter} from './InventoryParameter'

export  class InventoryObject {
  
  private Array<InventoryParameter>;

  public getName() : string {
    return this.name;
  }

  public constructor(name : string, paramNumber : number) {
    this.name = name;
    this.paramNumber = paramNumber;
  }
}

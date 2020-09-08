import {InventoryParameter} from './InventoryParameter'

export abstract class InventoryObject {
  private name: string;
  private paramNumber: number;
  private Array<InventoryParameter>;

  public getName() : string {
    return this.name;
  }

  public constructor(name : string, paramNumber : number) {
    this.name = name;
    this.paramNumber = paramNumber;
  }
}

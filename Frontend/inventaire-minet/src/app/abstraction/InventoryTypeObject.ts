import { InventoryObject } from "./InventoryObject";
import  { InventoryParameter } from "./InventoryParameter";

export class InventoryTypeObject {
  public type : string;
  public paramNumber : number;
  public InventoryParameters : any;
  private InventoryObjects : any;

  public constructor(type : string) {
    this.type = type;
    this.paramNumber = 0;
    this.InventoryParameters = [];
    this.InventoryObjects = [];
  }

  public getType()  {
    return this.type;
  }
}

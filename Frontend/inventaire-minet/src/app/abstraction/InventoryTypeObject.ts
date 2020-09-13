import { InventoryObject } from "./InventoryObject";
import  { InventoryTypeParameter } from "./InventoryTypeParameter";

export class InventoryTypeObject {
  public type : string;
  public paramNumber : number;
  public InventoryTypeParameters : InventoryTypeParameter[];
  private InventoryObjects : any;

  public constructor(type : string) {
    this.type = type;
    this.paramNumber = 0;
    this.InventoryTypeParameters = [];
    this.InventoryObjects = [];
  }

  public getType()  {
    return this.type;
  }
}

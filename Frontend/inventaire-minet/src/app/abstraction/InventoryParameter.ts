export class InventoryParameter {
  private paramName : string;
  private paramValue: any;

  public constructor(name : string, value : any) {
    this.paramName = name;
    this.paramValue = value;
  }

  public getParamName() : void {
    return this.paramName;
  }
  public getParamValue() : void {
    return this.paramValue;
  }
}

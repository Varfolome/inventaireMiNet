export class HeapNode {
  protected left : any;
  protected right : any;
  protected value : string;
  constructor(value : string) {
    this.left = 0;
    this.right = 0;
    this.value = value;
  }

  AddHeapElement(element : string) {
    if (element <= this.value) {
      if(this.left === 0) {
        this.left = new HeapNode(element);
      }
      else {
        this.left.AddHeapElement(element);
      }
    }
    else {
      if(this.right ===0) {
        this.right = new HeapNode(element);
      }
      else {
        this.right.AddHeapElement(element);
      }
    }
  }

}

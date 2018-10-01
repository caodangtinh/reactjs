import { Animal } from "./Animal";
export class Dog extends Animal {
  constructor(aName, aColor) {
    super(aName);
    this.color = aColor;
  }

  eat() {
    console.log("Dog is eating");
  }
}

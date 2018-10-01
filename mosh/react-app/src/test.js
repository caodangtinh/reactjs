import {Dog} from "./Dog";
// alert("test");
const person = {
  name: "tinhcao",
  age: 29,
  address: "hadong"
};

const copyPerson = { ...person };
console.log(copyPerson);

const arr = ["name", "age", "address"];

const arrCopy = [...arr, "phone"];
console.log(arrCopy);

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];
const arr3 = [...arr1, 4, ...arr2];
console.log(arr3);

class Person {
  constructor(aName) {
    this.name = aName;
  }

  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, major) {
    super(name);
    this.major = major;
  }

  teach() {
    console.log("walk");
  }
}

let teacher = new Teacher("tinh", "math");
console.log(teacher.name);
teacher.walk();
teacher.teach();

let dog = new Dog("vang", "yellow");
console.log(dog);

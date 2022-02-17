// Your code here
// 1. Create classes Cat, Dog, and Bird
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  // For an instance of Cat, speak returns "name says meow!"
  speak() {
    return `${this.name} says meow!`
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  // For an instance of Dog, speak returns "name says woof!"
  speak() {
    return `${this.name} says woof!`
  }

}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  // For an instance of Bird, speak returns conditional output. If the instance of Bird is male, speak returns "It's me! name, the parrot!". If it is not male, speak returns "name says squawk!".
  
  // if this.sex === male then return It's me! this.name, the parrot!
  // else, this.name says squawk

  speak() {
    if(this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    }
  }

}

let bird1 = new Bird("jamie", "male" );
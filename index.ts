// #region basic
// Variables
const myName: string = 'Santi';

const number: number = 5;

const bool: boolean = true;

const array: string[] = ['a', 'b', 'c'];

const array2: Array<number> = [1, 2, 3, 4, 5];

const tuple: [string, number, boolean] = ['a', 1, true];

const object: any = {
  name: 'Santi',
};

object.name = 'Santiago';
// console.log(object?.age);

// type something {name: string;}

// definicion de type
type User = {
  id: string;
  name: string;
  mName?: string;
  sigIn?: () => void;
};

const user: User = {
  id: '1',
  name: 'Santi',
  mName: 'Santiago',
};

if (user?.mName) {
  console.log(user.mName);
}

type Teacher = Partial<{
  id: string;
  name: string;
  mName: string;
  sigIn: () => void;
}>;

// #endregion
//
//interface Shape {
//  area: () => number;
//}
//
//class Circle implements Shape {
//  protected _radius: number;
//
//  constructor(radius: number) {
//    this._radius = radius;
//  }
//
//  area(): number {
//    return 3.14 * this._radius ** 2;
//  }
//}
//
//class Oval extends Circle {
//  area(): number {
//    return this._radius * 2;
//  }
//}
//
//class Rectangle implements Shape {
//  private _width: number;
//  private _height: number;
//
//  constructor(width: number, height: number) {
//    this._width = width;
//    this._height = height;
//  }
//
//  area(): number {
//    return this._width * this._height;
//  }
//}
//
//const c = new Circle(5);

// c._radius


//Ejercicios 
//Escribe una funcion que diga si un numero es par (True) o no (False) y tipea todo (que todo tenga un tipo )
function ParImpar(numero:number):boolean{
  if( numero % 2 === 0)
    return true
  else
    return false
}


//Haz una clase y calculadora 
class Calculadora {
  private operation:Operation 
  constructor(operation:Operation){
    this.operation = operation
  }
  operate(x:number,y:number):number{
    return this.operation.operate(x,y)
  }
  setOperation(operation:Operation):void{
    this.operation = operation
  }
}

interface Operation {
  operate(x:number,y:number):number
  
}

class Sum implements Operation{
  operate(x:number,y:number){
    return x + y
  }
  
}

class Sub implements Operation{
  operate(x:number,y:number){
    return x - y
  }
  
}

class Div implements Operation{
  operate(x:number,y:number){
    return x / y
  }
  
}

class Mul implements Operation{
  operate(x:number,y:number){
    return x * y
  }
  
}

class Ele implements Operation{
  operate(x:number,y:number){
    return x ** y
  }
  
}

const sum = new Sum()
const sub = new Sub()
const div = new Div()
const mul = new Mul()
const ele = new Ele()

const calcu = new Calculadora(ele)

console.log(calcu.operate(2,3))



import{
  Circle,Triangle,Rectangle
}from "./ex1"

const cir = new Circle(5)
const rec = new Rectangle(5,8)
const tri = new Triangle(5,8)

console.log(cir.area())
console.log(rec.area())
console.log(tri.area())



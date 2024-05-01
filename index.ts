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

interface Shape {
  area: () => number;
}

class Circle implements Shape {
  protected _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  area(): number {
    return 3.14 * this._radius ** 2;
  }
}

class Oval extends Circle {
  area(): number {
    return this._radius * 2;
  }
}

class Rectangle implements Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  area(): number {
    return this._width * this._height;
  }
}

const c = new Circle(5);

// c._radius

interface Shape{
    area():number
}

export class Circle implements Shape{
    private rad:number
    constructor(radio:number){
        this.rad = radio
    }
    area():number{
        return Math.PI * this.rad ** 2
    }
}

export class Rectangle implements Shape{
    private base:number
    private altura:number
    constructor(base:number,altura:number){
        this.base = base
        this.altura = altura
    }
    area():number{
        return this.base * this.altura
    }
}

export class Triangle implements Shape{
    private base:number
    private altura:number
    constructor(base:number,altura:number){
        this.base = base
        this.altura = altura
    }
    area():number{
        return (this.base * this.altura)/2
    }
}

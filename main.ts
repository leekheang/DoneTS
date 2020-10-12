export {}

class Point {
    constructor(private _x?: number ,private _y?: number){
        // this.x = _x ;
        // this.y = y; 
    }
    result(){
        console.log('x is : ' + this._x + ' , y is : ' + this._y  )
    }

    get x(){
        return this._x 
    }
    set x(value){
        if (value < 0 )
            throw ("x cannot be less than 0 ")
    }
}

let point  = new Point(1 , 2);
// point.x = 12;
// point.y = 10;
let x = point.x;
point.x = 10;
console.log("value " + x)
point.result();
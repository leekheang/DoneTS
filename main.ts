export {}

class Point {
    x: number
    y: number

    constructor(x?: number , y?: number){
        this.x = x ;
        this.y = y; 
    }
    result(){
        console.log('x is : ' + this.x + ' , y is : ' + this.y  )
    }
}

let point  = new Point(1 , 2);
// point.x = 12;
// point.y = 10;
point.result();
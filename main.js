"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = _x ;
        // this.y = y; 
    }
    Point.prototype.result = function () {
        console.log('x is : ' + this._x + ' , y is : ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw ("x cannot be less than 0 ");
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
// point.x = 12;
// point.y = 10;
var x = point.x;
point.x = 10;
console.log("value " + x);
point.result();

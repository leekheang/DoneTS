"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.result = function () {
        console.log('x is : ' + this.x + ' , y is : ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
// point.x = 12;
// point.y = 10;
point.result();

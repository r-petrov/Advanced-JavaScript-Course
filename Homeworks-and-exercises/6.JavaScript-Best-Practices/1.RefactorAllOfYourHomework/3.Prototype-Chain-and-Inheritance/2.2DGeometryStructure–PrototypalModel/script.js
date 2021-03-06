/**
 * Created by PC on 11.02.2016 г..
 */
"use strict";
if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

var Point = {
    init: function(name, x, y) {
        this._name = name;
        this._x = x;
        this._y = y;
        return this;
    },

    toString: function() {
        var output = this._name + '(' + this._x + ',' + this._y + ')';
        return output;
    }
};

var shapes = (function() {
    var Shape = {
        init: function(color) {
            this._color = color;
        },

        toString: function() {
            var output = 'Color: ' + this._color;

            return output;
        }
    };

    var Circle = Object.create(Shape);
    Circle.init = function (centerPoint, radius, color) {
        this._center = centerPoint;
        this._radius = radius;
        Shape.init.call(this, color);
        return this;
    };

    Circle.toString = function() {
        var output = 'Circle: center ' + this._center + ', radius = ' + this._radius + ', ';
        output += Shape.toString.call(this);

        return output;
    };

    var Rectangle = Object.create(Shape);
    Rectangle.init = function (topLeftCorner, width, height, color) {
        this._topLeftCorner = topLeftCorner;
        this._width = width;
        this._height = height;
        Shape.init.call(this, color);
        return this;
    };

    Rectangle.toString = function() {
        var output = 'Rectangle: top left corner: ' + this._topLeftCorner + ', width = ' + this._width + ', height = ' + this._height + ', ';
        output += Shape.toString.call(this);

        return output;
    };

    var Triangle = Object.create(Shape);
    Triangle.init = function (pointA, pointB, pointC, color) {
        this._pointA = pointA;
        this._pointB = pointB;
        this._pointC = pointC;
        Shape.init.call(this, color);
        return this;
    };

    Triangle.toString = function() {
        var output = 'Triangle: ' + this._pointA + ' ' + this._pointB + ' ' + this._pointC + ', ';
        output += Shape.toString.call(this);

        return output;
    };

    var Line = Object.create(Shape);
    Line.init = function (pointA, pointB, color) {
        this._pointA = pointA;
        this._pointB = pointB;
        Shape.init.call(this, color);
        return this;
    };

    Line.toString = function() {
        var output = 'Line: ' + this._pointA + ' ' + this._pointB + ', ';
        output += Shape.toString.call(this);

        return output;
    };

    var Segment = Object.create(Shape);
    Segment.init = function (pointA, pointB, color) {
        this._pointA = pointA;
        this._pointB = pointB;
        Shape.init.call(this, color);
        return this;
    };

    Segment.toString = function() {
        var output = 'Segment: ' + this._pointA + ' ' + this._pointB + ', ';
        output += Shape.toString.call(this);

        return output;
    };

    return {
        circle: Circle,
        rectangle: Rectangle,
        triangle: Triangle,
        line: Line,
        segment: Segment
    }
})();

var pointO = Object.create(Point),
    pointA = Object.create(Point),
    pointB = Object.create(Point),
    pointC = Object.create(Point),
    circle = Object.create(shapes.circle),
    rectangle = Object.create(shapes.rectangle),
    triangle = Object.create(shapes.triangle),
    line = Object.create(shapes.line),
    segment = Object.create(shapes.segment);

pointO.init('O', 7, 8);
pointA.init('A', 4, 5);
pointB.init('B', 14, 23);
pointC.init('C', 1, 4);

circle.init(pointO, 4.5, 'violet');
rectangle.init(pointO, 7, 8, 'red');
triangle.init(pointA, pointB, pointC, 'green');
line.init(pointA, pointB, '#ffffff');
segment.init(pointA, pointC, '#ffffff');

console.log(circle.toString());
console.log(rectangle.toString());
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());
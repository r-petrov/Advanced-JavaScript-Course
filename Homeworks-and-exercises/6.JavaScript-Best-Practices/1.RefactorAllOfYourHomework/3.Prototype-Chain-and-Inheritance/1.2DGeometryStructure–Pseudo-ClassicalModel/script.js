/**
 * Created by PC on 10.02.2016 г..
 */
"use strict";
if (!Object.create) {
    Object.create = function (proto) {
        function F() {};
        F.prototype = proto;
        return new F();
    };
}

if (!Object.prototype.extends) {
    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };
}

//make point constructor
var Point = (function() {
    function Point(name, x, y) {
        this._name = name;
        this._x = x;
        this._y = y;
    }

    Point.prototype.toString = function() {
        var output = this._name + '(' + this._x + this._y + ')';
        return output;
    };

    return Point;
})();

// another approach of making of point constructor
/*function Point(name, x, y) {
     return {
         name: name,
         x: x,
         y: y,
         toString: function() {
            return this.name + '(' + this.x + ',' + this.y + ')';
         }
     }
 }*/

var shapes = (function() {
    var Shape = (function() {
        function Shape(color) {
            this._color = color;
        }

        Shape.prototype.toString = function() {
            var output = 'Color: ' + this._color;

            return output;
        };

        return Shape;
    })();

    var Circle = (function() {
        function Circle(center, radius, color) {
            this._center = center;
            this._radius = radius;
            Shape.call(this, color);
        }

        Circle.prototype = Object.create(Shape.prototype);
        Circle.prototype.constructor = Circle;
        Circle.prototype.toString = function() {
            var output = 'Circle: center ' + this._center + ', radius = ' + this._radius + ', ';
            output += Shape.prototype.toString.call(this);

            return output;
        };

        return Circle;
    })();

    var Rectangle = (function() {
        function Rectangle(topLeftCorner, width, height, color) {
            this._topLeftCorner = topLeftCorner;
            this._width = width;
            this._height = height;
            Shape.call(this, color);
        }

        Rectangle.prototype = Object.create(Shape.prototype);
        Rectangle.prototype.constructor = Rectangle;
        Rectangle.prototype.toString = function() {
            var output = 'Rectangle: top left corner: ' + this._topLeftCorner + ', width = ' + this._width + ', height = ' + this._height + ', ';
            output += Shape.prototype.toString.call(this);

            return output;
        };
        return Rectangle;
    })();

    var Triangle = (function() {
        function Triangle(pointA, pointB, pointC, color) {
            this._pointA = pointA;
            this._pointB = pointB;
            this._pointC = pointC;
            Shape.call(this, color);
        }

        Triangle.prototype = Object.create(Shape.prototype);
        Triangle.prototype.constructor = Triangle;
        Triangle.prototype.toString = function() {
            var output = 'Triangle: ' + this._pointA + ' ' + this._pointB + ' ' + this._pointC + ', ';
            output += Shape.prototype.toString.call(this);

            return output;
        };

        return Triangle;
    })();

    var Line = (function() {
        function Line(pointA, pointB, color) {
            this._pointA = pointA;
            this._pointB = pointB;
            Shape.call(this, color);
        }

        Line.prototype = Object.create(Shape.prototype);
        Line.prototype.constructor = Line;
        Line.prototype.toString = function() {
            var output = 'Line: ' + this._pointA + ' ' + this._pointB + ', ';
            output += Shape.prototype.toString.call(this);

            return output;
        };

        return Line;
    })();

    var Segment = (function() {
        function Segment(pointA, pointB, color) {
            this._pointA = pointA;
            this._pointB = pointB;
            Shape.call(this, color);
        }

        Segment.prototype = Object.create(Shape.prototype);
        Segment.prototype.constructor = Segment;
        Segment.prototype.toString = function() {
            var output = 'Segment: ' + this._pointA + ' ' + this._pointB + ', ';
            output += Shape.prototype.toString.call(this);

            return output;
        };

        return Segment;
    })();

    return {
        circle: Circle,
        rectangle: Rectangle,
        triangle: Triangle,
        line: Line,
        segment: Segment
    }
})();



var pointO = new Point('O', 4, 5),
    pointA = new Point('A', 8, 9),
    pointB = new Point('B', 4, 9),
    pointC = new Point('C', 8, 7),

    circle = new shapes.circle(pointO, 4.5, 'violet'),
    rectangle = new shapes.rectangle(pointO, 7, 8, 'red'),
    triangle = new shapes.triangle(pointA, pointB, pointC, 'green'),
    line = new shapes.line(pointA, pointB, '#ffffff'),
    segment = new shapes.segment(pointA, pointC, '#ffffff');

console.log(circle.toString());
console.log(rectangle.toString());
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());

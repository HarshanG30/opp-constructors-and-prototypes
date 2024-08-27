// More on Object Literals & the 'This' Keyword
const shape1 = {
    title: 'Shape One',
    length: 20,
    breadth: 10,
    computeArea: function() {
        return this.length * this.breadth;
    },
};

const shape2 = {
    title: 'Shape Two',
    length: 30,
    breadth: 20,
    computeArea: function() {
        return this.length * this.breadth;
    },
};

console.log(shape2.computeArea());

// Constructor Functions
function Shape(title, length, breadth) {
    this.title = title;
    this.length = length;
    this.breadth = breadth;
    this.calculateArea = function() {
        return this.length * this.breadth;
    };
}

const shapeA = new Shape('Shape One', 20, 10);
console.log(shapeA.title);
console.log(shapeA.calculateArea());

const shapeB = new Shape('Shape Two', 30, 20);
const shapeC = new Shape('Shape Three', 40, 30);

console.log(shapeB.title, shapeC.title);
console.log(shapeB.calculateArea(), shapeC.calculateArea());

console.log(shapeA.constructor);
console.log(shapeB instanceof Shape);

// Literals vs Built-in Constructors
const literalStr = 'Hello';
const objectStr = new String('Hello');

console.log(literalStr, typeof literalStr);
console.log(objectStr, typeof objectStr);

// Boxing
console.log(literalStr.toUpperCase());
console.log(literalStr[0]);

// Unboxing
console.log(objectStr.valueOf(), typeof objectStr.valueOf());

console.log(literalStr.constructor);
console.log(objectStr.constructor);

console.log(literalStr instanceof String);
console.log(objectStr instanceof String);

// Other types
const literalNum = 20;
const objectNum = new Number(20);

console.log(literalNum, typeof literalNum);
console.log(objectNum, typeof objectNum);

const literalBool = true;
const objectBool = new Boolean(true);

console.log(literalBool, typeof literalBool);
console.log(objectBool, typeof objectBool);

const literalArr = [1, 2, 3];
const objectArr = new Array(1, 2, 3);

console.log(literalArr, typeof literalArr);
console.log(objectArr, typeof objectArr);

const literalFunc = function(x) {
    return x * x;
};

console.log(literalFunc, typeof literalFunc);
console.log(literalFunc(10));

const objectFunc = new Function('x', 'return x * x');
console.log(objectFunc(3));

const literalObj = {};
const objectObj = new Object();

console.log(literalObj, typeof literalObj);
console.log(objectObj, typeof objectObj);

// Working with Object Properties
console.log(shapeA.title, shapeB.length);
console.log(shapeA.length);

shapeA.color = 'blue';

shapeB.computePerimeter = () => 2 * (shapeB.length + shapeB.breadth);

delete shapeB.computePerimeter;

// Check for property
console.log(shapeB.hasOwnProperty('color'));
console.log(shapeA.hasOwnProperty('color'));

// Check keys
console.log(Object.keys(shapeA));

// Check values
console.log(Object.values(shapeB));

// Check entries
console.log(Object.entries(shapeB));

for (let [key, value] of Object.entries(shapeA)) {
    if (typeof value !== 'function') {
        console.log(`${key} - ${value}`);
    }
}

console.log(shapeB);

// Prototypes & The Prototype Chain
const shapeInstance = new Shape('Sample Shape', 20, 10);
console.log(Object.getPrototypeOf(shapeInstance));

// Adding Methods to the Prototype
Shape.prototype.computePerimeter = function() {
    return 2 * (this.length + this.breadth);
};

Shape.prototype.isSquareShape = function() {
    return this.length === this.breadth;
};

Shape.prototype.updateTitle = function(newTitle) {
    this.title = newTitle;
    return this.title;
};

console.log(shapeInstance);
console.log(shapeInstance.isSquareShape());
console.log(shapeInstance.computePerimeter());
console.log(shapeInstance.calculateArea());

// Object.create
const shapePrototypes = {
    calculateArea: function() {
        return this.length * this.breadth;
    },
    computePerimeter: function() {
        return 2 * (this.length + this.breadth);
    },
    isSquareShape: function() {
        return this.length === this.breadth;
    }
};

function initializeShape(length, breadth) {
    return Object.create(shapePrototypes, {
        length: { value: length },
        breadth: { value: breadth },
    });
}

const newShape = initializeShape(20, 10);
console.log(newShape);
console.log(newShape.calculateArea());
console.log(newShape.isSquareShape());

const anotherShape = initializeShape(30, 20);
console.log(anotherShape.calculateArea());

// Prototypical Inheritance & call()
function BaseShape(title) {
    this.title = title;
}

function RectangleShape(title, length, breadth) {
    BaseShape.call(this, title);
    this.length = length;
    this.breadth = breadth;
}

function CircleShape(title, radius) {
    BaseShape.call(this, title);
    this.radius = radius;
}

CircleShape.prototype = Object.create(BaseShape.prototype);

const rectangleInstance = new RectangleShape('Rectangle Shape', 20, 10);
const circleInstance = new CircleShape('Circle Shape', 10);

// OOP Game Challenge
function Gamer(name) {
    this.name = name;
    this.rank = 1;
    this.score = 0;
}

Gamer.prototype.increaseRank = function(points) {
    this.score += points;
    if (this.score >= 10) {
        this.rank++;
        this.score -= 10;
    }
};

Gamer.prototype.displayScore = function() {
    return `${this.name} is at rank ${this.rank} with ${this.score} points.`;
};

const player1 = new Gamer('Alex');

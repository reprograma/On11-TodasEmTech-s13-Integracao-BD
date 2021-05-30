//Como era antes de 2015:

function Person(name) {
    this._name = name;
}

var person = new Person('Simara');
var person2= new Person('Andréia');


console.log(person)


//Como é com o ES6:

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        return this.num1 + this.num2;
    }

    sub() {
        return this.num1 - this.num2;
    }

    mult() {
        return this.num1 * this.num2;
    }

    div() {
        return this.num1 / this.num2;
    }
}

const calculator = new Calculator(5, 6);

console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.mult());
console.log(calculator.div());


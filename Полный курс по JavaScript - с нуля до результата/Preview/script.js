let name = "Ivan",
    age = 30,
    mail = "ex@mail.ru";

document.write(`Пользователь ${name} ${age} лет. Его почтовый адрес: ${mail}`);

let fun = () => {
    console.log(this);
};
fun();

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; ES5
    console.log(number*basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

let video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    intenet = [...video, ...blogs, "vk", "facebook"];

console.log(intenet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [2, 5, 7];
log(...numbers);


function sayName(name) {
    let message = "My name is" + name;
    return message;
}
let arr = [1, 4, 2, 12, -12, 0, 0, 2];
let result = arr.reduce(function(sum, el){
    return sum + el;
});
let assert = require("chai").assert;

describe("sayName", function() {
    it("Получаем фразу с новым именем", function() {
        assert.typeOf(sayName("Alex"), "string");
    });
});

describe("arr", function() {
    it("Получаем сумму чисел массива", function() {
        assert.equal(result, 9);
    });
});
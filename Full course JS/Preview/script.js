function myModule() {
    this.hello = function () {
        return "Hello";
    };

    this.goodbye = function () {
        return "goodbye!";
    };
}

module.exports = myModule;
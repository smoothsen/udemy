let drink = 0;


function shoot(arrow) {
    console.log("You shooted...");
    let promise = new Promise(function( resolve, reject) {
        setTimeout(function() {
            Math.random() > 0.5 ? resolve({}) : reject("You missed");
        }, 3000);  
    });
    return promise;        
}

function win() {
    console.log("You win!");
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("I buy beer for you!");
}

function giveMoney() {
    console.log("I give your money!");
}

function loose() {
    console.log("You loose!");
}

shoot({})
        .then(mark => console.log("You got it"))
        .then(win)
        .catch(loose)
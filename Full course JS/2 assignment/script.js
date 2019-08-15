(function () {
    'use strict';
}());

var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
  

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for(let i = 0; i < 2; i++) {
//     var item = prompt("Введите обязательную статью расходов в этом месяцу"),
//         cost = prompt("Во сколько обойдётся?");

//     if ( (typeof(item))==='string' && (typeof(item))!= null && 
//     (typeof(cost))!= null && item != "" && cost != "" && item.length < 50 ) {
//         console.log("done");
//         appData.expenses[item] = cost;
//     } else {

//     }
// }

// let i = 0;
// while( i < 2 ) {
//     var item = prompt("Введите обязательную статью расходов в этом месяцу"),
//         cost = prompt("Во сколько обойдётся?");

//     if ( (typeof(item))==='string' && (typeof(item))!= null && 
//     (typeof(cost))!= null && item != "" && cost != "" && item.length < 50 ) {
//         console.log("done");
//         appData.expenses[item] = cost;
//     } else {

//     }
//     i++;
// }
let i = 0;
do {
    var item = prompt("Введите обязательную статью расходов в этом месяцу"),
        cost = prompt("Во сколько обойдётся?");

    if ( (typeof(item))==='string' && (typeof(item))!= null && 
    (typeof(cost))!= null && item != "" && cost != "" && item.length < 50 ) {
        console.log("done");
        appData.expenses[item] = cost;
    } else {

    }
    i++;
} while ( i < 2);

appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 1000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}
(function () {
    'use strict';
}());
var money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    
    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        var item = prompt("Введите обязательную статью расходов в этом месяцу"),
            cost = prompt("Во сколько обойдётся?");
    
        if ( (typeof(item))==='string' && (typeof(item))!= null && 
        (typeof(cost))!= null && item != "" && cost != "" && item.length < 50 ){
            console.log("done");
            appData.expenses[item] = cost;
        } else {
            i--;    
        }
    }
    
}
chooseExpenses();

appData.moneyPerDay = (appData.budget/30).toFixed(2);
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

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();
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

function showAppData() {
    
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            var item = prompt(`Введите обязательную статью расходов 
            в этом месяцу`),
                cost = prompt("Во сколько обойдётся?");
        
            if ( (typeof(item))==='string' && (typeof(item))!= null && 
            (typeof(cost))!= null && item != "" && 
            cost != "" && item.length < 50 ){
                console.log("done");
                appData.expenses[item] = cost;
            } else {
                i--;    
            }
        }        
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(2);
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 1000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }    
    },
    chooseOptExpenses: function() {
        for ( let i = 1; i < 3; i++){
            let opt = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() { 
        let arrToPrint = {

        };
        while(1){
            let items = prompt(`Что принесет дополнительный доход?
             (Перечислите через запяту)`, "");
            if ( items == null || items == ""){
                alert("Введи заново");
                continue;
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
                break;
            }       
        } 
        alert("Способы доп. заработка: ");
        appData.income.forEach(function(element, i, arr){
            alert(++i + ". " + element);           
        }); 
        for (const key in appData) {
            console.log(key, appData[key]);
        }      
    }
};
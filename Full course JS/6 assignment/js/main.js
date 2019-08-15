(function () {
    'use strict';
}());
let startCalc = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem = document.getElementsByClassName("expenses-item"),
    button = document.getElementsByTagName("button"),
    btnAcceptExpenses = button[0],
    btnAcceptOptionalExpenses = button[1],
    btnCalc = button[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    savingValue = document.querySelector("#savings"), 
    sumValue = document.querySelector("#sum"), 
    percentValue = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");
var money, time, totalSum;

function enableView(x) {
    btnAcceptExpenses.disabled = x;
    btnAcceptOptionalExpenses.disabled = x;
    btnCalc.disabled = x;
}
enableView(true);

startCalc.addEventListener("click", function() {
    enableView(false);
    time = prompt("Введите дату в формате YYYY-MM-DD");    
    money = +prompt("Ваш бюджет на месяц?");
    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnAcceptExpenses.addEventListener("click", function() {
    let sum = 0;
    for(let i = 0; i < expensesItem.length; i++) {
        var item = expensesItem[i].value,
            cost = expensesItem[++i].value;
    
        if ( (typeof(item))==='string' && (typeof(item))!= null && 
        (typeof(cost))!= null && item != "" && 
        cost != "" && item.length < 50 ){
            console.log("done");
            appData.expenses[item] = cost;
            sum += +cost;
        } else {
            i--;    
        }
    }
    expensesValue.textContent = sum;
});

btnAcceptOptionalExpenses.addEventListener("click", function() {
    for ( let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

btnCalc.addEventListener("click", function() {
    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget-expensesValue.textContent)/30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 1000){
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Ошибка";
    }        
}); 

incomeItem.addEventListener("input", function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

savingValue.addEventListener("click", function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("input", function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener("input", function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false        
};
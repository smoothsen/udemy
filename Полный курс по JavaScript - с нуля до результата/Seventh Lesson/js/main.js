let startCalc = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem = document.getElementsByClassName("expenses-item"),
    button = document.getElementsByTagName("button"),
    btnAcceptExpenses = button[0],
    btnAcceptOptionalExpenses = button[1],
    btnCalc = button[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeValueId = document.querySelector("#income"),
    savingValue = document.querySelector("#savings"), 
    sumValue = document.querySelector("#sum"), 
    percentValue = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

    (function () {
        'use strict';
    }());
    var money, time;
    

    startCalc.addEventListener("click", function() {
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
            let opt = optionalExpensesItem[i];
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.value = appData.optionalExpenses[i] + " ";
        }
    });

    var appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
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
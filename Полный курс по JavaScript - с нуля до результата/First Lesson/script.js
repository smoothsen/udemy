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

var item = prompt("Введите обязательную статью расходов в этом месяцу"),
    cost = prompt("Во сколько обойдётся?");

alert((appData.budget/30).toFixed(2));
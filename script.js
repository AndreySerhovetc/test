

let money = prompt('Ващ місячний дохід?', ''),
    time = prompt('Введіть дату в форматі YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введіть обовязкову статтю розходів в цьому місяці", ''),
    a2 = prompt("В яку сумму обійдеться", ''),
    a3 = prompt("Введіть обовязкову статтю розходів в цьому місяці", ''),
    a4 = prompt("В яку сумму обійдеться", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget/30);

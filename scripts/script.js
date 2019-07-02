'use scrict';

//1
let money = +prompt('Ваш месячный доход?');
console.log(money);

//2
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
console.log(addExpenses);

//3
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

//4
console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

//5
let question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
//console.log(question1.split(', '));
console.log(question1);
let question2 = +prompt("Во сколько это обойдется?"); 
console.log(question2);
let question3 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
console.log(question3);
let question4 = +prompt("Во сколько это обойдется?"); 
console.log(question4);

//6
let budgetMonth = money - question2 - question4;
console.log("Budget month: " + budgetMonth);

//7
let mission = 30000;
let period = mission / budgetMonth;
console.log("Period: " + Math.ceil(period));

//8
let budgetDay = budgetMonth / 30;
console.log("Budget day: " + Math.floor(budgetDay));

//9
if(budgetDay > 800) {
    console.log("Высокий уровень доход");
}
else if(budgetDay > 300 && budgetDay <= 800) {
    console.log("Средний уровень дохода");
}
else if(budgetDay >= 0 && budgetDay <= 300) {
    console.log("Низкий уровень дохода");
}
else {
    console.log("Что то пошло не так");
}    
  
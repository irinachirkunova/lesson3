'use scrict';
let money = +prompt('Ваш месячный доход?'),
    income = "freelance",
    mission = 30000,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
    question2 = +prompt("Во сколько это обойдется?"), 
    question3 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
    question4 = +prompt("Во сколько это обойдется?"); 

let budgetMonth = money - question2 - question4;

let period = mission / budgetMonth;

let budgetDay = budgetMonth / 30;


let showTypeof = function(item) {
    console.log(item, typeof item);
}

showTypeof(money);
showTypeof(income);
showTypeof(deposit); 

function getStatusIncome() {
    if(budgetDay > 800) {
    return ("Высокий уровень доход");
    }
    else if(budgetDay > 300 && budgetDay <= 800) {
    return ("Средний уровень дохода");
    }
    else if(budgetDay >= 0 && budgetDay <= 300){
    return ("Низкий уровень дохода");
    }
    else {
    return ("Что то пошло не так");
    }    
}

console.log("getStatusIncome(): ", getStatusIncome());
 
//1-a
let getExpensesMonth = function() {
    return question2 + question4
}

console.log("Cуммa всех расходов за месяц: ", getExpensesMonth());

//1-b
function getAccumulatedMonth() {
    return money - getExpensesMonth();
}

let accumulatedMonth = getAccumulatedMonth();
console.log("Накопления за месяц: " + accumulatedMonth); 

//1-c
function getTargetMonth() 
{
    return Math.ceil(mission/ getAccumulatedMonth());
}
console.log("за какой период будет достигнута цель: " + getTargetMonth());
 
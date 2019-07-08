'use scrict';

let money,
    income = "freelance",
    mission = 30000,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    questionOne,
    questionTwo;


//1
let start = function() {
    do {
        money = prompt('Ваш месячный доход?', 1635);
        console.log(money);
    }
    while(isNaN(money) || money == '' || money == null);
}

start();

//2
let expensesMonth = function() {
    let sum = 0,
        result;
 
        for(let i = 0; i < 2; i++) {
            if(i === 0) {
                questionOne = prompt("Какие обязательные ежемесячные расходы у вас есть?");
            }
            else {
                questionTwo = prompt("Какие обязательные ежемесячные расходы у вас есть?");
            }
            do{
                result = prompt("Во сколько это обойдется?"); 
            }
           
            while(isNaN(result) || result == '' || result == null) 
            
            sum += +result;
        }
    return sum;  
}

let expensesAmount = expensesMonth();

function getAccumulatedMonth() {
    let result = +money - expensesAmount;
    
    return result;
};

var accumulateMonth = getAccumulatedMonth();


//3
function getTargetMonth() 
{
    var result = Math.ceil(mission/ accumulateMonth);
    if(result > 0) {
        return ("за какой период будет достигнута цель: " + result);
    }
    else {
        return ("Цель не будет достигнута");
    }
};

console.log(getTargetMonth());

//4
let budgetDay = accumulateMonth / 30;


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




 


  


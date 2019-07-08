'use scrict';

//1
function showArrayOfNumbers(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) == '2' || array[i].charAt(0) == '4') {
            console.log(array[i]);
        }
    }
}
let array = ['24', '42', '89', '77', '44', '20', '29'];
showArrayOfNumbers(array);


//2
function showSimpleNumbers() {
    for (var i = 2; i <= 100; i++){
        for(var j = 2; j <= i; j++){
            if (i % j == 0) break;
        }
        if(j == i) console.log("Простое число: " + i + " Делителя данного числа: 1, " + j);
    }
}
showSimpleNumbers();

'use scrict';
 
 let changeString = function(a) {   
     if(!isNaN(a)) {
         return ("В  аргумент передана не строка!");
     }
     else if(a.length < 30) {
         return a = a.trim();
     }
     else {
         return a = a.slice(0,29) + "...";

     }
 }

 let a = 10;
 console.log(changeString(a));

 let b = "   Если строка более 30  "
 console.log(changeString(b));

 let c = "Если строка более 30 знаков, то после 30го символа часть текста скрывается и вместо них появляются три точки";
 console.log(changeString(c));

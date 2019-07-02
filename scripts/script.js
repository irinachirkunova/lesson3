'use scrict';
//1
let lang = prompt("Переменная lang может принимать 2 значения: 'ru' 'en'. Выберите: ");
let daysRu = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//if
if(lang === 'ru') 
{
    console.log(daysRu);

}
else {
    console.log(daysEn);
}

//switch-case 
switch(lang) {
    case "ru":
    console.log(daysRu);
    break;
    case "en":
    console.log(daysEn);   
    break;
    default:
    console.log("Tакого языка нет!");
}

//многомерный массив
let array = [ [daysEn], [daysRu] ];
let result = (lang === "ru") ? console.log(array[1]) :
(lang === "en") ? console.log(array[0]) : console.log("Tакого языка нет!");



//2
let namePerson = prompt("Kак вас зовут?");
let res = (namePerson === "Артем") ? console.log("директор") :
(namePerson === "Максим") ? console.log("преподаватель") : console.log("студент");

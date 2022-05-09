 // 1.создать переменную которая
 // будет спрашивать имя и потом
 // приветствовать по вашему имени

 const request_name = prompt("Как вас зовут?");
 console.log("Hello " + request_name)


 // 2.создаёте 2 массива и сравниваете их длину, с помощью length

const array_first = ['Apple', 'Banana', 'watermelon', 'lemon'];
const array_second = ['Cucumber', 'Tomatoes', 'Pepper'];


if(array_first.length > array_second.length){
    console.log(array_first.length + ">" + array_second.length)
} else if(array_first.length < array_second.length){
    console.log(array_first.length + "<" + array_second.length)
} else{
    console.log(array_first.length + "=" + array_second.length)
}

//3. Изучите switch case, сделайте светофор
const trafficLights = prompt("Угадай цвет из цветов светофора")

 switch (trafficLights) {
     case "Зеленый":
         alert("Упс, не угадал");
         break;
     case "Желтый":
         alert("Упс, не угадал");
         break;
     case "Красный" :
         alert("Да ты мощный");
         break;
     default:
         alert("Нет такого цвета в списке")
 }
var dollar = 10966
var russia = 500 * dollar 
var dubai = 1000 * dollar
var toshkent = 300 * dollar
var summa = russia + dubai + toshkent

var money = Number(prompt("Pulingizni kiriting"))

var heading = document.querySelector(".heading")

if(money >= summa){
    heading.textContent = "Barcha davlatga yetadi ";
} 
else if(money >=dubai){
    heading.textContent = "Dubai";
} 
else if(money >= russia){
    heading.textContent= "Russia";
}
else if(money >= toshkent){
    heading.textContent = "Toshkent";
}else{
    heading.textContent = "Uyda qol" ;
}







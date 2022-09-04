console.log("slatt")

const firstNumber = Math.floor(Math.random()*6) + 1
const secondNumber = Math.floor(Math.random()*6) + 1
const thirdNumber = Math.floor(Math.random()*6) + 1
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

const firstDie =  "assets/images/d" + firstNumber + ".png";
const secondDie =  "assets/images/d" + secondNumber + ".png";
const thirdDie =  "assets/images/d" + thirdNumber + ".png";

document.querySelectorAll('img')[0].setAttribute("src",firstDie);
document.querySelectorAll('img')[1].setAttribute("src",secondDie);
document.querySelectorAll('img')[2].setAttribute("src",thirdDie);
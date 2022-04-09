// let timeId = setInterval(() => {alert("C-STEMP")}, 2000);
// setTimeout(() => {clearInterval(timeId), alert("stoped");
    
// }, 10000);

function myFun() {
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

var greenOn = setTimeout(() => {
    green.style.opacity=1;
    red.style.opacity=.3;
    yellow.style.opacity=.3;  
}, 0);

var yellowOn = setTimeout(() => {
    green.style.opacity=.3;
    red.style.opacity=.3;
    yellow.style.opacity=1;  
}, 15000);


var redOn = setTimeout(() => {
    green.style.opacity=.3;
    red.style.opacity=1;
    yellow.style.opacity=.3;  
}, 20000);

}
myFun();
var timer = setInterval(() => {myFun()
    
}, 30000);

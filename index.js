let number = 0;
document.getElementById("btn1").onclick = function(){
    console.log("btn1 working")
    number = number + 1;
    console.log(number);
    document.getElementById("num1").innerHTML = number
}
document.getElementById("btn2").onclick = function(){
    console.log("btn1 working")
    number = 0;
    console.log(number);
    document.getElementById("num1").innerHTML = number
}
document.getElementById("btn3").onclick = function(){
    console.log("btn1 working")
    number = number - 1;
    console.log(number);
    if(number < 0){
        alert("-ve value")
        number = 0;
    }
    document.getElementById("num1").innerHTML = number
}
let number2 = 0;
document.getElementById("btn4").onclick = function(){
    console.log("btn1 working")
    number2 = number2 + 1;
    console.log(number2);
    document.getElementById("num2").innerHTML = number2
}
document.getElementById("btn5").onclick = function(){
    console.log("btn1 working")
    number2 = 0;
    console.log(number2);
}
document.getElementById("btn6").onclick = function(){
    console.log("btn1 working")
    number2 = number2 - 1;
    console.log(number2);
    if(number2 < 0){
        alert("-ve value")
        number2 = 0;
    }
    document.getElementById("num2").innerHTML = number2
}
let number3;
document.getElementById("btn7").onclick = function(){
    console.log("btn1 working")
    number3 = number2 - number;
    console.log(number3);
   
    document.getElementById("num3").innerHTML = number3
}
document.getElementById("btn8").onclick = function(){
    console.log("btn1 working")
    number3 = 0;
    console.log(number3);
   
    document.getElementById("num3").innerHTML = number3
}
document.getElementById("btn9").onclick = function(){
    console.log("btn1 working")
    number3 = number2/number;
    console.log(number3);
   
    document.getElementById("num3").innerHTML = number3
}
document.getElementById("btn10").onclick = function(){
    console.log("btn1 working")
    number3 = number2 + number;
    console.log(number3);
   
    document.getElementById("num3").innerHTML = number3
}
document.getElementById("btn11").onclick = function(){
        console.log("btn1 working")
        number3 = number2*number;
        console.log(number3);
       
        document.getElementById("num3").innerHTML = number3
    }
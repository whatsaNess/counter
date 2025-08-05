let number = document.getElementById('num')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let container = document.getElementById('con')
let btn = document.getElementById('btn')

if(number.innerText == 0){
    minus.style.display = "none"}

plus.onclick = function(){
let num = Number(number.innerText);
num +=1;
number.innerText = num    
    if(number.innerText > 0){
    minus.style.display = "block"
  
}
}

 
minus.onclick = function () {
    let num = Number(number.innerText);
    if (num > 0) {
        num -= 1;
        number.innerText = num;
    }

    if (num === 0) {
        minus.style.display = "none";
    }
}

btn.onclick = function(){
    number.innerText = 0
    if(number.innerText == 0){
        minus.style.display = "none"
    }
}

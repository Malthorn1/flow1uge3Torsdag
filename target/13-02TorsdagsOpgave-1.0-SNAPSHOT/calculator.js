document.getElementById("buttons").onclick = clicked;
var number1 = "";

function clicked(evt) {
    if (evt.target.innerText !== '=') {
    console.log(this.id);
    number1 += evt.target.innerText;
    console.log(number1);
    document.getElementById("display").innerHTML = number1;
     
    } else {
//        console.log(evil(number1)); 
        number1 = result(number1); 
        document.getElementById("display").innerHTML = number1;
    }
}

function result(fn) {
  return new Function('return ' + fn)();
}




function haalwaarde() {
    num1 = parseInt(document.getElementById("nummereen").value);
    num2 = parseInt(document.getElementById("nummertwee").value);



}


function multiplyBy() {
    haalwaarde();
   let result = num1 * num2;
    document.getElementById("result").textContent = result;

  
}

function divideBy() {
    haalwaarde();
   let result = num1 / num2;
    document.getElementById("result").textContent = result;

  
}

function minusBy() {
    haalwaarde();
   let result = num1 - num2;
    document.getElementById("result").textContent = result;

  
}

function plusBy() {
    haalwaarde();
   let result = num1 + num2;
    document.getElementById("result").textContent = result;

  
}


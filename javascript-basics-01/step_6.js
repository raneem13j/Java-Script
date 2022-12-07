document.getElementById("validate").onclick = function(){
 var firstNumber = document.getElementById("first_number").value;
 var secondNumber = document.getElementById("second_number").value;
 var remainder = firstNumber%secondNumber;
 alert(remainder);
}
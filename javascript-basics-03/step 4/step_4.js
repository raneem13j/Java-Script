
var confirm = document.getElementById("confirmation");
var butt = document.querySelector("button");


var change_border = function(){
    var password = document.getElementById("password");
    var pass_value = password.value;
    if (pass_value !== null && pass_value !== "s1234") {
        password.style.border = "3px solid red";
        confirm.style.border = "3px solid red"
    }
}
butt.addEventListener("click", change_border);
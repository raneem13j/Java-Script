let div = document.getElementById("text");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");

green.addEventListener("mouseover", function(){
     document.getElementById("text").style.color = "green";
})
red.addEventListener("mouseover", function(){
    div.style.color = "red";
})
blue.addEventListener("mouseover", function(){
    div.style.color = "blue";
})
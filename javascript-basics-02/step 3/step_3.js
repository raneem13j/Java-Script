let div = document.querySelector("#demo")

let input = document.querySelector("#name").addEventListener("change", function(){
    document.querySelector("#demo").innerHTML = "How old are you? and where do you live?";
})
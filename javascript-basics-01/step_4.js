document.getElementById("validate").onclick = function(){
   var user = document.getElementById("name").value;

   var surname = document.getElementById("surname").value;
    
   var city = document.getElementById("city").value;
   alert("Hello " + user + " " + surname + " from" + city)
}
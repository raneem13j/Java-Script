document.getElementById("validate").onclick = function(){
  var age = document.getElementById("age").value;
  let result = "";
  
  if (age > 18) { 
    result = "you are over 18";
  } else{
    result = "you are under 18"; 
    
  }
   alert(result);
}
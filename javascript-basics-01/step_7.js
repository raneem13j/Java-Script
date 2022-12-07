document.getElementById("validate").onclick = function(){
  var shoe = document.getElementById("shoe_size").value;
  var year = document.getElementById("year").value;
  var multi1 = shoe * 2;
  var adds = multi1 + 5;
  var multi2 = adds * 50;
  var subtract = multi2 - year;
  var add = subtract + 1766;
  alert(add);
}
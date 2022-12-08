function set() {
    var val = confirm("Do you want to reset?");
 
    if (val == true) {
        document.getElementById("name").value = null;
        document.getElementById("surname").value = "";
        document.getElementById("city").value = "";
    }else {
     alert("no");
     return 0;
    }
 }
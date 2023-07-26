
function clearScreen(){
    document.getElementById("result").value = "";
  }
  
  function ram(value){
    let res= document.getElementById("result");
    if(res.value == "undefined"){
      res.value ="";
    }
  
    res.value += value;
  }
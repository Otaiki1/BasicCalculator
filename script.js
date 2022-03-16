function calculas(){
   x = document.getElementById("number1").value 
   y = document.getElementById("number2").value
   z = document.getElementById("operator").value
   ans = Number(x) + z +Number(y)
   ans = eval(ans) 
   alert(ans)
}

function reset(){
   x = document.getElementById("number1")
   y = document.getElementById("number2")
   z = document.getElementById("operator")
   x.value = ""
   y.value = ""
   z.value = ""
}
function rehnen(){
var op1,op2,oper,result;
op1=document.getElementById("op1").value;
op2=document.getElementById("op2").value;
oper=document.getElementById("oper").value;
switch (oper) {
  case "+":
    result=sum(op1,op2);
    break;
  case "-":
    result=sub(op1,op2);
    break;
  case "*":
    result=mul(op1,op2);
    break;
  case "/":
    result=div(op1,op2);
    break;
  case "%":
    result=rem(op1,op2);
    break;
  case "p":
      result=Math.pow(op1,op2);
      break;
  default:
    result = "Неверный ввод";
}
document.getElementById("result").innerHTML=result;
}
function sum(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function mul(a,b){
  return a*b;
}
function div(a,b){
  return a/b;
}
function rem(a,b){
  return a%b;
}

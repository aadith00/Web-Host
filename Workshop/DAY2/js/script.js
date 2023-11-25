var a = 10;
var b=10;
var c;
c=a+b;
console.log(c);

function add(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;

    var c=parseInt(a)+parseInt(b);
    var c=document.getElementById("answer").value=c;

}
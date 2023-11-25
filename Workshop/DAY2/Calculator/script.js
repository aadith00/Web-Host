function equation(val){
    document.getElementById("input").value+=val;
}

function calculation(val){
    var a=document.getElementById("input").value;
    var c=eval(a)
    document.getElementById("input").value=c
}

function clr(val){
    document.getElementById("input").value=" ";
}
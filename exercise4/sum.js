

function sumofSquares(){
    var demo=document.getElementById("demo");
var square =document.getElementById("square").value;
var sqre=0;
    var sum =0;
for(var i=0;i<square.length;i++){
sqre= square[i]*square[i];
sum +=sqre;
demo.innerHTML="sum of square: " +sum;
 
}

}
var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var demo=document.getElementById("demo");

function findLarge(){
    if(num1.value>num2.value){
    demo.innerHTML= num1.value +" is larger";
    demo.style.color="blue";
  
}
else {
    demo.innerHTML=num2.value + " is larger";
    demo.style.color="blue";
  
}

}
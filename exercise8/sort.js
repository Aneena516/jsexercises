

var demo=document.getElementById("demo");
function sort(){
    var x;
    var y;
    var arr=["januvary","februvary","march","april","may","june"];
    for(x in arr){
 var x=arr.sort();
demo.innerHTML=x;
    }
}
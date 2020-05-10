var i,j;

var str="javascript";

var x;
function print(){
 for(i=0;i<=str.length;++i){
        var output="";
        for(j=0;j<i;++j){
               output +=str[j];
               document.write("<br>");
               
        }
        for(x of output){
        document.write(x);
        
        
        } 
 }

    
}
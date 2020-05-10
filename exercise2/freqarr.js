


function frequentItem(){
    var demo=document.getElementById("demo")
    var arr1=document.getElementById("arr1").value;
    var mf=1;
    var m=0;
    var item;
    
    for( var i=0;i<arr1.length;i++){
        for(var j=i;j<arr1.length;j++){
            if(arr1[i]==arr1[j]){
               m++; 
            }
           else if(mf<m){
                mf=m;
               item=arr1[i];
            }
           
        }
        m=0;
       demo.innerHTML=item + "  is the most frequent item"; 
    }

}
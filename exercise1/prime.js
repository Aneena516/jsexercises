
function prime(){
m=0;
    var n=[24,6,7,8,9,45]
for(var i=2;i<=n[0];i++){
    if(n[0]%i==0){
       m++;
    }
}

   if(m==1){
       alert("prime");
   }
   else{
       alert("not prime");
   }

} 
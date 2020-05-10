

function text_truncate(str,length,ending){
   
   if(length==null){
       length=100;
   }
   if(ending==null){
       ending='...';
   }
   if(str.length>length){
      return str.substring(0,length - ending.length) + ending;
   }else{
    return str;
    
   }
}
function truncate(){

var res=text_truncate("how to truncate the text when it is more than a specified characters.",27)
alert(res);
}
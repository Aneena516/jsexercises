function swapLetter(){
    str = 'THE QUICK BROWN BOX';
   
    
    
      for(var x=0; x<str.length; x++)
      {
        if(str[0]==str[0].toUpperCase())
        {
       var upper= (str) => (str[0].toLowerCase() + str.slice(1).toUpperCase());
          var letter =str.split(" ").map(upper).join(" ");
        }
      
       
      }
    alert(letter);
}

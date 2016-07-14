 function flipCoin(){
   var coin = document.getElementById("coin");
   var results = document.getElementById("results");
   var rand= Math.floor(Math.random() * 2);
   
   if(rand==0){
       document.getElementById("myImage").setAttribute("src", "http://www.thecoinspot.com/25c/1988%20Type%202%20Clad%20Washington%20Quarter%20Obverse.png")
     results.innerHTML = "You flipped heads!";
     return heads()
       
   }
   else{
       
        document.getElementById("myImage").setAttribute("src", "http://www.thecoinspot.com/25c/1988%20Type%202%20Clad%20Washington%20Quarter%20Reverse.png")   
       results.innerHTML = "You flipped tails!";
           
       
    }
   }
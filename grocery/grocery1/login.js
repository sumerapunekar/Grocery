


function submit(){
    var email =document.getElementById("email").value ;
    
    var pass = document.getElementById("pass").value ;
     if(email<9 && pass < 9){
        return alert(" Not Successfully Logged In")
       }
       else if(email && pass > 9){
        return alert("Successfully Logged In")
       };
    
     if(email<9 ){
       return alert("Invalid Email")
      }
     else if(pass<9){
        return alert("Invalid password")
      };
  
   
   
   
}
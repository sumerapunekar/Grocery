const  UpdateCounter = (x) =>{
   document.getElementById("cart").innerHTML = x ;
}
const Counter = (function (x) {
   let counter = x 
   return [
      function () { counter ++ ; UpdateCounter(counter)
   },
   function () { if(counter<=0)return ;
      counter -- ; UpdateCounter(counter)
   }]
})(0) ;



// const cartIcon = document.querySelector("#w1")
// const wholeCartWindow = document.querySelector("#fas")
// wholeCartWindow.inWindow=0

// cartIcon.addEventListener("mouseover",()=>{
//    if(wholeCartWindow.classList.contains('hide'))
//    wholeCartWindow.classList.remove('hide')
// })
// cartIcon.addEventListener("mouseleave",()=>{
//    // if(wholeCartWindow.classList.contains('hide'))
//    wholeCartWindow.classList.add('hide')
// })

// wholeCartWindow.addEventListener("mouseover",()=>{
//    this.inWindow=1
// })
// console.log("hello")
let win = document.getElementById("w1") ;
let btn = document.getElementById("b1");

btn.onclick = function () {
   win.classList.remove('hidden')
   console.log("hello")
}


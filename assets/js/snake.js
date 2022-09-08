
   const snake = document.getElementById('img');

   function removeSpinClass() {
       snake.classList.remove('spinImg');
       
   }
   snake.addEventListener('animationend', removeSpinClass)
   
  function spin(){
    document.getElementById('img').className = 'spinImg'
    
     }
   
 
 

  











function rotateImage() {
  var image = document.getElementById("image");
  if (image.style.webkitAnimationPlayState == "running") {
    image.style.webkitAnimationPlayState = "paused";
  } else {
    image.style.webkitAnimationPlayState = "running";
  }
}
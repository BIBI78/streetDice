
   
  function spin(){
    document.getElementById('img').className = 'spinImg'
    document.getElementById('img1').className = 'spinImg'
    document.getElementById('img2').className = 'spinImg'
   
    
     }

     const snake = document.getElementById('img');
     const snake1 = document.getElementById('img1');
     const snake2 = document.getElementById('img2');

     function removeSpinClass() {
         snake.classList.remove('spinImg');
         snake1.classList.remove('spinImg');
         snake2.classList.remove('spinImg');
      
         
     }
     snake.addEventListener('animationend', removeSpinClass)
     
   
     


function setDice() {
  const firstNumber = Math.floor(Math.random()*6) + 1;
    const secondNumber = Math.floor(Math.random()*6) + 1;
    const thirdNumber = Math.floor(Math.random()*6) + 1;
  const playerRoll = [firstNumber ,  secondNumber, thirdNumber];
  console.log(playerRoll)
  
}





function rollDie(){
    const firstNumber = Math.floor(Math.random()*6) + 1;
    const secondNumber = Math.floor(Math.random()*6) + 1;
    const thirdNumber = Math.floor(Math.random()*6) + 1;



    const firstDie =  "assets/images/d" + firstNumber + ".png";
    const secondDie =  "assets/images/d" + secondNumber + ".png";
    const thirdDie =  "assets/images/d" + thirdNumber + ".png";

    document.getElementsByTagName('img')[0].setAttribute("src",firstDie); 
    document.getElementsByTagName('img')[1].setAttribute("src",secondDie); 
    document.getElementsByTagName('img')[2].setAttribute("src",thirdDie); 

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(thirdNumber);
    console.log("slatt");
    
  }


  function rollDieTwo() {

    const fourthNumber = Math.floor(Math.random()*6) + 1;
    const fifthNumber = Math.floor(Math.random()*6) + 1;
    const sixthNumber = Math.floor(Math.random()*6) + 1;



    const fourthDie =  "assets/images/d" + fourthNumber + ".png";
    const fifthDie =  "assets/images/d" + fifthNumber + ".png";
    const sixthDie =  "assets/images/d" + sixthNumber + ".png";

    document.getElementsByTagName('img')[3].setAttribute("src",fourthDie); 
    document.getElementsByTagName('img')[4].setAttribute("src",fifthDie); 
    document.getElementsByTagName('img')[5].setAttribute("src",sixthDie); 

    console.log(fourthNumber);
    console.log(fifthNumber);
    console.log(sixthNumber);
    console.log("blatt");


  }

  function rollBoth(){
    const firstNumber = Math.floor(Math.random()*6) + 1;
    const secondNumber = Math.floor(Math.random()*6) + 1;
    const thirdNumber = Math.floor(Math.random()*6) + 1;
    const fourthNumber = Math.floor(Math.random()*6) + 1;
    const fifthNumber = Math.floor(Math.random()*6) + 1;
    const sixthNumber = Math.floor(Math.random()*6) + 1;


    const firstDie =  "assets/images/d" + firstNumber + ".png";
    const secondDie =  "assets/images/d" + secondNumber + ".png";
    const thirdDie =  "assets/images/d" + thirdNumber + ".png";
    const fourthDie =  "assets/images/d" + fourthNumber + ".png";
    const fifthDie =  "assets/images/d" + fifthNumber + ".png";
    const sixthDie =  "assets/images/d" + sixthNumber + ".png";

    document.getElementsByTagName('img')[0].setAttribute("src",firstDie); 
    document.getElementsByTagName('img')[1].setAttribute("src",secondDie); 
    document.getElementsByTagName('img')[2].setAttribute("src",thirdDie); 
    document.getElementsByTagName('img')[3].setAttribute("src",fourthDie); 
    document.getElementsByTagName('img')[4].setAttribute("src",fifthDie); 
    document.getElementsByTagName('img')[5].setAttribute("src",sixthDie); 

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(thirdNumber);
    console.log(fourthNumber);
    console.log(fifthNumber);
    console.log(sixthNumber);
    console.log("free YSL");

  }

 
    function play() {
      var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
      audio.play();
    }

 
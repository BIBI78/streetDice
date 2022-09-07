// function ani() {
//     document.getElementById('img').className = 'classname';
//   }


  // function spin(){
  //    document.getElementById('img').className = 'spinImg';
   
  // }

  // function spin(){
  //   document.getElementById('img').className = 'spinImg'
  //    }
   
  // document.getElementById("spin").addEventListener("click", spin);

 

  document.getElementById("myBtn").addEventListener("click", displayDate);

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }



  document.getElementById("mySpin").addEventListener("click", spin);

  function spin(){
   document.getElementById('img').className = 'spinImg';
   
   
  
 }


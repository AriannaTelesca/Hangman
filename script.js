const wordArray = ["supply","oval","channel","bad","police","late","nonchalant","silk","exclusive","man"];

var numberOfWord = wordArray.length;
var wordIndex = Math.floor(Math.random()*numberOfWord);
var word = wordArray[wordIndex];

var buttonLettre = document.querySelectorAll("button");
var dash = document.getElementById("dash");
var livesCounter = document.getElementById("lives");
var info = document.getElementById("info");
var play = document.getElementById("play");

var wordFinder = [];
wordFinder.length == word.length;

for(k=0; k<word.length; k++){
  wordFinder.push("_");
  dash.innerHTML = wordFinder.join(" ");
}

var input = "";
var lives = 5;
livesCounter.innerHTML = lives;

if(lives == 5){
  document.body.style.backgroundImage = "url('./images/kelly-sikkema-4JxV3Gs42Ks-unsplash.jpg')"; 
}

while(wordFinder.join("") !== word.toUpperCase() && lives>0){

  for (let x in buttonLettre){
 
    buttonLettre[x].addEventListener("click", ()=>{




      buttonLettre[x].style.background = "grey";
      input = buttonLettre[x].innerHTML;
      var inputLowerCase = input.toLowerCase();
      var result = word.includes(inputLowerCase);    
      var arrayIndex = [];

      for(i=0; i<word.length; i++){

        if(word[i] == inputLowerCase){
          arrayIndex.push(i);
        }
      }


      if(result == true){
        for(j=0; j<arrayIndex.length; j++){
          console.log(arrayIndex);
          wordFinder.splice(arrayIndex[j],1, input);
        }
      } else {
        lives = (lives-1);
        
        if(lives == 4){
          document.body.style.backgroundImage = "url('./images/drawisland5.png')"; 
        }
        else if(lives == 3){
          document.body.style.backgroundImage = "url('./images/drawisland4.png')"; 
        }
        else if(lives == 2){
          document.body.style.backgroundImage = "url('./images/drawisland3.png')"; 
        }
        else if(lives == 1){
          document.body.style.backgroundImage = "url('./images/drawisland2.png')"; 
        }
      }
        
      if(wordFinder.join("") === word.toUpperCase()) {
          
        for(let x in buttonLettre){
          buttonLettre[x].disabled = true;
        }

          play.style.display = "initial";
          info.innerHTML = "You win!";
      } else if(lives<=0){
        
        for(let x in buttonLettre){
          buttonLettre[x].disabled = true;
        }
        if(lives == 0){
          document.body.style.backgroundImage = "url('./images/drawisland.png')"; 
        }
        play.style.display = "initial";
        info.innerHTML = "You've lost. The word was '"+word+"'!";
      }
             
      dash.innerHTML = wordFinder.join(" ");
      livesCounter.innerHTML = lives;
      
    });
  }

}



function refreshPage(){
  window.location.reload();
} 
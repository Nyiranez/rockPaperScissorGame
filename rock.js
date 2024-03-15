
let userDisplay= document.querySelector(".user-choice");
let computerDisplay= document.querySelector(".computer-choice");
let result= document.querySelector(".result");

let choices=["rock","paper","scissor"];

 function getChoice(playChoice){
    let computerChoice=choices[Math.floor(Math.random()*3)];

    if(computerChoice===playChoice){
    
   result.textContent="IT'S A TIE";
    }
    else if(computerChoice==="rock"){
        if(playChoice==="paper"){
           
   result.textContent="you win";
        }
        else{
            
   result.textContent="computer win";
        }
    }
    else if(computerChoice==="paper"){
        if(playChoice==="scissor"){
            
   result.textContent="you win";
        }
        else{
           
   result.textContent="computer win";
        }
    }
    else if(computerChoice==="scissor"){
        if(playChoice==="rock"){
            
   result.textContent="you win";
        }
        else{
           
   result.textContent="computer win";
        }
    }
    userDisplay.textContent=`PLAYER: ${playChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;

};
// Player1 Portion
let player1 = document.querySelector('.player1')
let userInput1= document.querySelector('.userInput1')
let button1 = document.querySelector('.button1')
let error1= document.querySelector('.error1')
let playerp= document.querySelector('.playerp')
player1.style.color= 'green'
// Player1 workplace
button1.addEventListener('click',function(){
    if(!userInput1.value){
        error1.innerHTML='Empty'
        error1.style.color = 'red'
        
    }
    else if((userInput1.value-11)==0? false : !(userInput1.value-11)){
        error1.innerHTML='Please give a number.'
        error1.style.color = 'red'
    } 
    else if (userInput1.value<0 || userInput1.value>=10){
        error1.innerHTML = 'Please enter a number between 1- 10.'
        error1.style.color = 'red'
        playerp.style.display= 'none'
    }
    else{


        // player -01 display
        error1.style.display = 'none'
        error1.style.display = 'none'
        player1.style.display = 'none'
        button1.style.display = 'none'
        userInput1.style.display = 'none'
        playerp.style.display = 'none'
        player2.style.color= 'blue'


        // player -02 display
        error2.style.display = 'Block'
        player2.style.display = 'Block'
        button2.style.display = 'inline-Block'
        userInput2.style.display = 'inline-Block'
        chance.style.display = 'Block'

    }
})

  // Player2 Portion
        
let player2 = document.querySelector('.player2')
let userInput2= document.querySelector('.userInput2')
let button2 = document.querySelector('.button2')
let error2= document.querySelector('.error2')
let chance = document.querySelector('.chance')
let count = document.querySelector('.count')
let counter = 3
  

//   Player2 workPlace

button2.addEventListener('click',function(){
    if(counter>0)
    counter --;
    count.innerHTML = counter
    if(userInput1.value==userInput2.value){
        player2.innerHTML = 'Congrats! you win.'
        button2.style.display = 'none'
        userInput2.style.display = 'none'
        chance.style.display = 'none'
        player2.style.color = 'red'
        error2.style.display= 'none'
    }
    
    if(!userInput2.value){
        error2.innerHTML= 'please give a number.'
        chance.style.display = 'Block'
    }
    else if(!(userInput2.value-65476)){
        error2.innerHTML= 'you enter a string. please enter a number.'
        chance.style.display = 'Block'
    }
    else if(userInput2.value<0 && userInput2.value>11){
        error2.innerHTML = 'Please give a number between 1- 10.'
        error2.style.display= 'Block'
    }
    else{
        if(counter>0){
            
        }
        
        else {
            player2.innerHTML= 'Ops! you lose.'
            chance.style.display = 'none'
            button2.style.display = 'none'
            userInput2.style.display = 'none'
            player2.style.color = 'red'
            error2.style.display = 'none'
            
        }
    }
})
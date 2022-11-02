// Iteration 1: Declare variables required for this game
const gameBody=document.getElementById('game-body')




// Iteration 1.2: Add shotgun sound
const shotgun=new Audio('./assets/shotgun.wav')

// Iteration 1.3: Add background sound
const backgroundSound = new Audio("./assets/bgm.mp3");


// Iteration 1.4: Add lives
let lives=4,time=60;


// Iteration 2: Write a function to make a zombie
backgroundSound.play();
backgroundSound.loop = true;

callZombie()

gameBody.onclick=()=>{
    shotgun.pause();
    shotgun.currentTime=0;
    shotgun.play();
}

function callZombie() {
    document.getElementById('lives').innerHTML=`
    <img src="./assets/zombie-${randomNumber(1,6)}.png" alt="" class="zombie-image" id="zombie">
    `;
    document.getElementById('zombie').style.left=randomNumber(1,1200)+'px';
    document.getElementById('zombie').style.animationDuration=randomNumber(2,5)+'s'
    killZombie()
}


// Iteration 3: Write a function to check if the player missed a zombie
function killZombie() {
    document.getElementById('zombie').onclick=()=>{
        callZombie();
    }
}

let isKilled=setInterval(()=>{
    let top=parseInt(window.getComputedStyle(document.getElementById('zombie')).getPropertyValue('top'))
    if (top<-750) {
        lives--;
        callZombie();
    }

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer
if (lives==0) {
    gameOver(true);
}
},500)

let timer=setInterval(()=> {
document.getElementById('timer').innerText=time;
time--;

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer





  

    if (time==0) {
        gameOver(false)
    }
},1000)

function gameOver(isOver) {
    if(isOver) window.open('game-over.html','_self')
    else window.open('win.html','_self')
}

function randomNumber(min,max) {
    return Math.floor(min+Math.random()*max);
}
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const cw = canvas.width = "1000";
const ch = canvas.height = "500";

const ballSize = 20; 

let ballX = cw / 2 - ballSize / 2
let ballY = ch / 2 - ballSize / 2

const paddleHeight = 100;
const paddleWidth = 20;

const playerX = 70;
const aiX = 910;

const playerY = ch / 2;
const aiY = ch /2;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 1;
let ballSpeedY = 1;



player = () =>{
    ctx.fillStyle = "yellow";
    ctx.fillRect(playerX,playerY - paddleHeight /2, paddleWidth, paddleHeight)
}

ai = () => {
    ctx.fillStyle = "blue";
    ctx.fillRect(aiX, aiY - paddleHeight /2  , paddleWidth, paddleHeight)
}

ball =() =>{
    ctx.fillStyle = "red"
    ctx.fillRect(ballX, ballY, ballSize, ballSize)
    
    ballX += ballSpeedX
    ballY += ballSpeedY

    if(ballY <= 0 || ballY + ballSize >= ch){
        ballSpeedY =- ballSpeedY 
    }
    if(ballX + ballSize >= cw || ballX <= 0){
        ballSpeedX = - ballSpeedX;
    }
    

}


table = ()=>{
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cw, ch);

    for(let linePosition = 20; linePosition < ch; linePosition += 30 ){
        ctx.fillStyle = "white";
        ctx.fillRect(cw /2 - lineWidth /2, linePosition, lineWidth, lineHeight )
    }
}

setInterval(game=()=>{
    table();
    ball();
    player()
    ai();

},1000 / 60)

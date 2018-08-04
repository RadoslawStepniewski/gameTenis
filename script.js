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

let playerY = ch / 2;
let aiY = ch /2;

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

}


table = ()=>{
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cw, ch);
}
table();
ball();
player()
ai();


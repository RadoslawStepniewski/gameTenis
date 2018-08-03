const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const cw = canvas.width = "1000";
const ch = canvas.height = "500";

const ballSize = 20; 

ctx.fillRect(cw/2, ch/2 ,ballSize, ballSize)

table = ()=>{
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cw, ch);
}
table();
ctx.fillStyle = "red"
ctx.fillRect(cw / 2 - ballSize /2, ch / 2 - ballSize /2, ballSize , ballSize)





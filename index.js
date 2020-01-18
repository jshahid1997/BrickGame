import game from './game.js';

let canvas = document.getElementById("my_canvas");
const element = document.querySelector('#my_canvas');
const style = getComputedStyle(element);
let ctx = canvas.getContext("2d");
const W = 1200;
const H = 600;

ctx.clearRect(0, 0, W, H);


let lastTime = 0;

let gm = new game(W, H);




function gameLoop(timeStamp) {
    ctx.clearRect(0, 0, W, H);
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;


    gm.update(deltaTime);
    gm.draw(ctx);

    requestAnimationFrame(gameLoop);

}
requestAnimationFrame(gameLoop);





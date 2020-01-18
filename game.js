import Paddle from './paddle.js';
import inputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';
import { buildLevel, level1, level2, level3 } from './levels.js';

const GAMESTATES = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
};

export default class game {
    constructor(W, H, bricksPerRow) {
        this.W = W;
        this.H = H;

        this.state = GAMESTATES.MENU;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new inputHandler(this.paddle, this);
        this.lives = 3;
        this.gameObjects = [];
        this.bricks = [];
        this.levels = [level1, level2, level3];
        this.currLevel = 0;


    }
    start() {
        if (this.state != GAMESTATES.MENU && this.state != GAMESTATES.NEWLEVEL) {
            return;
        }

        // this.brick = new Brick(this, { x: 20, y: 20 });
        this.bricks = buildLevel(this, this.levels[this.currLevel]);




        this.gameObjects = [this.paddle, this.ball];
        this.state = GAMESTATES.RUNNING;


    }
    update(deltaTime) {
        if (this.lives === 0) this.state = GAMESTATES.GAMEOVER;
        if (this.state === GAMESTATES.PAUSED || this.state === GAMESTATES.MENU || this.state === GAMESTATES.GAMEOVER) {
            return;
        }
        if (this.bricks.length === 0) {
            this.currLevel++;
            this.state = GAMESTATES.NEWLEVEL;
            this.ball.reset();
            this.paddle.reset();
            this.start();
        }
        [...this.gameObjects, ...this.bricks].forEach(object =>
            object.update(deltaTime)
        );


        this.bricks = this.bricks.filter(object => !object.marked);

    }
    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach((obj) => obj.draw(ctx));
        if (this.state == GAMESTATES.PAUSED) {
            ctx.rect(0, 0, this.W, this.H);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.font = "50px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.W / 2, this.H / 2);


        }
        if (this.state == GAMESTATES.MENU) {
            ctx.rect(0, 0, this.W, this.H);
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fill();
            ctx.font = "50px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACEBAR to Play!", this.W / 2, this.H / 2);


        }

        if (this.state == GAMESTATES.GAMEOVER) {
            ctx.rect(0, 0, this.W, this.H);
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fill();
            ctx.font = "50px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAMEOVER!", this.W / 2, this.H / 2);


        }

    }

    togglePause() {

        if (this.state == GAMESTATES.PAUSED) {
            this.state = GAMESTATES.RUNNING;
        }

        else {
            this.state = GAMESTATES.PAUSED;
        }
    }

}
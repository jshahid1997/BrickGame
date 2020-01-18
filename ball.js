import game from './game.js';
import { detectCollision } from './collisionDetection.js';
export default class Ball {
    constructor(game) {
        this.W = game.W;
        this.H = game.H;
        this.game = game;

        this.image = document.getElementById("img");
        this.w = 30;
        this.h = 40;


        this.reset();


    }
    reset() {
        this.speed = {
            x: 3,
            y: -3
        };




        this.position = {
            x: this.W / 2 - this.w / 2,
            y: this.game.paddle.position.y - this.h
        };
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.w, this.h);
    }
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //Walls
        if (this.position.x + this.w > this.W || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        if (this.position.y + this.h > this.H) {
            this.game.lives--;
            this.reset();
            this.game.paddle.reset();
        }

        //with paddle


        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = - this.speed.y;
            this.position.y = this.game.paddle.position.y - this.h;
        }

    }
}
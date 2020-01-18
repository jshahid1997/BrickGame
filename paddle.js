import game from './game.js';
export default class Paddle {
    constructor(game) {
        this.W = game.W;
        this.H = game.H;
        this.w = 150;
        this.h = 30;
        this.reset();
    }
    reset() {
        this.maxSpeed = 6;
        this.speed = 0;
        this.position = {
            x: this.W / 2 - this.w / 2,
            y: this.H - this.h - 10,
        };
    }
    draw(ctx) {
        ctx.fillStyle = '#0ff';
        ctx.fillRect(this.position.x, this.position.y, this.w, this.h);
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }
    moveRight() {
        this.speed = this.maxSpeed;
    }

    update(deltaTime) {

        this.position.x += this.speed;
        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x > this.W - this.w) {
            this.position.x = this.W - this.w;
        }

    }
    stop() {
        this.speed = 0;
    }
}


import game from './game.js';
import { detectCollision } from './collisionDetection.js';
export default class Brick {
    constructor(game, position) {
        this.W = game.W;
        this.H = game.H;
        this.game = game;
        this.position = position;
        this.image = document.getElementById("brick");



        this.w = this.W / 9;
        this.h = this.H / 15;

        this.marked = false;

    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.w, this.h);
    }
    update(deltaTime) {
        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = - this.game.ball.speed.y;

            this.marked = true;
        }

    }
}
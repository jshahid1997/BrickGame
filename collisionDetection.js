export function detectCollision(ball, gameObj) {

    let ballBottom = ball.position.y + ball.h;
    let ballTop = ball.position.y;


    let objTop = gameObj.position.y;
    let objLeft = gameObj.position.x;
    let objRight = gameObj.position.x + gameObj.w;
    let objBottom = gameObj.position.y + gameObj.h;


    if (ballBottom >= objTop && ball.position.x + ball.w >= objLeft && ball.position.x <= objRight && ballTop <= objBottom) {
        return true;
    }
    else {
        return false;
    }



}
import Brick from "./brick.js";


export function buildLevel(game, level) {
    let bricks = [];
    let of = (game.W % (game.W / 9)) / 2;

    level.forEach((row, rowInd) => {
        row.forEach((brick, brickInd) => {
            if (brick === 1) {
                let position = {
                    x: (game.W / 9) * brickInd,
                    y: 100 + 40 * rowInd
                };
                bricks.push(new Brick(game, position));
            }
        });
    });
    return bricks;
}

export const level1 = [

    [1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const level2 = [

    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const level3 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1]
];
export const check = (gameboard) => {
    //vertical
    for (let i = 5; i > 2; i--) {
        for (let j = 0; j < 7; j++) {
            if (gameboard[i][j] === gameboard[i - 1][j]
                && gameboard[i][j] === gameboard[i - 2][j]
                && gameboard[i][j] === gameboard[i - 3][j]) {
                if (gameboard[i][j] === 1) return 'user'
                if (gameboard[i][j] === 2) return 'computer'
            }
        }
    }
    //horizontal
    for (let i = 5; i > -1; i--) {
        for (let j = 0; j < 4; j++) {
            if (gameboard[i][j] === gameboard[i][j + 1]
                && gameboard[i][j] === gameboard[i][j + 2]
                && gameboard[i][j] === gameboard[i][j + 3]) {
                if (gameboard[i][j] === 1) return 'user'
                if (gameboard[i][j] === 2) return 'computer'
            }
        }
    }
    //diagonal
    for (let i = 5; i > 2; i--) {
        for (let j = 0; j < 4; j++) {
            if (gameboard[i][j] === gameboard[i - 1][j + 1]
                && gameboard[i][j] === gameboard[i - 2][j + 2]
                && gameboard[i][j] === gameboard[i - 3][j + 3]) {
                if (gameboard[i][j] === 1) return 'user'
                if (gameboard[i][j] === 2) return 'computer'
            }
        }
    }
    for (let i = 5; i > 2; i--) {
        for (let j = 3; j < 7; j++) {
            if (gameboard[i][j] === gameboard[i - 1][j - 1]
                && gameboard[i][j] === gameboard[i - 2][j - 2]
                && gameboard[i][j] === gameboard[i - 3][j - 3]) {
                if (gameboard[i][j] === 1) return 'user'
                if (gameboard[i][j] === 2) return 'computer'
            }
        }
    }
    for (let i = 5; i > -1; i--) {
        for (let j = 0; j < 7; j++) {
            if (gameboard[i][j] === 0) return null
        }
    }
    return 'draw'
}
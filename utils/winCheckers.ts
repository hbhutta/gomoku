// const board: number[][] = [ // Example board with multiple horizontal and vertical wins for 1 and 2.
//     [1,0,0,0,0,0,0], 
//     [1,1,1,1,1,1,0], 
//     [1,0,2,0,0,2,0],
//     [1,0,2,1,2,2,2], 
//     [2,0,2,2,2,2,2], 
//     [2,0,2,0,0,2,0],
//     [2,0,2,2,1,2,0]
// ]

/**
 * @param board 
 * @param row 
 * @param col 
 * @param player 
 * @returns True if the current player has a horizontal or vertical win in the specified column
 */
export default function checkWin(board: number[][], row: number, col: number, player: number) {
    return hasHorizontalWin(board, row, player) || hasVerticalWin(board, col, player) || hasTopRightDiagonalWin(board, row, col, player) || hasTopLeftDiagonalWin(board, row, col, player);
} 

/**
 * @param board 
 * @param player 
 * @param row 
 * @param col 
 * @returns True if the given player has five in a row in the given row
 */
function hasHorizontalWin(board: number[][], row: number, player: number): boolean {
    const n = board.length;
    const k = 5;
    outer: for (let i = 0; i < n - k + 1; i++) {
        inner: for (let j = i; j < i + k; j++) {
            if (board[row][j] != player) {
                continue outer;
            }
        }
        // console.log("inside")
        return true;
    }
    // console.log("outside")
    return false;   
}





function hasTopRightDiagonalWin(board: number[][], row: number, col: number, player: number): boolean {
    // const n = board.length;
    // const k = 5;
    // for (let i = 0; i < n - k + 1; i++) {
    //     inner: for (let j = i; j < i + k; j++) {
    //         if (board[i + j][i + j] != player) {
    //         }
    //     }
    // }
    return false;
}

function hasTopLeftDiagonalWin(board: number[][], row: number, col: number, player: number): boolean {
    return false;
}



// console.log(hasHorizontalWin(board, 1, 1)) 
// console.log(hasHorizontalWin(board, 3, 2)) 
// console.log(hasHorizontalWin(board, 4, 2))
// console.log(hasVerticalWin(board, 2, 2))
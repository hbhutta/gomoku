/**
 * @param board 
 * @param player 
 * @param row 
 * @param col 
 * @returns True if the given player has five in a row in the given row
 */
export default function hasHorizontalWin(board: number[][], row: number, player: number): boolean {
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
import hasFiveInARow from "./hasFiveInARow";

export default function hasLeftSlantedDiagonal(board: number[][], player: number) {
    const N = board.length;
    for (let i = 0; i < N; i++) {
        let diagonal = []
        for (let j = 0; j < i + 1; j++) {
            diagonal.push(board[(board.length-1)-i+j][j])
            // console.log(board[(board.length-1)-i+j][j])
        }
        // At this point we make sure diagonal is at least length five.
        if (diagonal.length >= 5) {
            if (hasFiveInARow(diagonal, player)) {
                return true;
            }
        }
    }
    
    for (let i = N-1-1; i >= 0; i--) {
        // console.log("This is i %d", i)
        let diagonal = []
        for (let j = 0; j < i + 1; j++) {
            diagonal.push(board[j][(board.length-1)-i+j])
            // console.log(board[j][(board.length-1)-i+j])
            // console.log("%d, %d", 2 - i + j, j)
        }
        if (diagonal.length >= 5) {
            if (hasFiveInARow(diagonal, player)) {
                return true;
            }
        }
    }  
    return false
  }  
export default function hasHorizontalWin(board: number[][], row: number, player: number): boolean {
  const n = board.length;
  const k = 5;
  outer: for (let i = 0; i < n - k + 1; i++) {
    inner: for (let j = i; j < i + k; j++) {
      if (board[row][j] != player) {
        continue outer;
      }
    }
    return true;
  }
  return false;
}

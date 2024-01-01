export default function hasVerticalWin(
  board: number[][],
  col: number,
  player: number
): boolean {
  const n = board.length;
  const k = 5;
  outer: for (let i = 0; i < n - k + 1; i++) {
    inner: for (let j = i; j < i + k; j++) {
      if (board[j][col] != player) {
        continue outer;
      }
    }
    return true;
  }
  return false;
}

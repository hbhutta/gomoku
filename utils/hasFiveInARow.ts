// This is the same as the hasHorizontalWin function, but we don't need the row and column information
export default function hasFiveInARow(
  diagonal: number[],
  player: number
): boolean {
  const n = diagonal.length;
  const k = 5;
  outer: for (let i = 0; i < n - k + 1; i++) {
    inner: for (let j = i; j < i + k; j++) {
      if (diagonal[j] != player) {
        continue outer;
      }
    }
    return true;
  }
  return false;
}

import hasHorizontalWin from "./hasHorizontalWin";
import hasLeftSlantedDiagonal from "./hasLeftSlantedDiagonalWin";
import hasRightSlantedDiagonal from "./hasRightSlantedDiagonalWin";
import hasVerticalWin from "./hasVerticalWin";

export default function checkWin(
  board: number[][],
  row: number,
  column: number,
  player: number
): boolean {
  return (
    hasHorizontalWin(board, row, player) ||
    hasVerticalWin(board, column, player) ||
    hasLeftSlantedDiagonal(board, player) ||
    hasRightSlantedDiagonal(board, player)
  );
}

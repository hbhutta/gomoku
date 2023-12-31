import hasHorizontalWin from "./hasHorizontalWin";
import hasVerticalWin from "./hasVerticalWin";

export default function checkWin(board: number[][], row: number, column: number, player: number) {
    return hasHorizontalWin(board, row, player) || hasVerticalWin(board, column, player);
}
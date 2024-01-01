import hasLeftSlantedDiagonal from "./hasLeftSlantedDiagonalWin";

export default function hasRightSlantedDiagonal(board: number[][], player: number): boolean {
  for (let i = 0; i < board.length; i++) {
    board[i] = board[i].reverse() 
  }
  return hasLeftSlantedDiagonal(board, player)
} 
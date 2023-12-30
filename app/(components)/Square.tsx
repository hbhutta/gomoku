"use client";

import { useState } from "react";
import BlackStone from "./(stones)/BlackStone";
import WhiteStone from "./(stones)/WhiteStone";
import EmptyStone from "./(stones)/EmptyStone";

/**
 * @param board 
 * @param player 
 * @param row 
 * @param col 
 * @returns True if the given player has five in a row in the given row
 */
function hasHorizontalWin(board: number[][], player: number, row: number): boolean {
  const n = board.length;
    const k = 5;
    outer: for (let i = 0; i < n - k + 1; i++) {
        inner: for (let j = i; j < i + k; j++) {
            if (board[row][j] != player) {
                continue outer;
            }
        }
        console.log("inside")
        return true;
    }
    console.log("outside")
    return false; 
}

/* 
  If there is already a stone in this square, do not change the state
  If Black plays:
    Place a black stone and change the current player to White
  Otherwise:
    Place a white stone anhe current player to black
*/
// row_id and column_id are zero-based
export default function Square(props: {row_id: number, column_id: number, currentPlayer: boolean, updatePlayer: any, currentMoveList: string[], updateMoveList: any, currentBoard: number[][], updateBoard: any}) {
  const [stone, setStone] = useState(<EmptyStone/>);
  const [empty, setEmpty] = useState(true)
  return (
    <button
      id={`square-${props.column_id}`}
      className={`border border-1 border-black w-10 h-10 bg-amber-400 ${empty ? "hover:bg-green-300" : "hover:bg-red-500"} `}
      onClick={() => {
        if (empty) {
          if (props.currentPlayer == false) {
            setStone(<BlackStone/>);
            props.updatePlayer(true);
          } else {
            setStone(<WhiteStone/>);
            props.updatePlayer(false);
          }
          setEmpty(!empty)
          // Write new move
          const newMove: string = `${props.currentPlayer ? "White" : "Black"} places stone at (${props.row_id}, ${props.column_id})`

          // Update move history
          const moveList = props.currentMoveList
          moveList.push(newMove)
          props.updateMoveList(moveList)

          // Update board
          const board = props.currentBoard
          // Record move in specific column of specific row
          // 1 is Black, 2 is White
          console.log(props.currentPlayer)
          props.currentPlayer ? board[props.row_id][props.column_id] = 1 : board[props.row_id][props.column_id] = 2
          props.updateBoard(board)
          console.log(props.currentBoard) 

          // After recording the move, check for a win
          const win = hasHorizontalWin(props.currentBoard, props.currentPlayer ? 1 : 2, props.row_id)
          if (win) {
            alert(`Winner: ${props.currentPlayer}`)
          }
        }
      }}
    >{stone}</button>
  );
}

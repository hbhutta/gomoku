"use client";

import { useState } from "react";
import BlackStone from "./(stones)/BlackStone";
import WhiteStone from "./(stones)/WhiteStone";
import EmptyStone from "./(stones)/EmptyStone";


function hasTopRightDiagonal(board: number[][], player: number, row: number, col: number,): boolean {
  const n = board.length;
  const k = 5;
  outer: for (let i = 0; i < n - k + 1; i++) {
      inner: for (let j = i; j < i + k; j++) {
          if (board[row + j][col + j] != player) {
              continue outer;
          }
      }
      return true;
  }
  return false; 
}

function hasTopLeftDiagonal(board: number[][], player: number, row: number, col: number): boolean {
  const n = board.length;
  const k = 5;
  outer: for (let i = 0; i < n - k + 1; i++) {
      inner: for (let j = i; j < i + k; j++) {
          if (board[row - j][col - j] != player) {
              continue outer;
          }
      }
      return true;
  }
  return false; 
}

function hasVerticalWin(board: number[][], col: number, player: number): boolean {
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


function checkWin(board: number[][], row: number, column: number, player: number): boolean {
  return hasHorizontalWin(board, row, player) || hasVerticalWin(board, column, player) || hasTopLeftDiagonal(board, player, row, column) || hasTopRightDiagonal(board, player, row, column);
}

export default function Square(props: {rowId: number, columnId: number, currentPlayer: boolean, updatePlayer: any, currentMoveList: string[], updateMoveList: any, currentBoard: number[][], updateBoard: any, updateWinner: any, currentHasWinner: boolean, updateHasWinner: any}) {
  const [stone, setStone] = useState(<EmptyStone/>);
  const [empty, setEmpty] = useState(true)
  return (
    <button
      disabled={props.currentHasWinner}
      id={`square-${props.columnId}`}
      className={`border border-1 border-black w-6 h-6 bg-amber-400 ${props.currentHasWinner ? '' : empty ? "hover:bg-green-400 duration-200" : "hover:bg-red-500 duration-300"} transition-all`}
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

          const newMove: string = `${props.currentPlayer ? "White" : "Black"} places stone at (${props.rowId}, ${props.columnId})`
          const moveList = props.currentMoveList
          moveList.push(newMove)
          props.updateMoveList(moveList)

          const board = props.currentBoard
          props.currentPlayer ? board[props.rowId][props.columnId] = 1 : board[props.rowId][props.columnId] = 2
          props.updateBoard(board)

          if (checkWin(props.currentBoard, props.rowId, props.columnId, props.currentPlayer ? 1 : 2)) {
            props.updateWinner(props.currentPlayer ? "White" : "Black")
            props.updateHasWinner(true)
          }
        }
      }}
    >{stone}</button>
  );
}

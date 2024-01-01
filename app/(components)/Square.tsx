"use client";

import { useState } from "react";
import BlackStone from "./(stones)/BlackStone";
import WhiteStone from "./(stones)/WhiteStone";
import EmptyStone from "./(stones)/EmptyStone";
import checkWin from "@/utils/checkWin";

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

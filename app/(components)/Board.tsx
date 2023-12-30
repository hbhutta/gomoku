import { useState } from "react";
import Square from "./Square";
import MovePanel from "./(panels)/MovePanel";
import ButtonPanel from "./(panels)/ButtonPanel";
import { minWidth, width } from "@mui/system";

function defaultBoard(): number[][] {
  let board: number[][] = []
  for (let i = 0; i < 15; i++) {
    board.push([]) 
    for (let j = 0; j < 15; j++) {
      board[i].push(0)
    }
  }
  return board
}


export default function Board() {
  const [player, setPlayer] = useState(false);
  const [moveList, setMoveList] = useState([])
  const [board, setBoard] = useState(defaultBoard())
  const moves = moveList.map((move) => <p>{move}</p>)
  // console.log(board)
  const BOARD_WIDTH  = 40*15
  const BOARD_HEIGHT = 40*15

  return (
    <div id='game-container' className="grid grid-cols-2 justify-center items-center text-center w-screen">
      <div id='board' className={`w-[${BOARD_WIDTH}px] min-w-[${BOARD_WIDTH}px] h-[${BOARD_HEIGHT}px] min-h-[${BOARD_HEIGHT}px] gap-y-0`}>
      <div id='current-player-display' className="text-center left-0 right-0 m-auto">
        <h1 className="text-2xl font-bold">Gomoku</h1>
        {player ? `White` : `Black`} to play
      </div>
        <div className="my-0 h-10">
              <Square row_id={0} column_id={0} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={0} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={1} column_id={0} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={1} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-2" className="my-0 h-10">
            <Square row_id={2} column_id={0} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={2} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-3" className="my-0 h-10">
            <Square row_id={3} column_id={0} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={3} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-2" className="my-0 h-10">
            <Square row_id={4} column_id={0} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={4} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={5} column_id={0} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={5} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={6} column_id={0} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={6} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={7} column_id={0} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={7} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList} currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={9} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={9} column_id={15} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={10} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={10} column_id={15} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={11} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={11} column_id={15} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={12} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={12} column_id={15} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={13} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={13} column_id={15} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={14} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={14} column_id={15} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
            </div>
            <div id="board-row-1" className="my-0 h-10">
            <Square row_id={15} column_id={1} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={2} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={3} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={4} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={5} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={6} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={7} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={8} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={9} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={10} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={11} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={12} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={13} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={14} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
              <Square row_id={15} column_id={15} currentPlayer={player} updatePlayer={setPlayer} currentMoveList={moveList} updateMoveList={setMoveList}  currentBoard={board} updateBoard={setBoard}/>
            </div>
             <ButtonPanel updatePlayer={setPlayer} updateBoard={setBoard}/>
      </div>
        
       
        {/* </div> */}
        {/* <div className="w-fit bg-gray-50 border border-1 border-black max-h-44 overflow-y-auto left-0 right-0 m-auto">
          {moves}
        </div> */}
    </div>
  );
}

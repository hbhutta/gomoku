"use client";

import { useState } from "react";
import MovePanel from "./(components)/(panels)/MovePanel";
import Board from "./(components)/Board";
import ButtonPanel from "./(components)/(panels)/ButtonPanel";

/*
When button is clicked, log it in side panel as a move made by the player
*/

export default function Gomoku() {
  return (
    <main className="grid grid-cols-2 w-full h-full items-center justify-center m-32">
      <Board/>
    </main>
  );
}

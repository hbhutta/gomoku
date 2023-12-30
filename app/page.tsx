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
    <main className="pt-10 w-screen h-screen items-center justify-center">
      <Board/>
    </main>
  );
}

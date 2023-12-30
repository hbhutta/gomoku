import { useState } from "react";

export default function ButtonPanel(props: {updatePlayer: any, updateBoard: any}) {
    const [player, setPlayer] = useState(false)
  return (
    <div className="flex-row justify-center items-center text-center">
      <button className="border border-black border-1 rounded-sm p-2 mx-2 mt-2 hover:bg-slate-100" onClick={() => {
        props.updatePlayer(false);
        props.updateBoard([])
      }}>
        New Game
      </button>
      <button className="border border-black border-1 rounded-sm p-2 mx-2 mt-2 hover:bg-slate-100">
        Save Game
      </button>
      <button className="border border-black border-1 rounded-sm p-2 mx-2 mt-2 hover:bg-slate-100">
        Load Game
      </button>
    </div>
  );
}

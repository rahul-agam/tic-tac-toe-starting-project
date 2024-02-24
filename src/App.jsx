import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";

function App() {
  // Making player with symbol 'X' as default active player
  // Concept of Lifting State Up (used in both Player & GameBoard components)
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    /*
      If user with symbol 'X' is selected, then next
      active player is 'O' and again then 'X'.

      So, currentValue depends on Previous value. So, use a function inside the setActivePlayer();
    */
    setActivePlayer((curActivePlayer) => {
      curActivePlayer === "X" ? "O" : "X";
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <div id="game-container">LOG</div>
    </main>
  );
}

export default App;

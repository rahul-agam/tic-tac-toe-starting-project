import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import Log from "./Components/Log.jsx";

function App() {
  // Making player with symbol 'X' as default active player
  // Concept of Lifting State Up (used in both Player & GameBoard components)
  const [activePlayer, setActivePlayer] = useState("X");

  // Concept of Lifting State Up (used in both Log & GameBoard components)
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    /*
      If user with symbol 'X' is selected, then next
      active player is 'O' and again then 'X'.
      So, currentValue depends on Previous value. So, use a function inside the setActivePlayer();
    */
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {

      /* Not using the state variable 'activePlayer' here to track the current plyaer, because we are already in a state function for 'gameTurns' , so we cannot gurantee that we get the latest 'activePlayer' here. Because they both are two different state variables. */

      let currentPlayer = 'X';

      // here it is prevTurns[0] - because we should always see the latest player.
      // if latest player has 'X' then next player should have 'O'
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      // Since we are dealing with array, we use immutable state update approach.
      const updatedTurns = [{
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer
      }, ...prevTurns];

      return updatedTurns;
    })
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
          turns={gameTurns}
        />
      </div>
      <div id="log-container">
        <Log turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;

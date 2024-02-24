import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      <div id="game-container">LOG</div>
    </main>
  );
}

export default App;

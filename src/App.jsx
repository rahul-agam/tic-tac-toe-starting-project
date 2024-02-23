function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
        GAME BOARD
      </div>
      <div id="game-container">LOG</div>
    </main>
  );
}

export default App;

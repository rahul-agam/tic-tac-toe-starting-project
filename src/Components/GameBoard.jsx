export default function GameBoard({ onSelectSquare, board }) {
  /*
  We are managing this state in App.jsx file.
  ---------------------------------------------------------------------------------------
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, colIndex) {
      setGameBoard((prevGameBoard) => {
  
      //  Source : https://academind.com/tutorials/reference-vs-primitive-values
  
      //  Not a best practice
      //  -------------------
      //    Because 'initialGameBoard' is a multi dimensional array, the prevGameBoard input param is just  reference variable, that means any updates on prevGameBoard reference variable , is a direct update on initialGameBoard.    
      //    That means, even before React schedules & executes this setGameBoard() function, the state//array is already updated. It is not a good practice.
        -------------------------------
      //  prevGameBoard[rowIndex][colIndex] = "X";
      //  return prevGameBoard;
  
        //Best Practice
        const updatedBoard = [
          ...prevGameBoard.map((innerArray) => [...innerArray]),
        ];
        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
        return updatedBoard;
      });
  
      // function defined in App.jsx and passed as prop
      onSelectSquare();
    }
  ---------------------------------------------------------------------------------------
  */
  // To print the Game board (9 squares)
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

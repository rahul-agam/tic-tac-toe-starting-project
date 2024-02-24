import { useState } from "react";

function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleplayerNameChange(eventEmittedByOnChange) {
    //event.target => Element which emitted that event. Here it is 'input' tag
    // event.target.value => current Value in the text box
    setPlayerName(eventEmittedByOnChange.target.value);
  }

  // Way - 1: To load elements based on certain conditions
  /*
        1. We can assign JSX code (without any double quotes) to variables
  */
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "EDIT";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleplayerNameChange}
      />
    );
    // btnCaption = "SAVE";
  }

  // ----------------------------------------------------
  // Way - 2: Displaying elements using a Ternary operator
  /*
    {
        isEditing ? <span> Edit Mode On </span> : <span className="player-name">{name}</span>
    }
  */
  return (
    <li className={isActive ? "Active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}

export default Player;

import { useState } from "react";

function Square({ value }) {
  const [testValue, setTestValue] = useState("Y");
  function handleClick() {
    console.log(value, " clicked");
  setTestValue("Z");
  }
  return (
    // <button className="square" onClick={handleClick}>
    <button className="square" onClick={handleClick}>{value}{testValue}</button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill('X'));
  return (
    <>
      <div className="board-row">
        {/* <Square value="1" /> */}
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

export default Board;

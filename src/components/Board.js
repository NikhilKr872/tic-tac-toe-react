import RenderSquare from "./RenderSquare";
import Button from "./Button";
import React from "react";


function Board() {
  const [flag, setFlag] = React.useState(false);
  const cellArr = new Array(9).fill(" ");
  const [squares, setSquares] = React.useState(cellArr);
  const [player, setPlayer] = React.useState("X");

  React.useEffect(() => {
    checkWinner();
  });

  // checkWinner

  function checkWinner() {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    winArr.forEach((ele) => {
      if (
        squares[ele[0]] === squares[ele[1]] &&
        squares[ele[1]] === squares[ele[2]] &&
        squares[ele[0]] !== " " &&
        squares[ele[1]] !== " " &&
        squares[ele[2]] !== " "
      )
        setFlag(true);
    });
  }

  // clear

  function Clear() {
    setSquares(squares.map((ele) => " "));
    setFlag(false);
  }
  // enter Value
  function enterValue(index) {
    if (squares[index] !== " " || flag) {
      return;
    }
    setSquares(
      squares.map((ele, i) => {
        if (i === index) {
          return player;
        }
        return ele;
      })
    );

    setPlayer(player === "X" ? "O" : "X");
  }

  return (
    <div>
      <div>
        {(flag && <div>Winner is : {player === "X" ? "O" : "X"}</div>) || (
          <div>Current Player: {player}</div>
        )}
      </div>
      <div className="btndiv">
        {
          squares.map((ele, index) => {
            return <RenderSquare key={index} value={squares[index]} onClick={() => {
              enterValue(index)
            }} />
          })}
      </div>
      <Button clear={Clear} text="Restart"/>
    </div>
  );
}

export default Board;
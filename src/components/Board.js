import RenderSquare from "./RenderSquare";
import Button from "./Button";
import React from "react";

function Board() {
    const [flag, setFlag] = React.useState(false);
    const [status, setStatus] = React.useState("X");
    const [status_0, setStatus_0] = React.useState("");
    const [status_1, setStatus_1] = React.useState("");
    const [status_2, setStatus_2] = React.useState("");
    const [status_3, setStatus_3] = React.useState("");
    const [status_4, setStatus_4] = React.useState("");
    const [status_5, setStatus_5] = React.useState("");
    const [status_6, setStatus_6] = React.useState("");
    const [status_7, setStatus_7] = React.useState("");
    const [status_8, setStatus_8] = React.useState("");
  
    // if (!flag) {
    //   checkWinner();
    // }
    React.useEffect(()=>{
      checkWinner()
    })
    const cellStatus = [
      { val: status_0, setVal: setStatus_0 },
      { val: status_1, setVal: setStatus_1 },
      { val: status_2, setVal: setStatus_2 },
      { val: status_3, setVal: setStatus_3 },
      { val: status_4, setVal: setStatus_4 },
      { val: status_5, setVal: setStatus_5 },
      { val: status_6, setVal: setStatus_6 },
      { val: status_7, setVal: setStatus_7 },
      { val: status_8, setVal: setStatus_8 }
    ];
  
    // clear the board
    function Clear() {
      cellStatus.forEach((cell) => {
        if (cell.val) {
          cell.setVal("");
        }
      });
      setFlag(false);
    }
  
    // Change state from x to o
    function changeState() {
      if (flag) {
        return;
      }
  
      if (status === "X") {
        setStatus("O");
      } else {
        setStatus("X");
      }
    }
  
    // Change individual cell status
    function changeCellStatus(val, cb) {
      if (val || flag) {
        return;
      }
  
      cb(status);
  
      changeState();
    }
  
    // Check if rows are equal
    function checkRow(cell_1, cell_2, cell_3) {
      if (!cell_1 || !cell_2 || !cell_3) {
        return false;
      }
  
      return cell_1 === cell_2 && cell_2 === cell_3;
    }
  
    //check for winner
    function checkWinner() {
      if (checkRow(status_0, status_1, status_2)) {
        setFlag(true);
  
        return true;
      }
      if (checkRow(status_3, status_4, status_5)) {
        setFlag(true);
        return true;
      }
      if (checkRow(status_6, status_7, status_8)) {
        setFlag(true);
        return true;
      }
      if (checkRow(status_0, status_4, status_8)) {
        setFlag(true);
        return true;
      }
      if (checkRow(status_6, status_4, status_2)) {
        setFlag(true);
        return true;
      }
      if (checkRow(status_0, status_3, status_6)) {
        setFlag(true);
        return true;
      }
      if (checkRow(status_1, status_4, status_7)) {
        setFlag(true);
        return true;
      }
      if (checkRow(status_2, status_5, status_8)) {
        setFlag(true);
        return true;
      }
      return false;
    }
  
    return (
      <div>
        <div className="status">
          {(flag && <div>Winner is : {status === "X" ? "O" : "X"}</div>) ||
            (!flag && <div>Next player:{status}</div>)}
        </div>
        <div className="board-row">
          <RenderSquare
            i={status_0}
            onClick={() => {
              changeCellStatus(status_0, setStatus_0);
            }}
          />
          <RenderSquare
            i={status_1}
            onClick={() => {
              changeCellStatus(status_1, setStatus_1);
            }}
          />
          <RenderSquare
            i={status_2}
            onClick={() => {
              changeCellStatus(status_2, setStatus_2);
            }}
          />
        </div>
        <div className="board-row">
          <RenderSquare
            i={status_3}
            onClick={() => {
              changeCellStatus(status_3, setStatus_3);
            }}
          />
          <RenderSquare
            i={status_4}
            onClick={() => {
              changeCellStatus(status_4, setStatus_4);
            }}
          />
          <RenderSquare
            i={status_5}
            onClick={() => {
              changeCellStatus(status_5, setStatus_5);
            }}
          />
        </div>
        <div className="board-row">
          <RenderSquare
            i={status_6}
            onClick={() => {
              changeCellStatus(status_6, setStatus_6);
            }}
          />
          <RenderSquare
            i={status_7}
            onClick={() => {
              changeCellStatus(status_7, setStatus_7);
            }}
          />
          <RenderSquare
            i={status_8}
            onClick={() => {
              changeCellStatus(status_8, setStatus_8);
            }}
          />
        </div>
        <Button text="Restart" clear={Clear} />
      </div>
    );
  }

  export default Board;
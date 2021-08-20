import { useState, useEffect } from "react";
import "./styles/App.css";

import Game from "./components/game";
import Modal from "./components/modal";

function App() {
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [grid, setGrid] = useState([]);
  // eslint-disable-next-line
  const [score, setScore] = useState([0, 0]);
  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState(0);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 13; i++) {
      arr = [...arr, { t: false, l: false, r: false, b: false, done: false }];
    }
    for (let i in arr) {
      // eslint-disable-next-line
      if (i == 0 || i == 1 || i == 3 || i == 4 || i == 8) {
        arr[i].t = true;
      }
      // eslint-disable-next-line
      if (i == 4 || i == 8 || i == 9 || i == 11 || i == 12) {
        arr[i].b = true;
      }
      // eslint-disable-next-line
      if (i == 0 || i == 12 || i == 1 || i == 9 || i == 4) {
        arr[i].l = true;
      }
      // eslint-disable-next-line
      if (i == 0 || i == 12 || i == 3 || i == 11 || i == 8) {
        arr[i].r = true;
      }
    }
    setGrid(arr);
  }, []);
  useEffect(() => {
    let x = 0;
    for (let i of grid) {
      if (i.t === true && i.b === true && i.l === true && i.r === true) {
        i.done = true;
        x++;
      }
    }
    setCount(x);
  }, [selecting, grid]);
  useEffect(() => {
    if (count > score[0] + score[1]) {
      if (player === 1) {
        score[0]++;
      } else {
        score[1]++;
      }
    }
  }, [count, score, player]);
  return (
    <div className="App">
      <Game
        setSelecting={setSelecting}
        selecting={selecting}
        selected={selected}
        setSelected={setSelected}
        grid={grid}
      />
      <Modal
        setSelecting={setSelecting}
        selecting={selecting}
        selected={selected}
        setSelected={setSelected}
        grid={grid}
        player={player}
        setPlayer={setPlayer}
      />
      {`player1: ${score && score[0]} | player2: ${score && score[1]}`}
      {` | player now ${player + 1}`}
    </div>
  );
}

export default App;

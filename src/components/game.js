import { useState, useEffect } from "react";
import Box from "./box";

const Game = ({ setSelecting, selecting, selected, setSelected }) => {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 13; i++) {
      arr = [...arr, { t: false, l: false, r: false, b: false }];
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
    console.log(arr);
    setGrid(arr);
  }, []);

  return (
    <div className="Game">
      {grid.map((obj, index) => (
        <Box
          setSelecting={setSelecting}
          selecting={selecting}
          selected={selected}
          setSelected={setSelected}
          grid={grid}
          num={index}
          settings={obj}
          key={Math.random(1000)}
        />
      ))}
    </div>
  );
};

export default Game;

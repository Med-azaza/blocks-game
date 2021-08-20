import { useState, useEffect } from "react";
import "./styles/App.css";

import Game from "./components/game";
import Modal from "./components/modal";

function App() {
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState(-1);
  return (
    <div className="App">
      <Game
        setSelecting={setSelecting}
        selecting={selecting}
        selected={selected}
        setSelected={setSelected}
      />
      <Modal
        setSelecting={setSelecting}
        selecting={selecting}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;

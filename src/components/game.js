import Box from "./box";

const Game = ({ setSelecting, selecting, selected, setSelected, grid }) => {
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

const Modal = ({
  selecting,
  setSelecting,
  selected,
  setSelected,
  grid,
  player,
  setPlayer,
}) => {
  return (
    <div className={`Modal ${selecting ? "" : "none"}`}>
      <button
        onClick={() => {
          if (player === 0) {
            setPlayer(1);
          } else {
            setPlayer(0);
          }
          grid[selected].t = true;
          if (selected === 2 || selected === 12) {
            grid[selected - 2].b = true;
          } else {
            grid[selected - 4].b = true;
          }
          setSelecting(false);
          setSelected(-1);
        }}
        disabled={grid[selected] && grid[selected].t ? true : false}
      >
        top
      </button>
      <button
        onClick={() => {
          if (player === 0) {
            setPlayer(1);
          } else {
            setPlayer(0);
          }
          grid[selected].l = true;
          grid[selected - 1].r = true;
          setSelecting(false);
          setSelected(-1);
        }}
        disabled={grid[selected] && grid[selected].l ? true : false}
      >
        left
      </button>
      <button
        onClick={() => {
          if (player === 0) {
            setPlayer(1);
          } else {
            setPlayer(0);
          }
          grid[selected].r = true;
          grid[selected + 1].l = true;
          setSelecting(false);
          setSelected(-1);
        }}
        disabled={grid[selected] && grid[selected].r ? true : false}
      >
        right
      </button>
      <button
        onClick={() => {
          grid[selected].b = true;
          if (selected === 10 || selected === 0) {
            grid[selected + 2].t = true;
          } else {
            grid[selected + 4].t = true;
          }
          setSelecting(false);
          setSelected(-1);
          if (player === 0) {
            setPlayer(1);
          } else {
            setPlayer(0);
          }
        }}
        disabled={grid[selected] && grid[selected].b ? true : false}
      >
        bottom
      </button>
      {selected}
    </div>
  );
};
export default Modal;

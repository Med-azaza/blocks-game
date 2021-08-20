const Box = ({
  grid,
  num,
  settings,
  setSelecting,
  selecting,
  selected,
  setSelected,
}) => {
  const handleSelect = () => {
    if (selected === num) {
      setSelecting(false);
      setSelected(-1);
    } else if (selected !== -1) {
      setSelected(num);
    } else {
      setSelecting(true);
      setSelected(num);
    }
  };
  return (
    <div
      onClick={handleSelect}
      className={`Box ${settings.t ? "top" : ""} 
      ${settings.b ? "bottom" : ""} 
      ${settings.l ? "left" : ""} 
      ${settings.r ? "right" : ""} 
      ${selected === num ? "selected" : ""}`}
    >
      {num}
    </div>
  );
};

export default Box;

const Modal = ({ selecting, selected }) => {
  return (
    <div className={`Modal ${selecting ? "" : "none"}`}>
      <button>top</button>
      <button>left</button>
      <button>right</button>
      <button>bottom</button>
      {selected}
    </div>
  );
};
export default Modal;

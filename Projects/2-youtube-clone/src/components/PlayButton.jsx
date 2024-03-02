import { useState } from "react";

function PlayButton({ children, onPause, onPlay }) {
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    playing ? onPause() : onPlay();
    setPlaying(!playing);
  }

  return <button onClick={handleClick}>{playing ? "pause" : "play"}</button>;
}
export default PlayButton;

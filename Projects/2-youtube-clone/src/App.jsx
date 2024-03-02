import "./App.css";
import Video from "./components/Video.jsx";
import videos from "./data/data.js";
import PlayButton from "./components/PlayButton.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <>
      <div>Videos Lists</div>
      <PlayButton
        onPlay={() => alert("Playyyyy")}
        onPause={() => alert("Paused..")}
      >
        Play
      </PlayButton>
      {/* <PlayButton message ={"Paused.."} onSmash={()=> alert("Pauseddddd")}>Pause</PlayButton> */}
    <Counter></Counter>
      <br />
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          channel={video.channel}
          title={video.title}
          views={video.views}
          time={video.time}
          verified={video.verified}
        ></Video>
      ))}
      <hr />
    </>
  );
}

export default App;

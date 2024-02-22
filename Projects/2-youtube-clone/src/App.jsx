import "./App.css";
import Video from "./components/Video.jsx";

function App() {
  let x = 10;

  return (
    <>
    <Video  title="My New Vlog" views="100K" time="1 Month ago"></Video> <hr />
    <Video  title="React Js Tutorial" views="130K" time="20 Days ago"></Video>
      
    </>
  );
}

export default App;


function Video({ channel, title, views, time, verified,id }) {
 

  return (
    <>
      <div className="image">
        <img src={`https://picsum.photos/300/200?random=${id}` } alt="RandomPics" />
      </div>
      <div className="title">{title}</div>
      <div>
        <div className="channelName">{channel} {verified ? "✅" : null}</div>
        <button style={{ backgroundColor: "red", color: "white" }}>
          Subscribe ❤
        </button>
        <p>
          {views} Views • {time}
        </p>
      </div>
    </>
  );
}
export default Video;

function Video({channel,title,views,time}) {


  return (
    <>
      <img src="https://picsum.photos/300/200" alt="RandomPics" />
      <h2>{title}</h2>
      <div>
        <h4>{channel="Sahil Solanki"} </h4>  
        <button style={{ backgroundColor: "red", color: "white" }}>
          Subscribe
        </button>
        <p>{views} Views : {time}</p> 
      
      </div>
    </>
  );
}
export default Video;

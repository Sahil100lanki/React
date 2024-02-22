import "/src/App.css"
function App() {

  let subscribers= 230;

  return (
    <>
      <h1>Welcome To My Channel</h1>
      <a href="">
        <button style={{'backgroundColor':"red", 'color':'blue'}}>Subscribe</button>
      <p>{subscribers} Subscribers</p>
      </a>
     
    </>
  );
}

export default App;

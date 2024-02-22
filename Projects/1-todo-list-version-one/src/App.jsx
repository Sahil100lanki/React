// import "./App.css";
import TodoTitle from "./components/TodoTitle";
import TodoAdd from "./components/TodoAdd";

function App() {
  return (
    <>
      <div class="container text-center">
        <TodoTitle></TodoTitle>
        <TodoAdd></TodoAdd>
       

        <div class="row">
          <div class="col">Get the milk</div>
          <div class="col">04/02/2024</div>
          <div class="col">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col">Go to market</div>
          <div class="col">04/02/2024</div>
          <div class="col">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

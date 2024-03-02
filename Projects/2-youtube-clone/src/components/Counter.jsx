import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 1);
    setNumber(number + 1);

    console.log(number);
  }
  return (
    <>
      <h1> {number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

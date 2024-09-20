import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function numberPlus() {
    setCount(count + 1);
  }

  function numberMinus() {
    setCount(count - 1);
  }

  function numberReset() {
    alert("Your count has been reset.");
    setCount(0);
  }

  return (
    <div>
      <ButtonPlus count={count} onClick={numberPlus} />
      <p>{count}</p>
      <ButtonMinus count={count} onClick={numberMinus} />
      <ButtonReset count={count} onClick={numberReset} />
    </div>
  );
}

function ButtonPlus({ count, onClick }) {
  return <button onClick={onClick}>+</button>;
}

function ButtonMinus({ count, onClick }) {
  return <button onClick={onClick}>-</button>;
}

function ButtonReset({ count, onClick }) {
  return <button onClick={onClick}>Reset</button>;
}

import { useState } from "react";
import "./App.css";

const MyApp = () => {
  const [count, setCount] = useState(0);

  const numberPlus = () => {
    setCount(count + 1);
  };

  const numberMinus = () => {
    setCount(count - 1);
  };

  const numberReset = () => {
    alert("Your count has been reset.");
    setCount(0);
  };

  const changeCount = (event) => {
    setCount(event.target.value - 1 + 1);
  };

  return (
    <div>
      <ButtonPlus count={count} onClick={numberPlus} />
      <p>{count}</p>
      <ButtonMinus count={count} onClick={numberMinus} />
      <div>
        <ButtonReset count={count} onClick={numberReset} />
      </div>
      <input
        defaultValue="Your number input"
        value={count}
        onChange={changeCount}
      />
    </div>
  );
};

const ButtonPlus = ({ count, onClick }) => {
  return <button onClick={onClick}>+</button>;
};

const ButtonMinus = ({ count, onClick }) => {
  return <button onClick={onClick}>-</button>;
};

const ButtonReset = ({ count, onClick }) => {
  return <button onClick={onClick}>Reset</button>;
};

export default MyApp;

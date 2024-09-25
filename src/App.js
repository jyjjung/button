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
    setCount(0);
  };

  const numberChange = (event) => {
    setCount(prompt("Please enter your new number") - 1 + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <div class="plusMinus">
        <ButtonPlus count={count} onClick={numberPlus} />
        <ButtonMinus count={count} onClick={numberMinus} />
      </div>
      <ButtonReset count={count} onClick={numberReset} />
      <ButtonChangeNumber count={count} onClick={numberChange} />
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

const ButtonChangeNumber = ({ count, onClick }) => {
  return <button onClick={onClick}>Change number</button>;
};
export default MyApp;

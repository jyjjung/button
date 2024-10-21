import { useState } from "react";
import "./App.css";

const MyApp = () => {
  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
      return Math.floor(Math.random()
          * (max - min + 1)) + min;
  };

  const handleClick = () => {
      setNum(randomNumberInRange(1, 100));
  };

  const [count, setCount] = useState(0);

  const numberPlus = () => {
    setCount(Math.round((count+Math.random()) * 100) / 100);
  };

  const numberMinus = () => {
    setCount(Math.round((count-Math.random()) * 100) / 100);
  };

  const numberRandom = () => {
    setCount(Math.round((count+count*Math.random()) * 100) / 100);
  };

  const numberReset = (event) => {
    setCount(0);
  };

  if(count>100){
    setCount(0)
    alert("Your number was above 100. Please try again.")
  }

  if(count<0){
    setCount(0)
    alert("Your number was below 0. Please try again.")
  }

  return (
    <div>
      <body>
      <h2>Get the counter to {num}.</h2>
        <p>{count}</p>
      </body>
        <div class="buttons">
          <ButtonMinus count={count} onClick={numberMinus} />
          <ButtonPlus count={count} onClick={numberPlus} />
          <ButtonRandom count={count} onClick={numberRandom} />
          <ButtonReset count={count} onClick={numberReset} />
        </div>
        <div>
          <progress value={(count/num)} />
          <progress value={(100-count)/(100-num)} />
        </div>
        <div>
            <button onClick={handleClick}>
                GENERATE NEW GOAL
            </button>
        </div>
</div>
  );
};

const ButtonPlus = ({ count, onClick }) => {
  return <button onClick={onClick}>+</button>;
};

const ButtonMinus = ({ count, onClick }) => {
  return <button onClick={onClick}>-</button>;
};

const ButtonRandom = ({ count, onClick }) => {
  return <button onClick={onClick}>Random</button>;
};

const ButtonReset = ({ count, onClick }) => {
  return <button onClick={onClick}>Reset</button>;
};

export default MyApp;

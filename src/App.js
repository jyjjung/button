import { useState } from "react";
import "./App.css";
import { waitFor } from "@testing-library/react";

const MyApp = () => {
  const [num, setNum] = useState(0);
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(0);

  const randomNumberInRange = (min, max) => {
      return Math.floor(Math.random()
          * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 99));
    setCount(0);
    setClick(0);
};

  const numberPlus = () => {
    setCount(Math.round((count+Math.random()) * 100) / 100);
    setClick(click+1);
  };

  const numberMinus = () => {
    setCount(Math.round((count-Math.random()) * 100) / 100);
    setClick(click+1);
  };

  const numberRandom = () => {
    setCount(Math.round(((Math.random()) * 100))/100+Math.round(Math.random()*100));
    setClick(click+1);
  };

  const numberReset = (event) => {
    setCount(0);
    setClick(click+1);
  };

  if(count>100){
    setCount(0);
    alert("Your number was above 100. Please try again.");
  }

  if(count<0){
    setCount(0);
    alert("Your number was below 0. Please try again.");
  }

  if(click>100){
    alert("You used more than 100 functions. Please try again.")
    setNum(randomNumberInRange(1, 99));
    setCount(0);
    setClick(0);
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
          setCount(Math.round((count-Math.random()) * 100) / 100);
          setClick(click+1);
            break;
        case 38:
          setCount(Math.round(((Math.random()) * 100))/100+Math.round(Math.random()*100));
          setClick(click+1);
            break;
        case 39:
          setCount(Math.round((count+Math.random()) * 100) / 100);
          setClick(click+1);
            break;
        case 40:
          setCount(0);
          setClick(click+1);
            break;
       case 32:
          setNum(randomNumberInRange(1, 99));
          setClick(0);
          setCount(0);
            break;
            
       case 82:
         setNum(randomNumberInRange(1, 99));
         setClick(0);
         setCount(0);
           break;
    }
}

if(count<num+0.001 &&count>num-0.001 &&count>0){
  alert("You win!");
};

  return (
    <div>
      <body>
      <h2>Get the counter to {num}.</h2>
        <p>{count}</p>
        <p class="rule">NUMBER OF FUNCTIONS USED: {click}</p>
        <progress value={(100-click)/100} />
        <p class="rule">NUMBER OF FUNCTIONS LEFT: {100-click}</p>
      </body>
        <div class="buttons">
          <ButtonMinus count={count} onClick={numberMinus} />
          <ButtonPlus count={count} onClick={numberPlus} />
          <ButtonRandom count={count} onClick={numberRandom} />
          <ButtonReset count={count} onClick={numberReset} />
        </div>
        <p>

        </p>
        <div class="buttons">
            <button class="reset" onClick={handleClick}>
                RESET GAME
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
  return <button onClick={onClick}>Reset count</button>;
};

export default MyApp;
import React, { useState } from "react";
import "./TicketCounter.scss";

const TicketCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter ===0 ) {
      setCounter(0);
    } else {
      setCounter(counter-1);
    }
  };

  const ticketCounterJSX = (
    <div className="counterContent">
      <h6 className="counterTitle">Counter</h6>
      <p>{counter}</p>
      <div className="button">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );

  return <div className="counterContainer">{ticketCounterJSX}</div>;
};

export default TicketCounter;

import React, { useState } from "react";
import "./TicketCounter.scss";

const TicketCounter = () => {
  const [ticketCounter, setTicketCounter] = useState(0);

  const handleIncrement = () => {
    if (ticketCounter === 0) {
      setTicketCounter((ticketCounter += 1));
    } else {
      setTicketCounter(0);
    }
  };

  const ticketCounterJSX = (
    <div>
      <h6 className="counterTitle">Counter</h6>
      {/* <p>{TicketCounter}</p> */}
      <button onClick={handleIncrement}>+</button>
      <button>-</button>
    </div>
  );

  return <div className="counterContainer">{ticketCounterJSX}</div>;
};

export default TicketCounter;

import React, { useState, useEffect } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (title === "What is Swapxpress?") {
      setIsActive(true);
    }
  }, [title]);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;

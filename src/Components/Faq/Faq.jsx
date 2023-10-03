import React from "react";
import { accordionData } from "./data";
import Accordion from "./Accordion";
import "./Faq.css";
const Faq = () => {
  return (
    <div className="makeito">
      <div className="Faq-cdl">
        <h1 className="text-faq" style={{ overflow: "hidden" }}>
          Frequently Asked Questions
        </h1>
        <div className="accordion">
          {accordionData.map(({ title, content }, key) => (
            <Accordion key={key} title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

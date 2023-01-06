import React from "react";
import playIcon from "../../assets/icons/play.svg";

const AccordionItem = ({ title = "Lesson" }) => {
  return (
    <div className="accordion__item">
      <div className="accordion__item-box">
        <img src={playIcon} className="accordion__item-img" alt="Item" />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default AccordionItem;

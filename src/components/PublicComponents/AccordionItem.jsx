import React from "react";
import playIcon from "../../assets/icons/play.svg";
import { NavLink } from "react-router-dom";
const AccordionItem = ({ title = "Lesson", link }) => {
  const onToScroll = ()=>{
    window.scrollTo(0,0);
  }
  if (!link) {
    return (
      <div className="accordion__item">
        <div className="accordion__item-box">
          {/*<img src={playIcon} className="accordion__item-img" alt="Item" />*/}
          <span>{title}</span>
        </div>
      </div>
    );
  }
  return (
    <NavLink onClick={onToScroll} to={`${link}`} className={({ isActive }) => (isActive ? "active accordion__item" : "accordion__item")}>
      <div className="accordion__item-box">
        {/*<img src={playIcon} className="accordion__item-img" alt="Item" />*/}
        <span>{title}</span>
      </div>
    </NavLink>
  );
};

export default AccordionItem;

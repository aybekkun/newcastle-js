import React from "react";
import cls from "classnames";

import arrowIcon from "../../assets/icons/arrow.svg";
import useActive from "../../hooks/useActive.hook";



const Accordion = ({ title = "Lesson", children }) => {
  const { active, handleChangeActive } = useActive();
  return (
    <div className={cls("accordion", { active: active })}>
      <div onClick={handleChangeActive} className="accordion__label">
        <span>{title}</span> <img src={arrowIcon} className="accordion__label-img" alt="Arrow" />
      </div>
      <div className="accordion__content">{children}</div>
    </div>
  );
};

export default Accordion;

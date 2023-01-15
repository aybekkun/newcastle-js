import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ArrowButtons = () => {
  const { materials, course } = useSelector((state) => state.courses);
  const { id, courseId } = useParams();
  const navigate = useNavigate();

  const [count, setCount] = React.useState(0);

  const navArray = materials && course ? materials.map((item) => item.id) : [0];

  const isPrevDisabled = navArray[0] == courseId;
  const isNextDisabled = navArray[navArray.length - 1] == courseId;

  React.useEffect(() => {
    // if (courseId) {
    //   navigate(`/course/${id}/${navArray[count]}`);
    // }
  }, [count]);

  const onNavigate = (num) => {
    window.scrollTo(0, 80);
    setCount((prev) => prev + num);
  };
  return (
    <div className="arrow">
      <button onClick={() => onNavigate(-1)} disabled={isPrevDisabled} className="btn">{`< Prev`}</button>
      <button onClick={() => onNavigate(1)} disabled={isNextDisabled} className="btn">{`Next >`}</button>
    </div>
  );
};

export default ArrowButtons;

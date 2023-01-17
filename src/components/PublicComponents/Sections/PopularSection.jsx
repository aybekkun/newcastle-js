import React from "react";
import Card from "../Card";
import axios from "axios";
import { fetchCourses } from "../../../redux/courses/asyncActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PopularSection = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.courses);
  const location = useLocation();

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
      await dispatch(fetchCourses({ cancelToken: cancelToken.token }));
    })();
    return () => {
      cancelToken.cancel();
    };
  }, []);
  return (
    <section className="popular">
      <h3 className="popular__subtitle subtitle">ADVANCE YOUR CAREER</h3>
      <h2 className="popular__title title">Popular topics to learn now</h2>
      <div className="container">
        <div className="popular__inner">
          <div className="card">
            {data.map((item) => (
              <Card
                key={item.id}
                secondId={item.sub_lesson_2s_id}
                title={item.title}
                id={item.id}
                price={item.price}
                description={item.description}
                image={item.image}
                lessons={item.lessons}
              />
            ))}
          </div>

          <button href="#" className="btn popular__btn">
            View all topics
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;

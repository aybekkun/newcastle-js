import { Button } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/PublicComponents/Card";
import { deleteCourse, fetchCourses } from "../../redux/courses/asyncActions";

const GeneralPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.courses);
  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
      await dispatch(fetchCourses({ cancelToken: cancelToken.token }));
    })();
    return () => {
      cancelToken.cancel();
    };
  }, []);

  const onDeleteCourse = async (id) => {
    if (window.confirm("Delete Course ?")) {
      await dispatch(deleteCourse({ id }));
      await dispatch(fetchCourses({}));
      console.log(id);
    }
  };
  return (
    <>
      <Button onClick={() => navigate("addcourse")} style={{ marginBottom: "10px" }}>
        + Add Course
      </Button>
      <div className="general">
        {data.map((item) => (
          <Card
            key={item.id}
            secondId={item.sub_lesson_2s_id}
            title={item.title}
            id={item.id}
            price={item.price}
            image={item.image}
            description={item.description}
            lessons={item.lessons}
            onDelete={onDeleteCourse}
          />
        ))}
      </div>
    </>
  );
};

export default GeneralPage;

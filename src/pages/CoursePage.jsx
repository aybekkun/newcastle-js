import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowEditer from "../components/Editer/ShowEditer";
import Comments from "../components/PublicComponents/Comments";
import Aside from "../components/PublicComponents/Sections/Aside";
import CourseInfo from "../components/PublicComponents/Sections/CourseInfo";
import Test from "../components/PublicComponents/Test";
import { fetchMaterials } from "../redux/lessons/asyncActions";
const CoursePage = () => {
  const { blocks, lesson } = useSelector((state) => state.lessons);

  const dispatch = useDispatch();

  const { id, courseId } = useParams();
  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
      // await dispatch(fetchCourse({ id: id, cancelToken: cancelToken.token }))
      await dispatch(fetchMaterials({ id: courseId, cancelToken: cancelToken.token }));
    })();
    return () => {
      cancelToken.cancel();
    };
  }, [courseId, dispatch]);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__inner">
            <div className="wrapper__title-box">
              <h3 className="subtitle wrapper__subtitle">Kurslar</h3>
            </div>
            <div className="tab-content wrapper__desc-box">
              {lesson && lesson.name?.toLowerCase() !== "test" ? (
                <div data-tab-index="1" className="wrapper__desc" id="tab-1">
                  {blocks.length > 0 ? <ShowEditer blocks={blocks} /> : <h2>Нет данных</h2>}
                  {Number(courseId) === 1 && <CourseInfo />}
                </div>
              ) : (
                <Test blocks={blocks} />
              )}
              {activeTab === 1 && (
                <div data-tab-index="3" className="wrapper__desc" id="tab-3">
                  <Comments />
                </div>
              )}
            </div>
          </div>
          <Aside id={id} />
        </div>
      </div>
    </>
  );
};

export default CoursePage;

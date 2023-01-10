import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowEditer from "../components/Editer/ShowEditer";
import Comments from "../components/PublicComponents/Comments";
import Aside from "../components/PublicComponents/Sections/Aside";
import CourseInfo from "../components/PublicComponents/Sections/CourseInfo";
import { fetchMaterials } from "../redux/lessons/asyncActions";
const CoursePage = () => {
  const { blocks } = useSelector((state) => state.lessons);
  console.log(blocks);
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
              <div className="wrapper__title-inner">
                {blocks.length > 0 ? <ShowEditer blocks={[blocks[0]]} /> : <h2>Нет материалов</h2>}
                {blocks.length > 0 && <ShowEditer blocks={[blocks[1]]} />}
              </div>
            </div>
            <div className="tabs">
              <ul id="tabs-nav" className="tabs__list">
                <li onClick={() => setActiveTab(0)} data-tab="1" className="tabs__list-item">
                  Kurs malumot
                </li>
                <li onClick={() => setActiveTab(1)} data-tab="3" className="tabs__list-item">
                  Kommentariya
                </li>
              </ul>
            </div>
            <div className="tab-content wrapper__desc-box">
              {activeTab === 0 && (
                <div data-tab-index="1" className="wrapper__desc" id="tab-1">
                  {blocks.length > 0 ? <ShowEditer blocks={blocks.slice(2)} /> : <h2>Нет данных</h2>}
                  {Number(courseId) === 1 && <CourseInfo />}
                </div>
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

import React from "react";
import Aside from "../components/PublicComponents/Sections/Aside";
import Comments from "../components/PublicComponents/Comments";
import CourseInfo from "../components/PublicComponents/Sections/CourseInfo";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchMaterials } from "../redux/lessons/asyncActions";
import Blocks from "editorjs-blocks-react-renderer";
const CoursePage = () => {
  const { course } = useSelector((state) => state.courses);
  const { blocks } = useSelector((state) => state.lessons);
  const dispatch = useDispatch();

  const { id, courseId } = useParams();
  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
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
              <h2 className="title wrapper__title">Boshlang’ich ingliz tili kursi</h2>
              <Outlet />
            </div>
            <div className="wrapper__video-box">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Pj5SlLWFFHY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
                  {courseId !== 0 ? <Blocks data={blocks} /> : <h2>Нет данных</h2>}

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

import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourse } from "../../../redux/courses/asyncActions";
import Accordion from "../Accordion";
import AccordionItem from "../AccordionItem";
const Aside = ({ id }) => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.courses);
  const params = useParams();

  // React.useEffect(() => {
  //   const cancelToken = axios.CancelToken.source();
  //   (async function () {
  //     await dispatch(fetchCourse({ id: id, cancelToken: cancelToken.token }));
  //   })();
  //   return () => {
  //     cancelToken.cancel();
  //   };
  // }, [id]);
  return (
    <aside className="aside">
      <h3 className="aside__title">Materials</h3>
      {course.lessons &&
        course.lessons.map((item) => (
          <Accordion key={item.id} title={item.name}>
            {item.sub_lessons.map((sub) => (
              <Accordion title={sub.name} key={sub.id}>
                {sub.sub_lesson_2s.length > 0 ? (
                  sub.sub_lesson_2s.map((subItem) => (
                    <AccordionItem
                      available={item.available}
                      link={`${id}/${subItem.id}`}
                      title={subItem.name}
                      key={subItem.id}
                    />
                  ))
                ) : (
                  <AccordionItem title="No courses" />
                )}
              </Accordion>
            ))}
          </Accordion>
        ))}
    </aside>
  );
};

export default Aside;

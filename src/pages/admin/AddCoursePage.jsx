import { Input, InputNumber, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchCourses } from "../../redux/courses/asyncActions";
const AddCoursePage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <div className="add">
      {/*       <Button>Add</Button> */}
      <form>
        <h3>Заголовок</h3>
        <Input showCount maxLength={100} placeholder="Заголовок" />
        <h3>Описания</h3>
        <TextArea
          showCount
          maxLength={100}
          style={{ height: 100, resize: "none" }}
          /*   onChange={onChange} */
          placeholder="disable resize"
        />
        <h3>Преподователь</h3>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          /*  onChange={handleChange} */
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "london",
              label: "london",
            },
          ]}
        />
        <h3>Цена</h3>
        <InputNumber addonAfter="uzs" min={100} defaultValue={100} />
        
      </form>
    </div>
  );
};

export default AddCoursePage;

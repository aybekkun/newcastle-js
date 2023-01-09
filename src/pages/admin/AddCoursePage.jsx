import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/courses/asyncActions";
const configDate = {
  rules: [{ required: true, message: "Пожалуйста введите!" }],
};

const AddCoursePage = () => {
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(null);
  const onFinish = (values) => {
    const fd = new FormData();
    fd.append("title", values.title);
    fd.append("description", values.description);
    fd.append("price", values.price);
    fd.append("image", image);
    fd.append("teacher_id", 1);

    dispatch(createCourse(fd));
    // console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleFile = (e) => {
    let file = e.target.files[0];

    setImage(file);
  };
  return (
    <div className="add">
      <Form
        name="form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Заголовок</h3>
        <Form.Item name={"title"} {...configDate}>
          <Input showCount maxLength={100} placeholder="Заголовок" />
        </Form.Item>
        <h3>Описания</h3>
        <Form.Item name="description" {...configDate}>
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 100, resize: "none" }}
            /*   onChange={onChange} */
            placeholder="text"
          />
        </Form.Item>
        <h3>Преподователь</h3>
        <Form.Item name="teacher_id" {...configDate}>
          <Select placeholder="Пожалуйста выберите группу">
            <Select.Option value={"lucy"}>Lucy</Select.Option>
            <Select.Option value={"jack"}>Jack</Select.Option>
            <Select.Option value={"Def"}>Def</Select.Option>
          </Select>
        </Form.Item>
        <h3>Цена</h3>
        <Form.Item name="price" {...configDate}>
          <InputNumber style={{ marginBottom: "20px" }} addonAfter="uzs" min={100} />
        </Form.Item>

        <input required onChange={handleFile} type="file" accept="image/png, image/gif, image/jpeg" />

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCoursePage;

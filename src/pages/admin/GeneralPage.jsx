import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/PublicComponents/Card";

const GeneralPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("addcourse")} style={{ marginBottom: "10px" }}>
        + Add Course
      </Button>
      <div className="general">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default GeneralPage;

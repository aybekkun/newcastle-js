import React from "react";

const ShowEditer = ({ blocks }) => {
  return <>{blocks.blocks ? blocks.blocks.map((output) => <Output output={output} />) : <h2>Нет данных</h2>}</>;
};

const Output = ({ output }) => {
  if (output.type === "header") {
    return <h2>{output.data.text}</h2>;
  }

  if (output.type === "paragraph") {
    return <p>{`${output.data.text}`}</p>;
  }

  return <></>;
};

export default ShowEditer;

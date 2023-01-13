import React from "react";
import { useDispatch } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import RegisterLayout from "./layouts/RegisterLayout";
import Routing from "./Routing/Routing";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    (function () {
      
    })();
  }, []);
  return (
    <>
      <Routing />
    </>
  );
};

export default App;

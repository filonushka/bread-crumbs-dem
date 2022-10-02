import React from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import { Routes, Route, Link } from "react-router-dom";
function Page1() {
  return (
    <>
      <h2>Page1</h2>
      <div>
        <Link to="/page/level1">
          <Level1 />
        </Link>
        <Link to="/page1/level2">
          <Level2 />
        </Link>
      </div>
      <Routes>
        <Route
          path="/page1/level1"
          element={<Level1 />}
          onClick={<Level1 />}
        ></Route>
        <Route path="/page1/level2" element={<Level2 />}></Route>
      </Routes>
    </>
  );
}

export default Page1;

import React from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import { Routes, Route, Link } from "react-router-dom";

function Georgia() {
  return (
    <>
      <h2>Georgia</h2>

      <Link to="/page2/level1">
        <Level1 />
      </Link>
      <Link to="/page2/level2">
        <Level2 />
      </Link>
      <Link to="/page2/level3">
        <Level3 />
      </Link>
      <Routes>
        <Route path="/georgia/level1" element={<Level1 />}></Route>
        <Route path="/georgia/level2" element={<Level2 />}></Route>
        <Route path="/georgia/level3" element={<Level3 />}></Route>
      </Routes>
    </>
  );
}

export default Georgia;

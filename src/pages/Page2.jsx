import React from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import { Routes, Route, Link } from "react-router-dom";

function Page2() {
  return (
    <>
      <h2>Page2</h2>

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
        <Route path="/page2/level1" element={<Level1 />}></Route>
        <Route path="/page2/level2" element={<Level2 />}></Route>
        <Route path="/page2/level3" element={<Level3 />}></Route>
      </Routes>
    </>
  );
}

export default Page2;

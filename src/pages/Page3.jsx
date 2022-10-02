import React from "react";
import Level1 from "./Level1";
import { Routes, Route, Link } from "react-router-dom";

function Page2() {
  return (
    <>
      <h2>Page3</h2>

      <Link to="/page3/level1">
        <Level1 />
      </Link>
      <Routes>
        <Route path="/page3/level1" element={<Level1 />}></Route>
      </Routes>
    </>
  );
}

export default Page2;

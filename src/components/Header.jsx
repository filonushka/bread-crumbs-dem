import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import "../styles/Header.css";
import "../styles/index.css";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page2";
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__nav">
          <Link className="header__li" to="/">
            Home
          </Link>
          <Link className="header__li" to="/page1">
            Page1
          </Link>
          <Link className="header__li" to="/page2">
            Page2
          </Link>
          <Link className="header__li" to="/page3">
            Page3
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
          <Route path="/page3" element={<Page3 />}></Route>
        </Routes>
      </div>

      <BreadCrumbs />
    </>
  );
}

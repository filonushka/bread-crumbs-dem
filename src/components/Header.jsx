import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import "../styles/Header.css";
import "../styles/index.css";
import Home from "../pages/Home";
import Czech from "../pages/Czech";
import Georgia from "../pages/Georgia";
import Page3 from "../pages/Page3";
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__nav">
          <Link className="header__li" to="/">
            Home
          </Link>
          <Link className="header__li" to="/czech Republic">
            Czech Republic
          </Link>
          <Link className="header__li" to="/georgia">
            Georgia
          </Link>
          <Link className="header__li" to="/page3">
            Page3
          </Link>
        </div>
        <Routes>
          <Route path="/"></Route>
          <Route path="/czech Republic"></Route>
          <Route path="/georgia" element={<Georgia />}></Route>
          <Route path="/page3" element={<Page3 />}></Route>
        </Routes>
      </div>

      <BreadCrumbs />
    </>
  );
}

import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

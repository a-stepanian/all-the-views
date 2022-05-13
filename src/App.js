import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Places, Show, Error } from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="places" element={<Places />} />
        <Route path="places/:id" element={<Show />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

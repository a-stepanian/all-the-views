import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Places, Park, Show } from "./pages";
import { Navbar, Sidebar, Footer, Error } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places" element={<Places />} />
        <Route path="places/:id" element={<Park />} />
        <Route path="places/:id/:viewId" element={<Show />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

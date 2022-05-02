import React from "react";
import { Routes, Route } from "react-router-dom";
import CovidApi from "./pages/CovidApi/CovidApi";
import PaginationPage from "./pages/Pagination/Pagination";
import ToDoApp from "./pages/ToDoApp/ToDoApp";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CovidApi />} />
        <Route path="/pagination" element={<PaginationPage />} />
        <Route path="/todoapp" element={<ToDoApp />} />
      </Routes>
    </div>
  );
};

export default RoutesPage;

import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import {
  Home,
  Solution,
  Courses,
  Jobs,
  CoursesDetails,
  JobDetails,
  ApplyCourse,
} from "./pages";

function App() {
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="solution" element={<Solution />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CoursesDetails />} />
        <Route path="courses/:id/apply" element={<ApplyCourse />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:id" element={<JobDetails />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;

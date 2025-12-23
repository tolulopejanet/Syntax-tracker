import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import Calendar from "./pages/Calendar";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/today"
          element={
            <ProtectedRoute>
              <Navbar />
              <Today />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upcoming"
          element={
            <ProtectedRoute>
              <Navbar />
              <Upcoming />
            </ProtectedRoute>
          }
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <Navbar />
              <Calendar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
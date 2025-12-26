import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Calendar from "./pages/Calendar";
import Gallery from "./pages/Gallery";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Birthdays from "./pages/Birthdays";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
    
          <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Navbar />
              <Dashboard />
            </ProtectedRoute>
          }
        />


        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Navbar />
              <Events />
            </ProtectedRoute>
          }
        />

        <Route
          path="/birthdays"
          element={
            <ProtectedRoute>
              <Navbar />
              <Birthdays />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Navbar />
              <Gallery />
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
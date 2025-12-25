import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout } from "../utils/auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-[#2f7d32] text-white px-4 md:px-8 py-4 shadow">
      <div className="flex items-center justify-between">
        {/* <h1 className=" cursor-pointer">🎂 Birthday Tracker</h1> */}
        <NavLink to="/dashboard" className="font-bold text-lghover:underline">
            Syntax 
          </NavLink>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/dashboard" className="hover:underline">
            Dashboard
          </NavLink>
          <NavLink to="/events" className="hover:underline">
            Events
          </NavLink>
          <NavLink to="/birthdays" className="hover:underline">
            Birthdays
          </NavLink>
          <NavLink to="/calendar" className="hover:underline">
            Calendar
          </NavLink>

          <button
            onClick={handleLogout}
            className="bg-white text-[#2f7d32] px-4 py-1.5 rounded-lg font-medium"
          >
            Logout
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <NavLink to="/dashboard" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/events" onClick={() => setOpen(false)}>
            Events
          </NavLink>
          <NavLink to="/birthdays" onClick={() => setOpen(false)}>
            Birthdays
          </NavLink>
          <NavLink to="/calendar" onClick={() => setOpen(false)}>
            Calendar
          </NavLink>

          <button
            onClick={handleLogout}
            className="bg-white text-[#2f7d32] px-4 py-2 rounded-lg font-medium w-full"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
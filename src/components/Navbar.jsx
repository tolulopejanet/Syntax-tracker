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
        <h1 className="font-bold text-lg">🎂 Birthday Tracker</h1>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/today" className="hover:underline">
            Today
          </NavLink>
          <NavLink to="/upcoming" className="hover:underline">
            Upcoming
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
          <NavLink to="/today" onClick={() => setOpen(false)}>
            Today
          </NavLink>
          <NavLink to="/upcoming" onClick={() => setOpen(false)}>
            Upcoming
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
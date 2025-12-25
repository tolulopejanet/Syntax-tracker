import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#166534" }} className="mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 text-white">

        {/* Top Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-2">Syntax</h2>
            <p className="text-sm opacity-90">
              Helping you celebrate moments that matter. Never miss a birthday
              or event again.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/birthdays" className="hover:underline">
                  Birthdays
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="hover:text-[#22C55E] transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-[#22C55E] transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-[#22C55E] transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-[#22C55E] transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-sm">📧 support@syntax-tracker.com</p>
        
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }}
        />

        {/* Footer Bottom */}
        <div className="text-center text-sm opacity-80">
          © {new Date().getFullYear()} Syntax. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
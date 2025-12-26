import React from "react";
import { Link } from "react-router-dom";
import { events } from "../data/events";
import { birthdays } from "../data/birthdays";

const galleryImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#ECFDF5] px-6 py-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#166534]">
            Welcome Back 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here’s what’s happening today
          </p>
        </div>

        {/* STAT CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <StatCard title="Total Events" value="12" bg="#DCFCE7" />
          <StatCard title="Upcoming Birthdays" value="5" bg="#DCFCE7" />
          <StatCard title="This Month" value="8" bg="#DCFCE7" />
          <StatCard title="Total Members" value="24" bg="#DCFCE7" />
        </div>

        {/* EVENTS */}
        <section className="mb-14">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#166534]">
              Upcoming Events
            </h2>
            <Link to="/events" className="text-sm text-[#22C55E]">
              View all →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, index) => (
              <div
                key={index}
                className="bg-[#DCFCE7] p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{event.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {event.purpose}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {event.datetime}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BIRTHDAYS */}
        <section className="mb-14">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#166534]">
              Upcoming Birthdays
            </h2>
            <Link to="/birthdays" className="text-sm text-[#22C55E]">
              View all →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdays.slice(0, 3).map((person, index) => (
              <div
                key={index}
                className="bg-[#DCFCE7] p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="font-semibold">{person.name}</p>
                <p className="text-sm text-gray-600">
                  Birthday: {person.date}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#166534]">
              Gallery
            </h2>
            <Link to="/gallery" className="text-sm text-[#22C55E]">
              View all →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

const StatCard = ({ title, value, bg }) => (
  <div
    className="p-6 rounded-xl shadow"
    style={{ backgroundColor: bg }}
  >
    <p className="text-sm text-gray-600">{title}</p>
    <h3 className="text-2xl font-bold text-[#166534] mt-1">
      {value}
    </h3>
  </div>
);

export default Dashboard;
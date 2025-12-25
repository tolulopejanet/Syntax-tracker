import React from "react";
import { events } from "../data/events";
import { birthdays } from "../data/birthdays";

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#ECFDF5] min-h-screen">
      <h2 className="text-2xl font-bold text-[#166534] mb-6">
        Home
      </h2>

      {/* EVENTS */}
      <section className="mb-10">
        <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.slice(0, 3).map((event, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow"
            >
              <h4 className="font-semibold">{event.name}</h4>
              <p className="text-sm text-gray-600">{event.purpose}</p>
              <p className="text-sm mt-1">{event.datetime}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BIRTHDAYS */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Upcoming Birthdays</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {birthdays.slice(0, 5).map((person, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow"
            >
              <p className="font-medium">{person.name}</p>
              <p className="text-sm text-gray-600">{person.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
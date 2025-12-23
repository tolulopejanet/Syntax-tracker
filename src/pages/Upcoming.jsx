import React from "react";
import { birthdays } from "../data/birthdays";

const Upcoming = () => {
  const today = new Date();

  const upcoming = birthdays.filter(
    b => new Date(b.date) > today
  );

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 mt-8">
        📅 Upcoming Birthdays
      </h1>

      <div className="space-y-3">
        {upcoming.map(b => (
          <div
            key={b.id}
            className="bg-white p-4 rounded-xl flex justify-between shadow-sm"
          >
            <span className="font-medium">{b.name}</span>
            <span className="text-sm text-gray-500">{b.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
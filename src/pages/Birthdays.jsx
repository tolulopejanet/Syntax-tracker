import React from "react";
import { birthdays } from "../data/birthdays";

const Birthdays = () => {
  const today = new Date();

  const upcoming = birthdays.filter((b) => {
    const date = new Date(b.date);
    date.setFullYear(today.getFullYear());
    return date >= today;
  });

  return (
    <div className="bg-farm-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-farm-green mb-4">
          🎂 Upcoming Birthdays
        </h2>

        <div className="space-y-4">
          {upcoming.map((b, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow flex justify-between"
            >
              <span className="font-medium">{b.name}</span>
              <span className="text-gray-500">
                {new Date(b.date).toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
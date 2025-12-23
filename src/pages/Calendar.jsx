import React from "react";
import { useState } from "react";
import { birthdays } from "../data/birthdays";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const monthBirthdays = birthdays.filter((b) => {
    const date = new Date(b.date);
    return date.getMonth() === month;
  });

  const getBirthdaysForDay = (day) =>
    monthBirthdays.filter(
      (b) => new Date(b.date).getDate() === day
    );

  return (
    <div className="bg-[#f1f8f4] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() =>
              setCurrentDate(new Date(year, month - 1, 1))
            }
            className="px-3 py-1 rounded bg-white shadow"
          >
            ←
          </button>

          <h2 className="text-lg sm:text-xl font-bold text-[#2f7d32]">
            {currentDate.toLocaleString("default", {
              month: "long",
            })}{" "}
            {year}
          </h2>

          <button
            onClick={() =>
              setCurrentDate(new Date(year, month + 1, 1))
            }
            className="px-3 py-1 rounded bg-white shadow"
          >
            →
          </button>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-xl shadow p-4">
          {/* Days */}
          <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-600 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-2 text-xs sm:text-sm">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, index) => {
              const date = index + 1;
              const dayBirthdays = getBirthdaysForDay(date);

              const isToday =
                date === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();

              return (
                <div
                  key={date}
                  className={`border rounded-lg p-1 sm:p-2 h-20 sm:h-24 overflow-hidden
                    ${
                      isToday
                        ? "border-[#2f7d32]"
                        : "border-gray-200"
                    }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className={`text-xs font-semibold ${
                        isToday
                          ? "text-[#2f7d32]"
                          : "text-gray-700"
                      }`}
                    >
                      {date}
                    </span>

                    {dayBirthdays.length > 0 && (
                      <span className="text-[10px] bg-[#2f7d32] text-white px-1.5 rounded">
                        🎂
                      </span>
                    )}
                  </div>

                  {/* Birthday names */}
                  <div className="space-y-1">
                    {dayBirthdays.map((b, i) => (
                      <p
                        key={i}
                        className="text-[10px] truncate bg-[#f1f8f4] px-1 rounded"
                      >
                        {b.name}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
import React from "react";
import { birthdays } from "../data/birthdays";
import BirthdayAnnouncement from "../components/BirthdayAnnouncement";

const Today = () => {
  const today = new Date().toISOString().slice(5, 10);

  const todaysBirthdays = birthdays.filter(
    b => b.date.slice(5, 10) === today
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6 mt-8">
      <h1 className="text-2xl font-bold text-gray-800">
        🎂 Today’s Celebrants
      </h1>

      {todaysBirthdays.length === 0 ? (
        <div className="bg-[#f1f8f4] p-8 rounded-xl text-center">
          <p className="text-[#2F7D32] font-medium">
            No birthdays today 
          </p>
        </div>
      ) : (
        todaysBirthdays.map(b => (
          <BirthdayAnnouncement key={b.id} name={b.name} />
        ))
      )}
    </div>
  );
};

export default Today;



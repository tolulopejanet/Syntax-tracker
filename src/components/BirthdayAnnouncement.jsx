import React from "react";

const BirthdayAnnouncement = ({ name }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
      <p className="text-sm text-gray-500 mb-1">
        🎉 Birthday Today
      </p>
      <h2 className="text-2xl font-bold text-[#2F7D32]">
        {name}
      </h2>
      <p className="text-gray-600 mt-2">
        Wishing you joy, growth, and success  
      </p>
    </div>
  );
};

export default BirthdayAnnouncement;
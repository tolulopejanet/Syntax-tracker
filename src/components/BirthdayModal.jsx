import { useEffect, useState } from "react";
import React from "react";
const BirthdayModal = ({ open, onClose, onSave, initial }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (initial) {
      setName(initial.name);
      setDate(initial.date);
    }
  }, [initial]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="font-semibold mb-4">
          {initial ? "Edit Birthday" : "Add Birthday"}
        </h2>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="date"
          className="w-full border p-2 mb-4"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={() => {
              onSave({ ...initial, name, date });
              onClose();
            }}
            className="bg-[#2F6B3F] text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayModal;
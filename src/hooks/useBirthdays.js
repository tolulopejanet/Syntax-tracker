import { useEffect, useState } from "react";

const KEY = "birthdays";

export const useBirthdays = () => {
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(KEY));
    if (data) setBirthdays(data);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(birthdays));
  }, [birthdays]);

  const addBirthday = (data) => {
    setBirthdays([...birthdays, { ...data, id: Date.now() }]);
  };

  const updateBirthday = (data) => {
    setBirthdays(birthdays.map(b => b.id === data.id ? data : b));
  };

  const deleteBirthday = (id) => {
    setBirthdays(birthdays.filter(b => b.id !== id));
  };

  return { birthdays, addBirthday, updateBirthday, deleteBirthday };
};
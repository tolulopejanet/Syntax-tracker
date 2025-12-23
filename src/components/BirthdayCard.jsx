const BirthdayCard = ({ person, onEdit, onDelete }) => (
  <div className="bg-white p-4 rounded-xl shadow flex justify-between">
    <div>
      <h3 className="font-semibold">{person.name}</h3>
      <p className="text-sm text-gray-500">{person.date}</p>
    </div>

    <div className="flex gap-3">
      <button onClick={() => onEdit(person)} className="text-[#2F6B3F]">
        Edit
      </button>
      <button onClick={() => onDelete(person.id)} className="text-red-500">
        Delete
      </button>
    </div>
  </div>
);

export default BirthdayCard;
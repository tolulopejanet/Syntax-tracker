import React from "react";
const events = [
  {
    name: "Syntax Meeting",
    purpose: "Discuss project updates",
    datetime: "2025-11-01 10:00",
    audience: "Team Leads",
    agenda: "Timeline Updates",
    phone: "8100589346",
    email: "team@syntax.com",

  },
  {
    name: "Syntax Meeting",
    purpose: "Discuss project updates",
    datetime: "2025-11-01 10:00",
    audience: "Team Leads",
    agenda: "Timeline Updates",
    phone: "8100589346",
    email: "team@syntax.com",
  },
  {
    name: "Syntax Meeting",
    purpose: "Discuss project updates",
    datetime: "2025-11-01 10:00",
    audience: "Team Leads",
    agenda: "Timeline Updates",
    phone: "8100589346",
    email: "team@syntax.com",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ECFDF5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="mb-8">
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: "#166534" }}
          >
            📅 Events
          </h2>
          <p
            className="mt-1 text-sm sm:text-base"
            style={{ color: "#6B7280" }}
          >
            Stay updated with scheduled meetings and activities
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative rounded-3xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E5E7EB",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 h-2 w-full rounded-t-3xl"
                style={{ backgroundColor: "#22C55E" }}
              />

              <div className="p-6 pt-8 flex flex-col h-full">

                {/* Title */}
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#166534" }}
                >
                  {event.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "#6B7280" }}
                >
                  {event.purpose}
                </p>

                {/* Info */}
                <div
                  className="grid gap-3 text-sm"
                  style={{ color: "#1F2937" }}
                >
                  <div>🕒 <strong>Date & Time:</strong> {event.datetime}</div>
                  <div>👥 <strong>Audience:</strong> {event.audience}</div>
                  <div>📝 <strong>Agenda:</strong> {event.agenda}</div>
                  <div>📞 <strong>RSVP:</strong> {event.phone}</div>
                  <div className="truncate">
                    📧 <strong>Email:</strong> {event.email}
                  </div>
                </div>

                <div className="flex-grow" />

               

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;
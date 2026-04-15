import { useState } from "react";

export default function InvitationCard({ event }) {
    const [response, setResponse] = useState("");

    // ✅ Date format
    const formatDate = (date) => {
        if (!date || date === "0000-00-00") return "Date not available";

        return new Date(date).toLocaleString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    };

    const handleResponse = (type) => {
        setResponse(type);
        console.log("Response:", type, "Event ID:", event.Invitation_id);
    };

    return (
        <div className="event-card">

            <div className="card-head">
                <span className="event-tag">
                    {event.event_type || event.status || "Event"}
                </span>
            </div>

            <h3>{event.title}</h3>

            <p className="event-desc">
                {event.description}
            </p>

            <div className="event-info">
                <div>{formatDate(event.event_date)}</div>

                <div>
                    {[event.city, event.address].filter(Boolean).join(", ") || "Location not available"}
                </div>

                <div>
                    Host: {event.user_name || "N/A"}
                </div>
            </div>

            <div className="event-actions">
                <button
                    className={`event-btn ${response === "Like" ? "active" : ""}`}
                    onClick={() => handleResponse("Like")}
                >
                    👍 Like
                </button>

                <button
                    className={`event-btn ${response === "Interested" ? "active" : ""}`}
                    onClick={() => handleResponse("Interested")}
                >
                    ⭐ Interested
                </button>

                <button
                    className={`event-btn ${response === "Going" ? "active" : ""}`}
                    onClick={() => handleResponse("Going")}
                >
                    ✅ Going
                </button>
            </div>

            {response && (
                <div className="event-info">
                    <div>Your Response: {response}</div>
                </div>
            )}

        </div>
    );
}
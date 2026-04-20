import { useEffect, useState } from "react";
import { useInvitationStore } from "../../store/invitationStore";

export default function InvitationSearch() {
    const { fetchInvitations } = useInvitationStore();

    const [filters, setFilters] = useState({
        keyword: "",
        city: "",
        category: "",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleCategory = (cat) => {
        setFilters({ ...filters, category: cat });
    };

    useEffect(() => {
        // console.log("API Params:", filters);
        fetchInvitations({
            ...(filters.keyword && { title: filters.keyword }),
            ...(filters.city && { city: filters.city }),
            ...(filters.category && filters.category !== "All" && { event_type: filters.category }),
        });
    }, [filters]);

    return (
        <div className="search-box">

            <div className="search-field">
                <label>Search keywords</label>
                <input
                    name="keyword"
                    value={filters.keyword}
                    onChange={handleChange}
                    placeholder="Bingo, Yoga, Potluck..."
                />
            </div>

            <div className="search-field">
                <label>Filter by City</label>
                <input
                    name="city"
                    value={filters.city}
                    onChange={handleChange}
                    placeholder="Portland, Beaverton..."
                />
            </div>

            <div className="category-row">
                {[
                    "All",
                    "Social Gatherings",
                    "Educational",
                    "Health & Wellness",
                    "Hobbies",
                    "religious",
                    "community",
                    "Other",
                ].map((cat) => (
                    <span
                        key={cat}
                        className={`cat ${filters.category === cat ? "active" : ""}`}
                        onClick={() => handleCategory(cat)}
                    >
                        {cat}
                    </span>
                ))}
            </div>
        </div>
    );
}
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { use } from "react";
import { useEffect } from "react";

export default function ServiceSearch({ defaultCity, defaultCategory }) {
    const { fetchServices } = useAuthStore();
    console.log(defaultCategory);
    const [filters, setFilters] = useState({
        city: defaultCity || "",
        category: defaultCategory || "All",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            city: defaultCity || prev.city,
            category: defaultCategory ? defaultCategory : prev.category,
        }));
    }, [defaultCity, defaultCategory]);

    useEffect(() => {
        fetchServices({
            role: "provider",
            ...(filters.city && { city: filters.city }),
            ...(filters.category !== "All" && { business_type: filters.category.toLowerCase() }),
        });
    }, [filters]);
    // const handleSearch = () => {
    //     fetchServices({
    //         role: "provider",
    //         ...(filters.city && { city: filters.city }),
    //         ...(filters.category !== "All" && { business_type: filters.category.toLowerCase() }),
    //     });
    // };

    return (
        <div className="service-search-box">

            {/* CITY */}
            <div className="search-field">
                <label>Search by City</label>
                <input
                    type="text"
                    name="city"
                    value={filters.city}
                    onChange={handleChange}
                    placeholder="e.g. Chennai"
                />
            </div>

            {/* CATEGORY */}
            <div className="search-field">
                <label>Category</label>
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                >
                    <option value="All">All Categories</option>
                    <option value="hospital">Hospital</option>
                    <option value="caretaker">Caretaker</option>
                    <option value="medical_store">Medical Store</option>
                    <option value="volunteer">Volunteer</option>
                </select>
            </div>

            {/* BUTTON */}
            {/* <button className="search-btn" onClick={handleSearch}>
                Find Help
            </button> */}

        </div>
    );
}
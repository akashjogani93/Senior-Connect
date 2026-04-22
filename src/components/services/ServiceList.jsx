import { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import ServiceCard from "./ServiceCard";
import { useState } from "react";

export default function ServiceList() {

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const [role, setRole] = useState("provider");
    const {
        services,
        fetchServices,
        loading,
    } = useAuthStore();
    useEffect(() => {
        fetchServices({
            role: role,
        });
    }, []);
    // console.log(services);
    return (
        <div>

            <div className="result-header">
                <h3>Showing 6 results</h3>
            </div>

            <div className="service-grid">
                {services.map((service) => (
                    <ServiceCard key={service.user_id} service={service} />
                ))}
            </div>

        </div>
    );
}
import ServiceSearch from "../../components/services/ServiceSearch";
import ServiceList from "../../components/services/ServiceList";
import "../../assets/css/services.css";

export default function Services() {
    return (
        <div className="services-page">

            {/* Banner */}
            <div className="service-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>
                        Find trusted healthcare, reliable caretakers, and community help near
                        you. We connect you with the support you deserve.
                    </p>
                </div>
            </div>

            <div className="container">
                <ServiceSearch />
                <ServiceList />
            </div>

        </div>
    );
}
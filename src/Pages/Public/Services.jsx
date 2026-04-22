import ServiceSearch from "../../components/services/ServiceSearch";
import ServiceList from "../../components/services/ServiceList";
import "../../assets/css/services.css";
import { useLocation } from "react-router-dom";

export default function Services() {
    const location = useLocation();
    const cityFromHome = location.state?.city || "";
    const categoryFromHome = location.state?.category || "";

    console.log(cityFromHome);
    console.log(categoryFromHome);
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
                <ServiceSearch defaultCity={cityFromHome} defaultCategory={categoryFromHome}/>
                <ServiceList />
            </div>

        </div>
    );
}
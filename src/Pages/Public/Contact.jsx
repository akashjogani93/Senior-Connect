import ContactHeroSection from "../../components/contact/ContactHeroSection";
import ContactInfoSection from "../../components/contact/ContactInfoSection";
import ContactFormSection from "../../components/contact/ContactFormSection";
import MapSection from "../../components/contact/MapSection";
import ContactCTASection from "../../components/contact/ContactCTASection";
export default function Contact() {
    return (
        <>
            <ContactHeroSection />
            <ContactInfoSection />
            <ContactFormSection />
            <MapSection />
            <ContactCTASection />
        </>
    );
}
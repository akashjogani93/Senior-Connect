import AboutHeroSection from '../../components/about/AboutHeroSection.jsx';
import WhoWeAre from '../../components/about/WhoWeAre.jsx';
import OurMissionVision from '../../components/about/OurMissionVision.jsx';
import WhyChooseUs from '../../components/about/WhyChooseUs.jsx';
import StatsSection from '../../components/about/StatsSection.jsx';
import TeamSection from '../../components/about/TeamSection.jsx';
import TestimonialsSection from '../../components/about/TestimonialsSection.jsx';
import CallToActionSection from '../../components/about/CallToActionSection.jsx';

export default function About() {
    return (
        <>
            <AboutHeroSection />
            <WhoWeAre />
            <OurMissionVision />
            <WhyChooseUs />
            <StatsSection />
            <TeamSection />
            <TestimonialsSection />
            <CallToActionSection />
        </>
    );
}
import HeroSection from '../../components/home/HeroSection.jsx'
import CoreServices from '../../components/home/CoreServices.jsx'
import EmergencySection from '../../components/home/EmergencySection.jsx'
import HowItWorks from '../../components/home/HowItWorks.jsx'
import AboutUs from '../../components/home/AboutUs.jsx'
import CallToActionSection from '../../components/about/CallToActionSection.jsx'
import TestimonialsSection from '../../components/about/TestimonialsSection.jsx'
export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreServices />
      <EmergencySection />
      <HowItWorks />
      <AboutUs />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  )
}
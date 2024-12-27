import "./App.css";
import Nav from "./components/Nav.jsx";
import HeroSection from "./components/heroSection.jsx";
import AboutEvent from "./components/aboutEvent.jsx";
import ScheduleSection from "./components/ScheduleSection.jsx";
import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import Faqs from "./components/FAQs.jsx";
import Location from "./components/Location.jsx";
import Speakers from "./components/Speakers.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WorkshopSection from "./components/workshopSection.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
    return (
        <>
            <Analytics />
            <Nav />
            <HeroSection />

            <AboutEvent />
            <ScheduleSection />
            <Speakers />
            <WorkshopSection />

            <Location />
            <Testimonials />
            <Faqs />
            <SpeedInsights/>
        </>
    );
}

export default App;

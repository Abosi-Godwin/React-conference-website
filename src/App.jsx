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

function App() {
    return (
        <>
            <Nav />
            <HeroSection />

            <AboutEvent />
            <ScheduleSection />
            <Speakers />
            <WorkshopSection />

           {/* <Location />
            <Testimonials />
            <Faqs /> */}
        </>
    );
}

export default App;

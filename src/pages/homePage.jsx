import Nav from "../components/Nav.jsx";
import HeroSection from "../components/heroSection.jsx";
import AboutEvent from "../componentkkkklks/aboutEvent.jsx";
import ScheduleSection from "../components/ScheduleSection.jsx";
import Header from "../components/header.jsx";
import Main from "../components/main.jsx";
import Speakers from "../componentkkkklkskkks/Spekkkkkakers.jsx";
//import Faqs from "../components/FAQs.jsx";
function HomePage() {
    return (
        <>
            <Header>
                <Nav />
                <HeroSection />
            </Header>
            <Main>
                <AboutEvent />
                <ScheduleSection />
            </Main>
            <section>
                <h1>Hello</h1>
            </section>
        </>
    );
}

export default HomePage;

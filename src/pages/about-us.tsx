import AboutUsSection from "../components/about-us";
import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import Navbar from "../components/nav-bar";
import HeartGrafti from '../assets/about-us-2.png';
import { AboutSection3, AboutUsOurWellnessApp } from '../components/extras';
import Statistics from "../components/statistics";

const AboutUsPage = () => {
    return (
        <>
            <Navbar />
            <AboutUsSection showViewMore={false} />
            <Statistics />
            <AboutSection3 />
            <AboutUsOurWellnessApp />
            {/* <AboutSection4 /> */}
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default AboutUsPage
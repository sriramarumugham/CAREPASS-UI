import AboutUsSection from "../components/about-us";
import BenifitsSection from "../components/benifits";
import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import HeroSection from "../components/hero";
import Navbar from "../components/nav-bar";
import Statistics from "../components/statistics";
import TrustedPartnersSection from "../components/trusted-partners";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Statistics />
            <BenifitsSection />
            <AboutUsSection showViewMore={true} />
            <TrustedPartnersSection />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default Home;

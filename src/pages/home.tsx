import AboutUsSection from "../components/about-us";
import BenifitsSection from "../components/benifits";
import ContactUsSection from "../components/contact-us";
import { AboutUsOurWellnessApp, ProductCards, WellnessAppBenefits, WhyChooseCarePass } from "../components/extras";
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
            <AboutUsOurWellnessApp />
            {/* <HomePageSection1 /> */}
            {/* <WellnessAppBenefits /> */}
            <WhyChooseCarePass />
            <ProductCards />
            {/* <HealthControlCTA />
            <HomePageSection2 /> */}
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default Home;

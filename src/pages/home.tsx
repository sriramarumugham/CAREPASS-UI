import AboutUsSection from "../components/about-us";
import BenifitsSection from "../components/benifits";
import ContactUsSection from "../components/contact-us";
import { HealthControlCTA, HomePageSection1, HomePageSection2, HomePageSection3, HomePageSection4, ProductCards, WellnessAppBenefits, WhyChooseCarePass } from "../components/extras";
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
            {/* <HomePageSection1 /> */}
            <WellnessAppBenefits />
            <WhyChooseCarePass />
            {/* <HomePageSection3 /> */}
            {/* <HomePageSection4 /> */}
            <ProductCards />
            {/* <HealthControlCTA />
            <HomePageSection2 /> */}
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default Home;

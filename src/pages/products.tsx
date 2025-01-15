import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import Navbar from "../components/nav-bar";
import { CarePassTable, ProductsIntro, WhyChooseCarePassAboutUs } from '../components/extras';
import TrustedPartnersSection from "../components/trusted-partners";

const Products = () => {
    return (
        <>
            <Navbar />
            <ProductsIntro />
            <CarePassTable />
            <TrustedPartnersSection />
            <WhyChooseCarePassAboutUs />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default Products
import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import Navbar from "../components/nav-bar";
import TrustedPartnersSection from "../components/trusted-partners";
import { PlanDetails } from "./tax-saver";
import SilverHeart from '../assets/insurance/silver-plan.png';
import Gradient from '../assets/gradient.png';
import useCartStore from "../store/cart-store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { silverPlanGrid, ResponsiveGrid } from "../utils/plan-benifits";
import { BenefitsBreakdown, AboutUsOurWellnessApp, HealthcareEcosystem, PlanComparison, HowItWorks } from "../components/extras";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaClinicMedical, FaTooth } from "react-icons/fa";
import { IoGlasses } from "react-icons/io5";

const SilverPlanPage = () => {

    const themeColors = {
        primary: "text-deepPurple",
        background: "bg-[#FCF9FF]",  // Light background color for the card
        sectionBg: "bg-cover bg-center",
        cardBg: "bg-white",
    };

    const { addToCart } = useCartStore();
    const navigate = useNavigate();


    const productId = "product2";
    const productName = "CarePass Silver";
    const price = 5000;

    const handleBuyNow = () => {
        addToCart({ productId, productName, price });
        navigate(ROUTES.CART, { relative: 'path' })
    };

    const features = [
        { 
          name: 'Cost', 
          main: '₹5,000 only', 
          other: 'Higher, less coverage' 
        },
        { 
          name: 'Coverage', 
          main: '₹10,000, primary care', 
          other: 'Lower, fewer services' 
        },
        { 
          name: 'Accessibility', 
          main: 'E-wallet, scan & pay', 
          other: 'Physical coupons, inconvenient' 
        },
        { 
          name: 'Digital Experience', 
          main: 'Web & app access', 
          other: 'Limited or unavailable' 
        },
        { 
          name: 'Bundled Services', 
          main: 'Consults, diagnostics, etc.', 
          other: 'Less comprehensive' 
        },
        { 
          name: 'Additional Offerings', 
          main: 'Wellness App, extensive services', 
          other: 'Basic OPD, fewer extras' 
        },
        { 
          name: 'Customer Support', 
          main: 'Support through Email, Chat & Call.', 
          other: 'Limited medium of communication, slower responses' 
        }
      ];

      const breakdownBenefits = [
        {
          service: "Doctor Consultations",
          amount: "10,000",
          subItems: [
            { service: "In-clinic visits", amount: "" },
            { service: "Online consultations, and more.", amount: "" },
          ],
        },
        {
          service: "Doctor-Prescribed Medicines",
          amount: "6,000",
          subItems: [
            { service: "Coverage for prescribed medications", amount: "" },
            { service: "Regular medication support, and more.", amount: "" },
          ],
        },
        {
          service: "Doctor-Prescribed Diagnostics",
          amount: "7,000",
          subItems: [
            { service: "Medical tests and screenings", amount: "" },
            { service: "Laboratory investigations, etc.", amount: "" },
          ],
        },
        {
          service: "Dental Care",
          amount: "4,200",
          subItems: [
            { service: "Routine dental procedures", amount: "" },
            { service: "Professional dental services, and more.", amount: "" },
          ],
        },
        {
          service: "Vision Care",
          amount: "2,800",
          subItems: [
            { service: "Vision health services", amount: "" },
            { service: "Optical care support.", amount: "" },
          ],
        },
        {
          service: "Tax Benefit under 80D",
          amount: "5,000",
          subItems: [
            { service: "Deduction under Section 80D", amount: "" },
          ],
        },
      ];

      const steps = [
        {
          title: "Register the beneficiary details and purchase the product.",
          description: ""
        },
        {
          title: "Receive a Wallet amount for Primary care service with predefined sub limits.",
          description: ""
        },
        {
          title: "Avail benefits under Section 80D",
          description: ""
        },
        {
          title: "Exclusive discounts on the APP: Enjoy savings on pharmacy and wellness store purchases, diagnostic tests, Gym memberships, wellness programs and more. (T&C apply).",
          description: ""
        }
      ];

    return (
        <>
            <Navbar />
            <div
                className={`w-full px-[20px] rounded-md py-[50px] min-h-[450px] h-auto ${themeColors.sectionBg} flex flex-col lg:flex-row items-center justify-evenly gap-5`}
                style={{ backgroundImage: `url(${Gradient})` }}
            >
                <PlanDetails
                    heading="CarePass Silver"
                    description={[
                        { text: "Doctor Consultations (In-clinic & Online): ₹10,000", icon: <FaUserDoctor /> },
                        { text: 'Medicines: ₹6,000', icon: <GiMedicines /> },
                        { text: 'Diagnostics: ₹7,000', icon: <FaClinicMedical /> },
                        { text: "Dental Care: ₹4,200", icon: <FaTooth /> },
                        { text: 'Vision Care: ₹2,800', icon: <IoGlasses /> },
                    ]}
                    pay="₹5,000"
                    values="₹30,000+"
                    price="₹5,000"
                    ageLimit="18-60 years"
                    validity="1 year"
                    themeColors={themeColors}
                    imgSrc={SilverHeart}
                    onBuyNow={handleBuyNow}

                />
            </div>

            <ResponsiveGrid gridItems={silverPlanGrid} heading='CarePass Silver Plan' />
            <PlanComparison 
              features={features}
              heading="Why Choose CarePass Silver?"
              title="CarePass Silver"
            />
            <BenefitsBreakdown
              youPay="5,000"
              benefitsAmount="30,000+"
              title1="Extensive Benefits"
              savings="Savings: ₹25,000+ (83% off)"
              benefits1={breakdownBenefits}
              showFooter={true}
              onBuyNow={handleBuyNow}
            />
            <HealthcareEcosystem />
            <AboutUsOurWellnessApp />
            {/* <CarePassBenefitsSilver /> */}
            <HowItWorks onBuyNow={handleBuyNow} steps={steps} />
            <TrustedPartnersSection />
            {/* <CarePassSilverSteps /> */}
            <ContactUsSection />
            <FooterSection />

        </>
    )
}

export default SilverPlanPage
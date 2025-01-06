import Navbar from "../components/nav-bar";
import { PlanDetails } from "./tax-saver";
import { FaCheckCircle, FaHeartbeat } from "react-icons/fa";
import TrustedPartnersSection from "../components/trusted-partners";
import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import Gradient from '../assets/gradient.png'
import { ROUTES } from "../utils/routes";
import useCartStore from "../store/cart-store";
import { useNavigate } from "react-router-dom";
import platinum_image from '../assets/carepass_platinum.png';
import { platinumPlanGrid, ResponsiveGrid } from "../utils/plan-benifits";
import { BenefitsBreakdown, HealthcareEcosystem, HowItWorks, PlanComparison, AboutUsOurWellnessApp } from "../components/extras";
import { FaClinicMedical, FaTooth } from "react-icons/fa";
import { IoGlasses } from "react-icons/io5";
import { FaUserDoctor, FaShieldHeart } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdOutlineMobileFriendly, MdHealthAndSafety } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { TbHealthRecognition } from "react-icons/tb";


const SuperTopUpPage = () => {

    const themeColors = {
        primary: "text-deepPurple",
        background: "bg-[#FCF9FF]",  // Light background color for the card
        sectionBg: "bg-cover bg-center",
        cardBg: "bg-white",
    };

  const features = [
    { name: 'You Pay', main: '₹15,000 Only', other: 'Higher premiums, less coverage' },
    { name: 'Coverage', main: 'Preventive, primary, critical, top-up', other: 'Barely cover basic needs' },
    { name: 'Extended Financial Protection', main: '₹2.5L+ for major expenses', other: 'Lower SI or higher premiums' },
    { name: 'Peace of Mind', main: 'All-in-one, simplified plan', other: 'Multiple policies, complex management' },
    { name: 'Flexibility & Customization', main: 'Customizable, flexible top-ups', other: 'Limited flexibility, fewer options' },
    { name: 'Cost-Effectiveness', main: 'Affordable, value-packed benefits', other: 'Less value for separate products' }
  ];

  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  const productId = "product4";
  const productName = "CarePass Platinum";
  const price = 15000;

  const breakdownBenefits = [
    {
      service: "Preventive Care",
      amount: "8,000",
      subItems: [
        { service: "Preventive Health Check", amount: "" }
      ],
    },
    {
      service: "Primary Care",
      amount: "15,400",
      subItems: [
        { service: "Doctor Consultation", amount: "12,400" },
        { service: "Doctor-Prescribed Medicines", amount: "6,000" },
        { service: "Doctor-Prescribed Diagnostic", amount: "7,000" },
      ],
    },
    {
      service: "Specialty Care",
      amount: "7,000",
      subItems: [
        { service: "Dental Care", amount: "4,200" },
        { service: "Vision Care", amount: "2,800" },
      ],
    },
    {
      service: "Digital Health",
      amount: "2,000",
      subItems: [
        { service: "App Access", amount: "" },
      ],
    },
  ];

  const breakdownBenefitsTwo = [
    {
      service: "Insurance Coverage",
      amount: "20,50,000 / ₹ 32,50,000",
      subItems: [
        { service: "Critical Illness Coverage", amount: "2,50,000" },
        { service: "Health Insurance", amount: "3,00,000 / ₹ 5,00,000" },
        { service: "Super Top-Up", amount: "15,00,000 / ₹ 25,00,000" },
      ],
    },
    {
      service: "Tax Benefits",
      amount: "15,000",
      subItems: [
        { service: "Section 80D Deduction", amount: "15,000" },
      ],
    }
  ];

  const handleBuyNow = () => {
      addToCart({ productId, productName, price });
      navigate(ROUTES.CART, { relative: 'path' })
  };

  const steps = [
    {
      title: "Register the beneficiary details and purchase the product.",
      description: ""
    },
    {
      title: "Receive a Wallet amount of 15,000 and avail the benefits of CarePass tax saver and Carepass silver plan.",
      description: ""
    },
    {
      title: "Get Critical illness coverage of ₹2,50,000",
      description: ""
    },
    {
      title: "Get Base Insurance coverage and Super top up coverage up to ₹30,00,000",
      description: ""
    },
    {
      title: "Avail benefits under Section 80D",
      description: ""
    },
    {
      title: "Exclusive discounts on the app: Enjoy savings on pharmacy and wellness store purchases, diagnostic tests, gym memberships, wellness programs and more. (T&C apply).",
      description: ""
    }
  ];

  return (
      <>
          <Navbar />
          <div
              className={`w-full  px-[20px] rounded-md   py-[50px] min-h-[450px] h-auto ${themeColors.sectionBg} flex flex-col lg:flex-row items-center justify-evenly gap-5`}
              style={{ backgroundImage: `url(${Gradient})` }}
          >
              <PlanDetails
                  heading="CarePass Platinum"
                  description={[
                    { text: 'Preventive Health Check: ₹8,000', icon: <FaHeartbeat /> },
                    { text: "Doctor Consultation: ₹12,400", icon: <FaUserDoctor /> },
                    { text: "App Access: ₹2,000", icon: <MdOutlineMobileFriendly /> },
                    { text: "Medicines: ₹6,000 ", icon: <GiMedicines /> },
                    { text: 'Diagnostic: ₹7,000', icon: <FaClinicMedical /> },
                    { text: 'Dental Care: ₹4,200', icon: <FaTooth /> },
                    { text: 'Vision Care: ₹2,800', icon: <IoGlasses /> },
                    { text: 'Critical Illness: ₹2,50,000', icon: <FaShieldHeart /> },
                    { text: 'Health Insurance Benefits', icon: <MdHealthAndSafety /> },
                    { text: 'Super Top-Up: ₹15,00,000/ ₹25,00,000', icon: <FaCheckCircle /> },
                    { text: 'Health Insurance: ₹3,00,000/₹5,00,000', icon: <TbHealthRecognition /> },
                    { text: 'Tax Benefits Under 80D: ₹15,000', icon: <RiDiscountPercentFill /> },
                ]}
                  pay="₹15,000"
                  values="₹28,00,000+"
                  price="₹15,000"
                  ageLimit="18-60 years"
                  validity="1 year"
                  themeColors={themeColors}
                  imgSrc={platinum_image}
                  onBuyNow={handleBuyNow}
              />
          </div>

          <ResponsiveGrid gridItems={platinumPlanGrid} heading='CarePass Platinum Plan' />
          <PlanComparison 
            features={features}
            heading="Why Choose CarePass Platinum?"
            title="CarePass Platinum Plan"
          />
          <BenefitsBreakdown
            youPay="15,000"
            benefitsAmount="32,00,000+"
            title1="Medical Services"
            title2="Insurance & Financial Benefits"
            benefits1={breakdownBenefits}
            benefits2={breakdownBenefitsTwo}
            showFooter={true}
            onBuyNow={handleBuyNow}
          />
          <HealthcareEcosystem />
          <AboutUsOurWellnessApp />
          <HowItWorks onBuyNow={handleBuyNow} steps={steps} />
          <TrustedPartnersSection />
          <ContactUsSection />
          <FooterSection />
      </>
  )
}

export default SuperTopUpPage
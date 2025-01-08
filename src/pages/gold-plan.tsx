
import { PlanDetails } from './tax-saver';
import TrustedPartnersSection from '../components/trusted-partners';
import ContactUsSection from '../components/contact-us';
import FooterSection from '../components/footer';
import Gradient from '../assets/gradient.png';
import Navbar from '../components/nav-bar';
import { ROUTES } from '../utils/routes';
import useCartStore from '../store/cart-store';
import { useNavigate } from 'react-router-dom';
import SilverHeart from '../assets/gold-plan.png';
import { goldPlanGrid, ResponsiveGrid } from '../utils/plan-benifits';
import { BenefitsBreakdown, HowItWorks, AboutUsOurWellnessApp, PlanComparison } from '../components/extras';

const themeColors = {
    primary: "text-deepPurple",
    background: "bg-[#FCF9FF]",  // Light background color for the card
    sectionBg: "bg-cover bg-center",
    cardBg: "bg-white",
};

  const steps = [
    {
      title: "Register the beneficiary details and purchase the product",
      description: ""
    },
    {
      title: "Receive a Wallet amount of 15,000 to avail the benefits of CarePass Tax Saver and CarePass Silver plans.",
      description: ""
    },
    {
      title: "Get Critical illness coverage of 2,50,000.",
      description: ""
    },
    {
      title: "Avail benefits under Section 80D.",
      description: ""
    },
    {
        title: "Exclusive discounts on the APP: Enjoy savings on pharmacy and wellness store purchases, diagnostic tests, gym memberships, wellness programs and more. (T&C apply).",
        description: ""
      }
  ];


const GoldPlan = () => {


    const { addToCart } = useCartStore();
    const navigate = useNavigate();


    const productId = "product3";
    const productName = "CarePass Gold";
    const price = 10000;

    const handleBuyNow = () => {
        addToCart({ productId, productName, price });
        navigate(ROUTES.CART, { relative: 'path' })
    };

    const features = [
        { 
          name: 'You Pay', 
          main: 'Just ₹10,000', 
          other: 'Higher premiums, less coverage' 
        },
        { 
          name: 'Coverage', 
          main: 'Comprehensive, preventive, critical illness coverage', 
          other: 'No Similar product in the market' 
        },
        { 
          name: 'Financial Security', 
          main: 'Critical illness, expense control', 
          other: 'Limited to hospitalization/conditions' 
        },
        { 
          name: 'Network Access', 
          main: 'Large network via Wellness App', 
          other: 'Smaller, less integrated' 
        },
        { 
          name: 'Cost-Effectiveness', 
          main: '​​Unmatched, all-inclusive coverage​ ', 
          other: 'Limited or less comprehensive' 
        },
        { 
          name: 'Support', 
          main: 'Omni-channel support', 
          other: 'Limited communication channels' 
        }
      ];

      const breakdownBenefits = [
        {
          service: "Preventive Care",
          amount: "",
          subItems: [
            { service: "Preventive Health Check", amount: "8000" }
          ],
        },
        {
          service: "Primary Care",
          amount: "",
          subItems: [
            { service: "Doctor Consultation", amount: "12,400" },
            { service: "Doctor-Prescribed Medicines", amount: "6,000" },
            { service: "Doctor-Prescribed Diagnostic", amount: "7,000" },
          ],
        },
        {
          service: "Specialty Care",
          amount: "",
          subItems: [
            { service: "Dental Care", amount: "4,200" },
            { service: "Vision Care", amount: "2,800" },
          ],
        },
        {
          service: "Digital Health",
          amount: "",
          subItems: [
            { service: "App Access", amount: "2,000" },
          ],
        },
      ];

      const breakdownBenefitsTwo = [
        {
          service: "Insurance Coverage",
          amount: "",
          subItems: [
            { service: "Critical Illness Insurance", amount: "2,50,000" }
          ],
        },
        {
          service: "Tax Benefits",
          amount: "",
          subItems: [
            { service: "Section 80D Deduction", amount: "15,000" },
          ],
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
                    heading="CarePass Gold"
                    description="Comprehensive coverage: CarePass Tax Saver + CarePass Silver + Critical Illness Insurance"
                    pay="₹10,000"
                    values=" ₹3,00,000+"
                    price="₹10,000"
                    ageLimit="18-60 years"
                    validity="1 year"
                    themeColors={themeColors}
                    imgSrc={SilverHeart}
                    onBuyNow={handleBuyNow}
                />
            </div>

            <ResponsiveGrid gridItems={goldPlanGrid} heading='CarePass Gold Plan' />
            <BenefitsBreakdown
              youPay="10,000"
              benefitsAmount="3,00,000+"
              title1="Medical Services"
              title2="Insurance & Financial Benefits"
              benefits1={breakdownBenefits}
              benefits2={breakdownBenefitsTwo}
              showFooter={true}
              showCoverage={true}
            />
            <PlanComparison 
              features={features}
              heading="Why Choose CarePass Gold?"
              title="Our CarePass Gold Plan"
            />
            {/* <HealthcareEcosystem /> */}
            {/* <WellnessApp /> */}
            <AboutUsOurWellnessApp />
            <TrustedPartnersSection />
            <HowItWorks onBuyNow={handleBuyNow} steps={steps} />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default GoldPlan;



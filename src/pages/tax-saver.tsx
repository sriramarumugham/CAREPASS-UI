import TrustedPartnersSection from "../components/trusted-partners"
import ContactUsSection from "../components/contact-us"
import FooterSection from "../components/footer"
import Navbar from "../components/nav-bar"
import Gradient from '../assets/gradient.png'
import { FC } from "react"
import useCartStore from "../store/cart-store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import './Hero.css';
import HeartPatient from '../assets/family-gold.png'
import { taxSaverGrid, ResponsiveGrid } from "../utils/plan-benifits";
import { BenefitsBreakdown, AboutUsOurWellnessApp, HowItWorks, PlanComparison } from "../components/extras";
import { FaUserDoctor } from "react-icons/fa6";
import { PiSunglassesThin } from "react-icons/pi";
import { TbDental } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { FaDiagnoses } from "react-icons/fa";

const TaxSaverPage = () => {
    const themeColors = {
        primary: "text-deepPurple",
        background: "bg-[#FCF9FF]",  // Light background color for the card
        sectionBg: "bg-cover bg-center",
        cardBg: "bg-white",
    };

    const { addToCart } = useCartStore();
    const navigate = useNavigate();


    const productId = "product1";
    const productName = "CarePass Tax Saver";
    const price = 5000;

    const handleBuyNow = () => {
        addToCart({ productId, productName, price });
        navigate(ROUTES.CART, { relative: 'path' })
    };

    const features = [
      { 
        name: 'Cost', 
        main: 'Access to India"s largest healthcare network', 
        other: 'Higher pricing, limited network' 
      },
      { 
        name: 'Coverage', 
        main: 'Comprehensive health checks + Teleconsultations', 
        other: 'Basic services only' 
      },
      { 
        name: 'Accessibility', 
        main: 'Digital e-wallet with flexible plans', 
        other: 'Physical coupons required' 
      },
      { 
        name: 'Digital Platform', 
        main: 'Full web & App functionality', 
        other: 'Limited digital features' 
      },
      { 
        name: 'Family Benefits', 
        main: 'Extended family coverage', 
        other: 'Individual plans only' 
      },
      { 
        name: 'Value Adds', 
        main: 'Multi-category discounts (tests, pharmacy, AHC)', 
        other: 'Few or no discounts' 
      },
      { 
        name: 'Support', 
        main: '24/7 omni-channel support', 
        other: 'Limited communication channels' 
      }
    ];

    const breakdownBenefits = [
      {
        service: "Annual Health checks",
        amount: "8,000",
        subItems: [
          { service: "Comprehensive screenings", amount: "" },
          { service: "Early disease detection and prevention", amount: "" },
        ],
      },
      {
        service: "Unlimited Tele-consultation",
        amount: "2,400",
        subItems: [
          { service: "Convenient access to medical experts, endlessly!", amount: "" },
        ],
      },
      {
        service: "Application Access",
        amount: "2,000",
        subItems: [
          { service: "Exclusive health and wellness tools", amount: "" },
          { service: "Personalised advice", amount: "" },
        ],
      },
      {
        service: "Tax Benefit under 80D",
        amount: "5,000",
        subItems: [
          { service: "Deduction under Section 80D", amount: "" },
          { service: "Validity: 1 year, renewable", amount: "" },
        ],
      },
      {
        service: "Discounts on Pharmacy",
        amount: "Up to 18%",
        subItems: [
          { service: "Savings on medication and health products, and more", amount: "" },
        ],
      },
    ];
  
    const steps = [
      {
        title: "Purchase our Tax Saver Product",
        description: ""
      },
      {
        title: "Receive ₹5,000 wallet amount for AHC",
        description: ""
      },
      {
        title: "Avail unlimited teleconsultations",
        description: ""
      },
      {
        title: "Claim tax benefits under Section 80D",
        description: ""
      },
      {
        title: "Exclusive discounts on the APP: Enjoy savings on pharmacy and wellness store purchases, diagnostic tests, gym memberships, wellness programs and more. (T&C apply).",
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
                heading="CarePass Tax Saver Plan"
                pay="₹5,000"
                values="₹17,000+"
                description="The Ultimate Health Bundle: Annual Health Checks, Unlimited Tele-Consults & Exclusive Discounts! "
                price="₹5,000"
                ageLimit="18-60 years"
                validity="1 year"
                themeColors={themeColors}
                imgSrc={HeartPatient}
                onBuyNow={handleBuyNow}
                isTaxSaver={true}
                />
            </div>

            <ResponsiveGrid gridItems={taxSaverGrid} heading='CarePass Tax Saver' />
            <BenefitsBreakdown
              youPay="5,000"
              benefitsAmount="17,000+"
              title1="Here's what the plan covers"
              savings="₹12,400 (74% off)"
              benefits1={breakdownBenefits}
              showFooter={true}
              showCoverage={false}
            />
            <PlanComparison 
              features={features}
              heading="Why Choose CarePass Tax Saver?"
              title="CarePass Tax Saver (₹5,000)"
            />
            <AboutUsOurWellnessApp />
            {/* <CarePassBenefitsTaxSaver /> */}
            
            {/* <HealthcareEcosystem /> */}
            {/* <WhyChooseCarePassTaxSaver /> */}
            <TrustedPartnersSection />
            <HowItWorks onBuyNow={handleBuyNow} steps={steps} />
            <ContactUsSection />
            <FooterSection />
        </>
    );
};

export default TaxSaverPage



interface PlanDetailsProps {
    heading: string;
    pay: string;
    values: string;
    description: string | { icon: JSX.Element; text: string }[];
    price: string;
    ageLimit: string;
    validity: string;
    themeColors: {
        background: string;
        cardBg: string;
    };
    imgSrc: string;
    onBuyNow: () => void;
    isTaxSaver: boolean;
    isSilverPlan: boolean
}

export const PlanDetails: FC<PlanDetailsProps> = ({
    heading,
    pay,
    values,
    description,
    price,
    ageLimit,
    validity,
    themeColors,
    imgSrc,
    onBuyNow,
    isTaxSaver,
    isSilverPlan
  }) => {
    const silverPlanIcons = [
      {
        icon: <FaUserDoctor size={24} className="text-deepPurple" />,
        title: "Doctor Consultations (In-clinic & Online)",
        value: "₹10,000",
      },
      {
        icon: <FaDiagnoses size={24} className="text-deepPurple" />,
        title: "Diagnostics covered till",
        value: "₹5,000",
      },
      {
        icon: <GiMedicines size={24} className="text-deepPurple" />,
        title: "Pharmacy Purchases worth up to",
        value: "₹5,000",
      },
      {
        icon: <TbDental size={24} className="text-deepPurple" />,
        title: "Dental Care up to",
        value: "₹3,000",
      },
      {
        icon: <PiSunglassesThin size={24} className="text-deepPurple" />,
        title: "Vision Care Products up to",
        value: "₹2,000",
      },
    ];
    return (
      <div
        className={`flex flex-col mt-8 items-center md:flex-row w-full max-w-[1200px] ${themeColors.background} m-auto shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl`}
      >
        {/* Buy Now button for mobile - moved above the image */}
        <button
          onClick={onBuyNow}
          className="w-full mb-4 block md:hidden max-w-[600px] inline-flex items-center gap-2 rounded-full justify-center px-8 py-3 bg-deepPurple text-white font-semibold text-base shadow-md hover:bg-purple-700 focus:outline-none order-1"
        >
          Buy Now
        </button>
  
        <img
          src={imgSrc}
          className="max-w-[400px] w-full object-cover"
          alt="Plan Illustration"
        />
  
        <div className="p-[40px] flex flex-col items-center w-full">
          {/* Content */}
          <div className="flex flex-col items-center w-full">
            <p className="text-xl font-bold md:text-xl text-center text-deepPurple border border-1 border-[#A689B0] rounded-[25px] px-[10px]">
              {heading}
            </p>
  
            {/* Pay and Receive Benefits */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <div
                className={`${themeColors.cardBg} rounded-lg p-4 border border-1 border-[#EDE4FF] w-full md:w-[250px] flex flex-col justify-between`}
              >
                <p>Pay just</p>
                <p className="font-bold text-2xl md:text-3xl text-deepPurple">
                  {pay}
                </p>
              </div>
  
              <p className="text-xl font-semibold">&</p>
  
              <div
                className={`${themeColors.cardBg} rounded-lg p-4 border border-1 border-deepPurple w-full md:w-[280px] flex flex-col justify-between`}
              >
                <p className="font-bold">Receive benefits</p>
                <p className="font-bold text-2xl">
                  upto{" "}
                  <span className="font-bold text-2xl md:text-3xl text-deepPurple">
                    {values}
                  </span>
                </p>
              </div>
            </div>
  
          {/* Description */}
          <div className="mt-6 w-full">
            {typeof description === "string" ? (
              <p className="text-black-700 text-center">{description}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {description.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-deepPurple">{item.icon}</div>
                    <p className="text-black-700">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

            {/* Healthcare Services Section */}
            {isSilverPlan ?
              <div className="mt-6 w-full">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {silverPlanIcons.map((service, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-lg"
                    >
                      <div className="w-12 h-12 bg-purple-200 border-white rounded-full flex items-center justify-center mb-2">
                        {service.icon}
                      </div>
                      <p className="text-sm mb-1">{service.title}</p>
                      <p className="text-deepPurple font-bold">
                        {service.value}
                        {index === 0 && <span className="text-xs align-top">*</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              :
              null
            }
  
            {/* Price, Age Limit, Validity */}
            <div className="flex flex-col md:flex-row mt-6 gap-4 text-base md:text-lg">
              <p className="font-semibold">
                Price: <span className="text-deepPurple">{price}</span>
              </p>
              <p className="font-semibold">
                Age Limit: <span className="text-deepPurple">{isTaxSaver ? 'No Age Limit' : ageLimit}</span>
              </p>
              <p className="font-semibold">
                Validity: <span className="text-deepPurple">{validity}</span>
              </p>
            </div>
  
            {/* Buy Now button for larger screens */}
            <button
              onClick={onBuyNow}
              className="w-full mt-5 hidden md:block max-w-[600px] inline-flex items-center gap-2 rounded-full justify-center px-8 py-3 bg-deepPurple text-white font-semibold text-base shadow-md hover:bg-purple-700 focus:outline-none"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
};

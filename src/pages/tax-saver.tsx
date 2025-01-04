import TrustedPartnersSection from "../components/trusted-partners"
import ContactUsSection from "../components/contact-us"
import FooterSection from "../components/footer"
import Navbar from "../components/nav-bar"
import Gradient from '../assets/gradient.png'
import { FC } from "react"
import { ReusableTable } from "../components/tables/table"
import { ColumnDef } from "@tanstack/react-table";
import FourDoctor from '../assets/fourDoctors.svg';
import useCartStore from "../store/cart-store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import './Hero.css';
import HeartPatient from '../assets/family-gold.png'
import { FaHeartbeat, FaLaptopMedical } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { taxSaverGrid, ResponsiveGrid } from "../utils/plan-benifits";
import { BenefitsBreakdownTaxSaver, CarePassBenefitsTaxSaver, HealthcareEcosystem, HowItWorksTaxSaver, PlanComparison, WhyChooseCarePassTaxSaver } from "../components/extras"


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
                description={[
                    { text: "Annual Health checks (₹8,000)", icon: <FaHeartbeat /> },
                    { text: "Unlimited Tele-consultation (₹2,400)", icon: <FaLaptopMedical /> },
                    { text: "Application Access (₹2,000)", icon: <MdOutlineMobileFriendly /> },
                    { text: "Tax Benefit under 80D (₹5,000)", icon: <RiDiscountPercentFill /> },
                    { text: "Discounts on Pharmacy (up to 18%)", icon: <GiMedicines /> },
                ]}
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
            <CarePassBenefitsTaxSaver />
            {/* <ReusableTableComponent111122
                title="Why Choose CarePass Tax Saver?"
                tableData={tableData}/> */}
            <PlanComparison 
              features={features}
              heading="Why Choose CarePass Tax Saver?"
              title="CarePass Tax Saver (₹5,000)"
            />
            <HealthcareEcosystem />
            <BenefitsBreakdownTaxSaver onBuyNow={handleBuyNow} />
            <WhyChooseCarePassTaxSaver />
            <HowItWorksTaxSaver onBuyNow={handleBuyNow} />
            <TrustedPartnersSection />
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
    description: string;
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
  }) => {
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
            <p className="text-xl font-bold md:text-3xl text-center text-deepPurple">
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
  
            {/* Description as a simple two-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {description.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-deepPurple">{item.icon}</div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
  
            {/* Price, Age Limit, Validity */}
            <div className="flex flex-col md:flex-row mt-6 gap-4 text-base md:text-lg">
              <p className="font-semibold">
                Price: <span className="text-deepPurple">{price}</span>
              </p>
              {!isTaxSaver && (
                <p className="font-semibold">
                  Age Limit: <span className="text-deepPurple">{ageLimit}</span>
                </p>
              )}
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

interface TableTemplateProps<T> {
  heading: string;
  data: T[];
  columns: ColumnDef<T, any>[];
  sharedValues?: any[];
}

const tableData = {
  headers: ["Feature", "Others", "CarePass Tax Saver (₹5,000)"],
  rows: [
    ["Cost", "Higher pricing, limited network", "Access to India's largest healthcare network"],
    ["Coverage", "Basic services only", "Comprehensive health checks + Teleconsultations"],
    ["Accessibility", "Physical coupons required", "Digital e-wallet with flexible plans"],
    ["Digital Platform", "Limited digital features", "Full web & App functionality"],
    ["Family Benefits", "Individual plans only", "Extended family coverage"],
    ["Value Adds", "Few or no discounts", "Multi-category discounts (tests, pharmacy, AHC)"],
    ["Support", "Limited communication channels", "24/7 omni-channel support"],
  ],
};

export const TableTemplate = <T,>({ heading, data, columns, sharedValues }: TableTemplateProps<T>) => {
    return (
        <div className="pt-[100px]" style={{ background: '#FCF9FF', }}>
            <h2 className="text-2xl font-bold text-deepPurple mb-4 text-center">{heading}</h2>
            <div className=" max-w-[1200px] mx-auto w-full p-[20px] flex  flex-col md:flex-row items-center justify-center md:items-center ">
                {/* Left Section with Image */}
                <div className="max-w-[412px] w-full flex-shrink-0">
                    <img
                        src={FourDoctor}
                        alt="Table Image"
                        className="w-full object-cover rounded-lg"
                    />
                </div>
                {/* Right Section with Table */}
                <div className="flex-1 w-full">
                    <ReusableTable
                        data={data}
                        columns={columns}
                        sharedValues={sharedValues}
                        headerStyles="bg-deepPurple text-white"
                        footerStyles="bg-deepPurple text-white"
                    />
                </div>

            </div>
        </div>
    );
};

import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import Navbar from "../components/nav-bar";
import TrustedPartnersSection from "../components/trusted-partners";
import { PlanDetails, TableTemplate } from "./tax-saver";
import SilverHeart from '../assets/insurance/silver-plan.png';
import { ColumnDef } from "@tanstack/react-table";
import Gradient from '../assets/gradient.png';
import useCartStore from "../store/cart-store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { silverPlanGrid, ResponsiveGrid } from "../utils/plan-benifits";
import { BenefitsBreakdownSilver, CarePassBenefitsSilver, CarePassSilverSteps, HealthcareEcosystem, PlanComparison } from "../components/extras";
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


    const columns: ColumnDef<typeof data[number]>[] = [
        {
            accessorKey: "feature",
            header: "Feature/Aspect",
            cell: (info) => <p className="font-bold">{info.getValue()}</p>,
        },
        {
            accessorKey: "carePass",
            header: "CarePass Silver",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "others",
            header: "Others",
            cell: (info) => info.getValue(),
        },
    ];

    const data = [
        {
            feature: "Cost",
            carePass: "₹5000",
            others: "Pricing is often similar or higher, with less extensive coverage"
        },
        {
            feature: "Coverage",
            carePass: "Up to ₹10,000 for primary care services, including doctor consultations, diagnostics, pharmacy, dental, and vision care",
            others: "Coverage limits tend to be lower, and fewer service categories are typically included"
        },
        {
            feature: "Accessibility",
            carePass: "E-wallet benefits with scan and pay functionality",
            others: "Customers are provided physical coupons, which can be inconvenient to carry, especially in emergency situations"
        },
        {
            feature: "Digital Experience",
            carePass: "Users receive access to a web and mobile wellness app, featuring a digital locker and wallet",
            others: "Digital access may be limited or unavailable"
        },
        {
            feature: "Bundled Services",
            carePass: "Comprehensive bundle: ₹10,000 for consultations, ₹5,000 for diagnostics, ₹5,000 for pharmacy, ₹3,000 for dental, ₹2,000 for vision care",
            others: "Bundled offerings are often less comprehensive and cover fewer categories"
        },
        {
            feature: "Additional Offerings",
            carePass: "Access to a wider range of services and products through our Wellness App",
            others: "Generally limited to basic OPD benefits, with fewer additional services"
        },
        {
            feature: "Customer Support",
            carePass: "24/7 support via chat, phone, and email, ensuring assistance is available even during emergencies",
            others: "Support is typically limited to business hours, with slower response times in urgent situations"
        }
    ];

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

            {/* <TableTemplate
                columns={columns}
                data={data}
                sharedValues={[]}
                heading="Why Choose CarePass Silver?"
            /> */}
            <PlanComparison 
              features={features}
              heading="Why Choose CarePass Silver?"
              title="CarePass Silver"
            />
            <HealthcareEcosystem />
            <CarePassBenefitsSilver />
            <BenefitsBreakdownSilver onBuyNow={handleBuyNow} />
            <TrustedPartnersSection />
            <CarePassSilverSteps />
            <ContactUsSection />
            <FooterSection />

        </>
    )
}

export default SilverPlanPage
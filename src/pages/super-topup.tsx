import Navbar from "../components/nav-bar";
import { PlanDetails, TableTemplate } from "./tax-saver";
import SilverHeart from '../assets/insurance/silber-heart.png'
import TrustedPartnersSection from "../components/trusted-partners";
import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import Gradient from '../assets/gradient.png'
import { ColumnDef } from "@tanstack/react-table";
import { ROUTES } from "../utils/routes";
import useCartStore from "../store/cart-store";
import { useNavigate } from "react-router-dom";
import platinum_image from '../assets/carepass_platinum.png';
import { platinumPlanGrid, ResponsiveGrid } from "../utils/plan-benifits";
import { BenefitsBreakdownPlatinum, HealthcareEcosystem, HowItWorksPlatinum } from "../components/extras";


const SuperTopUpPage = () => {

    const themeColors = {
        primary: "text-deepPurple",
        background: "bg-[#FCF9FF]",  // Light background color for the card
        sectionBg: "bg-cover bg-center",
        cardBg: "bg-white",
    };


    const columns: ColumnDef<typeof any>[] = [
        {
            accessorKey: "feature",
            header: "Feature/Aspect",
            cell: (info) => <p className="font-bold">{info.getValue()}</p>,
        },
        {
            accessorKey: "carePass",
            header: "CarePass Platinum Plan",
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
          feature: "You Pay",
          carePass: "₹15,000",
          others: "Premiums are often higher or offer less comprehensive coverage at a similar price.",
        },
        {
          feature: "Coverage",
          carePass: "Extensive coverage including preventive care, primary care services, critical illness, and super top-up coverage with base coverage.",
          others: "No similar product with this extensive range is available in the market.",
        },
        {
          feature: "Extended Financial Protection",
          carePass: "Up to ₹2.5 lakhs for major medical expenses and critical illnesses.",
          others: "Typically lower sum insured (SI) or higher premiums for additional coverage.",
        },
        {
          feature: "Peace of Mind",
          carePass: "Consolidates multiple benefits into one plan, simplifying management.",
          others: "Requires managing multiple policies, leading to more complexity.",
        },
        {
          feature: "Flexibility & Customization",
          carePass: "Offers flexible top-up limits, wide network access, and customizable service options.",
          others: "Limited flexibility, often fewer customization options.",
        },
        {
          feature: "Cost-Effectiveness",
          carePass: "Combines numerous benefits into one affordable, value-packed plan.",
          others: "Less cost-effective when purchasing separate products.",
        },
      ];
      


    const { addToCart } = useCartStore();
    const navigate = useNavigate();


    const productId = "product4";
    const productName = "CarePass Platinum";
    const price = 15000;

    const handleBuyNow = () => {
        addToCart({ productId, productName, price });
        navigate(ROUTES.CART, { relative: 'path' })
    };


    return (
        <>
            <Navbar />

            <div
                className={`w-full  px-[20px] rounded-md   py-[50px] min-h-[450px] h-auto ${themeColors.sectionBg} flex flex-col lg:flex-row items-center justify-evenly gap-5`}
                style={{ backgroundImage: `url(${Gradient})` }}
            >
                <PlanDetails
                    heading="CarePass Platinum: Comprehensive Health and Financial Protection, Elevated"
                    description="Experience unparalleled protection and care with CarePass Platinum, a cohesive product combining the benefits of Tax Saver, Silver, and Gold, enhanced with a super top-up."
                    pay="₹15,000"
                    values="₹28,00,000"
                    price="₹15,000"
                    ageLimit="18-60 years"
                    validity="1 year"
                    themeColors={themeColors}
                    imgSrc={platinum_image}
                    onBuyNow={handleBuyNow}

                />


            </div>

            <ResponsiveGrid gridItems={platinumPlanGrid} heading='CarePass Platinum Plan' />
            <TableTemplate
                columns={columns}
                data={data}
                sharedValues={[]}
                heading="Why Choose CarePass Platinum?
"
            />
            <HealthcareEcosystem />
            <BenefitsBreakdownPlatinum onBuyNow={handleBuyNow} />
            <TrustedPartnersSection />
            <HowItWorksPlatinum onBuyNow={handleBuyNow} />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default SuperTopUpPage
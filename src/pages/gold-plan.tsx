
import { PlanDetails, TableTemplate } from './tax-saver'
import TrustedPartnersSection from '../components/trusted-partners'
import ContactUsSection from '../components/contact-us'
import FooterSection from '../components/footer'
import Gradient from '../assets/gradient.png'
import Navbar from '../components/nav-bar'
import { ColumnDef } from '@tanstack/react-table'
import { ROUTES } from '../utils/routes'
import useCartStore from '../store/cart-store'
import { useNavigate } from 'react-router-dom'

import SilverHeart from '../assets/gold-plan.png'
import { goldPlanGrid, ResponsiveGrid } from '../utils/plan-benifits'
import { BenefitsBreakdownGold, HealthcareEcosystem, HowItWorksGold, WellnessApp } from '../components/extras'


const themeColors = {
    primary: "text-deepPurple",
    background: "bg-[#FCF9FF]",  // Light background color for the card
    sectionBg: "bg-cover bg-center",
    cardBg: "bg-white",
};


const columns: ColumnDef<any>[] = [
    {
        accessorKey: "feature",
        header: "Feature / Aspect",
        cell: (info) => <p className="font-bold">{info.getValue()}</p>,
    },
    {
        accessorKey: "carePass",
        header: "Our CarePass Gold Plan",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "others",
        header: "Similar Products in the Market",
        cell: (info) => info.getValue(),
    },
];


const data = [
    {
      feature: "You Pay",
      carePass: "₹10,000",
      others: "Premiums are usually higher or provide less comprehensive coverage for a similar price",
    },
    {
      feature: "Coverage",
      carePass: "Comprehensive coverage including preventive care, primary care services, and critical illness protection",
      others: "No comparable product offering this level of coverage",
    },
    {
      feature: "Financial Security",
      carePass: "Includes critical illness coverage, reducing the financial burden of unexpected medical costs and allowing users to manage health expenses without added stress",
      others: "Financial support is often limited to hospitalization or specific conditions",
    },
    {
      feature: "Network Access",
      carePass: "Access to a large network of doctors, diagnostic centers, hospitals, and clinics via the Wellness App",
      others: "Network access may be smaller or less integrated",
    },
    {
      feature: "Cost-Effectiveness",
      carePass: "Combines multiple benefits into one cost-effective plan, offering excellent value",
      others: "Typically focuses on basic OPD benefits with fewer additional services",
    },
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


    return (
        <>
            <Navbar />

            <div
                className={`w-full  px-[20px] rounded-md   py-[50px] min-h-[450px] h-auto ${themeColors.sectionBg} flex flex-col lg:flex-row items-center justify-evenly gap-5`}
                style={{ backgroundImage: `url(${Gradient})` }}
            >


                <PlanDetails
                    heading="CarePass Gold"
                    description="Experience unmatched peace of mind with CarePass Gold, the ultimate healthcare solution for you and your loved ones. This premium product seamlessly integrates the benefits of Tax Saver and Silver, with an added layer of critical illness coverage."
                    pay="₹10000"
                    values=" ₹3,00,000"
                    price="₹10000"
                    ageLimit="18-60 years"
                    validity="1 year"
                    themeColors={themeColors}
                    imgSrc={SilverHeart}
                    onBuyNow={handleBuyNow}

                />
            </div>

            <ResponsiveGrid gridItems={goldPlanGrid} heading='CarePass Gold Plan' />

            <TableTemplate
                columns={columns}
                data={data}
                sharedValues={[]}
                heading="Why Choose CarePass Gold?"
            />
            <HealthcareEcosystem />
            <WellnessApp />
            <TrustedPartnersSection />
            <BenefitsBreakdownGold onBuyNow={handleBuyNow} />
            <HowItWorksGold onBuyNow={handleBuyNow} />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default GoldPlan;



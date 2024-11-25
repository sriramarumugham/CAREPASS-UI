import ContactUsSection from "../components/contact-us"
import FooterSection from "../components/footer"
import Navbar from "../components/nav-bar"
import TrustedPartnersSection from "../components/trusted-partners"
import { PlanDetails, TableTemplate } from "./tax-saver"
import SilverHeart from '../assets/insurance/silber-heart.png'
import { ColumnDef } from "@tanstack/react-table"

import Gradient from '../assets/gradient.png'
import useCartStore from "../store/cart-store"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../utils/routes"
import { goldPlanGrid, ResponsiveGrid } from "../utils/plan-benifits"

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
        { feature: "Cost", carePass: "₹5000", others: "Pricing is often similar or higher, with less extensive coverage" },
        { feature: "Coverage", carePass: "Up to ₹10,000 for primary care services (doctor consultations, diagnostics, pharmacy, dental, vision care)", others: "Coverage limits tend to be lower, and fewer service categories are typically included" },
        { feature: "Accessibility", carePass: "E-wallet benefits with scan and pay functionality", others: "Customers are provided physical coupons, which can be inconvenient to carry, especially in emergency situations" },
        { feature: "Digital Experience", carePass: "Access to a web and mobile wellness app, featuring a digital locker and wallet", others: "Digital access may be limited or unavailable" },
        { feature: "Bundled Services", carePass: "₹10,000 for consultations, ₹5,000 for diagnostics, ₹5,000 for pharmacy, ₹3,000 for dental, ₹2,000 for vision care", others: "Bundled offerings are often less comprehensive and cover fewer categories" },
        { feature: "Additional Offerings", carePass: "Access to a wider range of services and products through our Wellness App", others: "Generally limited to basic OPD benefits, with fewer additional services" },
        { feature: "Customer Support", carePass: "24/7 support via chat, phone, and email, ensuring assistance is available even during emergencies", others: "Support is typically limited to business hours, with slower response times in urgent situations" },
    ];

    return (
        <>
            <Navbar />

            <div
                className={`w-full  px-[20px] rounded-md   py-[50px] min-h-[450px] h-auto ${themeColors.sectionBg} flex flex-col lg:flex-row items-center justify-evenly gap-5`}
                style={{ backgroundImage: `url(${Gradient})` }}
            >


                <PlanDetails
                    heading="CarePass Silver: Comprehensive Family Care, Simplified"
                    description="Unlock ₹30,000+ in Benefits for Just ₹5,000! Protect Your Loved Ones with Our Primary Care Services and Flexible Digital Wallet"
                    pay="₹5000"
                    values="₹30,000+"
                    price="₹5000"
                    ageLimit="18-60 years"
                    validity="1 year"
                    themeColors={themeColors}
                    imgSrc={SilverHeart}
                    onBuyNow={handleBuyNow}

                />
            </div>


            <ResponsiveGrid gridItems={goldPlanGrid} heading='CarePass Silver Plan' />


            <TableTemplate
                columns={columns}
                data={data}
                sharedValues={[]}
                heading="Why Choose CarePass Silver?"
            />
            <TrustedPartnersSection />
            <ContactUsSection />
            <FooterSection />

        </>
    )
}

export default SilverPlanPage
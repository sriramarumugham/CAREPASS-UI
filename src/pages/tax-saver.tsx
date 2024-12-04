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
import { taxSaverGrid, ResponsiveGrid } from "../utils/plan-benifits"
import { BenefitsBreakdownTaxSaver, BreakdownofBenefitsTaxSaver, CarePassBenefitsTaxSaver, HealthcareEcosystem, HowItWorksTaxSaver, WhyChooseCarePassTaxSaver } from "../components/extras"


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

    return (
        <>
            <Navbar />
            <div
                className={`w-full  px-[20px] rounded-md   py-[50px] min-h-[450px] h-auto ${themeColors.sectionBg} flex flex-col lg:flex-row items-center justify-evenly gap-5`}
                style={{ backgroundImage: `url(${Gradient})` }}
            >

                <PlanDetails
                    heading="CarePass Tax Saver Plan: Healthier Life, Lower Taxes"
                    pay="₹5000"
                    values="₹17,400"
                    description="Streamline Your Health Plan Management with Flexible, Digitalized Solutions for a Happy, Healthy, and Secured Lifestyle"
                    price="₹5000"
                    ageLimit="18-60 years"
                    validity="1 year"
                    themeColors={themeColors}
                    imgSrc={HeartPatient}
                    onBuyNow={handleBuyNow}

                />
            </div>

            <ResponsiveGrid gridItems={taxSaverGrid} heading='CarePass Tax Saver' />
            <CarePassBenefitsTaxSaver />
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
    onBuyNow
}) => {
    return (
        <div
            className={`flex flex-col mt-[20px] items-center md:flex-row w-full max-w-[1200px] ${themeColors.background} m-auto`}
        >
            <img
                src={imgSrc}
                className="max-w-[400px] w-full object-cover "
                alt="Plan Illustration"
            />
            <div className="p-[40px]">
                {/* Content */}
                <div className="flex flex-col items-center">
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
                            className={`${themeColors.cardBg} rounded-lg p-4 border border-1 border-deepPurple w-full md:w-[250px] flex flex-col justify-between`}
                        >
                            <p className="font-bold">Receive benefits</p>
                            <p className="font-bold text-2xl">
                                valued{" "}
                                <span className="font-bold text-2xl md:text-3xl text-deepPurple">
                                    {values}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-center text-sm">{description}</p>

                    {/* Price, Age Limit, Validity */}
                    <div className="flex flex-col md:flex-row mt-6 gap-4 text-base md:text-lg">
                        <p className="font-semibold">
                            Price: <span className="text-deepPurple">{price}</span>
                        </p>
                        <p className="font-semibold">
                            Age Limit: <span className="text-deepPurple">{ageLimit}</span>
                        </p>
                        <p className="font-semibold">
                            Validity: <span className="text-deepPurple">{validity}</span>
                        </p>
                    </div>

                    <button
                        onClick={onBuyNow}
                        className="w-full mt-5 max-w-[600px] inline-flex items-center gap-2 rounded-full justify-center px-8 py-3 bg-deepPurple text-white font-semibold text-base shadow-md hover:bg-purple-700 focus:outline-none"
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
    sharedValues?: any[]; // Optional shared values
}

export const TableTemplate = <T,>({ heading, data, columns, sharedValues }: TableTemplateProps<T>) => {
    return (
        <div className="pt-[100px]"
            style={{
                background: '#FCF9FF',
            }}
        >
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

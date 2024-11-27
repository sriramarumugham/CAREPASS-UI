import HeartGrafti from '../assets/hert-grafti.svg';
import AboutUsThree from '../assets/about-us-3.png';
import { FaIdCard } from "react-icons/fa6";
import TopRightSvg from '../assets/top-right.svg';

export const Section2 = () => {
    return (
        <div
            className=" py-12 md:py-16  w-full max-w-[1200px]   mx-auto  flex items-center justify-center"
            id="section-2"
        >
            <div className="flex flex-col md:flex-row justify-start  gap-8 px-[20px] ">
                {/* Image Section */}
                <div className="md:w-1/3 flex justify-center w-fit">
                    <img
                        src="https://via.placeholder.com/400" // Replace with your image URL
                        alt="Health Protection"
                        className="w-fit max-w-[300px] object-cover"
                    />
                </div>

                <div className="flex flex-col md:w-1/2 gap-4">
                    {/* First Heading and Description */}
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Complete Health Protection
                    </p>
                    <p className="text-base md:text-lg leading-7">
                        Whether it's a regular health check-up or managing a critical illness, CarePass simplifies and enhances your health journey.
                    </p>

                    {/* Second Heading and Description */}
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Preventive & Primary Care
                    </p>
                    <p className="text-base md:text-lg leading-7">
                        Take control of your wellness with extensive preventive measures and primary care services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const AboutSection4 = () => {
    return (
        <div className=" py-12 md:py-16 flex items-center justify-center px-[20px]">
            <div className="flex flex-col md:flex-row w-full max-w-[1200px] gap-8">
                {/* Text Section */}
                <div className="flex justify-center flex-col md:w-1/2 gap-4">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                    Join Us Today
                    </p>

                    <p className="text-base md:text-lg leading-7">
                    Take control of your health with a plan that’s built to last.
                    </p>

                    <p className="text-base md:text-md leading-7">
                    Explore our plans from our products section and start your journey towards a healthier future.
                    </p>

                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={AboutUsThree}
                        alt="Health & Wellness"
                        className="w-full max-w-[300px]"
                    />
                </div>
            </div>
        </div>
    );
};

export const AboutSection3 = () => {
    return (
        <div
            className="px-6 py-10 flex items-center justify-center bg-white"
            id="section-4"
        style={{
            background: '#FCF9FF',
        }}
        >
            <div className="flex flex-col md:flex-row max-w-[1200px] gap-8">
                <div className="md:w-1/3 flex justify-center">
                    <img
                        src={HeartGrafti}
                        alt="Care Across India"
                        className="w-full object-fit max-w-[300px]"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col md:w-1/2 gap-4">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Why Choose CarePass?
                    </p>

                    <p className="text-base md:text-md leading-7">
                        <span className="text-deepPurple">Comprehensive Coverage: </span> From preventive care to critical illness protection, we've got you covered.
                    </p>

                    <p className="text-base md:text-md leading-7">
                        <span className="text-deepPurple">Financial Peace of Mind: </span> Unmatched coverage at affordable premiums with tax-saving benefits.
                    </p>

                    <p className="text-base md:text-md leading-7">
                        <span className="text-deepPurple">User-Friendly Experience: </span> Our Wellness Corner App simplifies health management with digital wallets, health records, and easy access to medical services.
                    </p>

                    <p className="text-base md:text-md leading-7">
                        <span className="text-deepPurple">24/7 Support: </span> Expert support whenever you need it, ensuring you're never alone in your health journey.
                    </p>

                    <p className="text-base md:text-md leading-7 mt-4">
                    At CarePass, we’re not just offering health insurance; we’re providing a complete healthcare solution that's tailored to your unique needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const Section6 = () => {
    return (
        <div
            className=" py-10 md:py-16 flex items-center justify-center bg-white"
            id="section-6"
        >
            <div className="flex flex-col md:flex-row  item-start w-full max-w-[1200px] gap-8 px-[20px]">
                {/* Text Section */}
                <div className="flex flex-col md:w-2/3 gap-4">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Why Choose CarePass?
                    </p>

                    {/* Bullet points list */}
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-sm md:text-base">
                        <li>Complete Family Coverage: Plans for your spouse, children, and parents.</li>
                        <li>Personalized Health Plans: Tailored to your individual health needs.</li>
                        <li>Lowest Premiums: Exceptional value with Gold and Platinum plans at the most competitive rates.</li>
                        <li>Simple Health Management: Manage appointments, wallets, and health records through one app.</li>
                        <li>Exclusive Savings: Unlock tax benefits under Section 80D and secure financial protection.</li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="md:w-1/3 flex justify-center">
                    <img
                        src="https://via.placeholder.com/400" // Replace with your image URL
                        alt="Why Choose CarePass"
                        className="w-full max-w-[300px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export const Section7 = () => {
    return (
        <div
            className="py-12 md:py-16 w-full  mx-auto w-full flex items-center justify-center"
            id="section-7"
            style={{
                background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
            }}
        >
            <div className="flex flex-col md:flex-row justify-center gap-8 px-[20px] w-full max-w-[1200px]">
                {/* Image Section */}
                <div className="md:w-1/3 flex justify-center w-full md:w-fit">
                    <img
                        src="https://via.placeholder.com/400" // Replace with your image URL
                        alt="Wellness App"
                        className="w-full md:w-[300px] object-cover rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col md:w-2/3 gap-6">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Wellness App Benefits
                    </p>

                    <p className="text-base md:text-lg leading-7">
                        Enjoy a variety of health and wellness features with our app, available anytime, anywhere.
                    </p>

                    {/* Bullet points list */}
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-sm md:text-base">
                        <li>24/7 access to mental health professionals</li>
                        <li>AI-powered personalized diet plans</li>
                        <li>Access to digital health records and assessments</li>
                        <li>In-person & online doctor consultations</li>
                        <li>Discounted medicines and gym memberships</li>
                        <li>Live expert support available 24/7</li>
                    </ul>

                    <p className="mt-6 text-sm underline text-deepPurple font-semibold">
                        Download the Wellness Corner app to get started.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const Section8 = () => {
    return (
        <div
            className="px-6 py-10 flex items-center justify-center bg-white"
            id="section-8"
        // style={{
        //     background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
        // }}
        >
            <div className="flex flex-col md:flex-row max-w-[1200px] gap-8">
                {/* Text and Button Section */}
                <div className="flex flex-col md:w-1/2 gap-4">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Ready to Take Control of Your Health?
                    </p>

                    <p className="text-base md:text-lg leading-7">
                        Don’t settle for less—choose CarePass and experience comprehensive healthcare that covers you and your family in every situation. From preventive care to critical illness coverage, CarePass has it all, ensuring you stay ahead while saving big.
                    </p>

                    <p className="mt-6 text-xl text-deepPurple font-semibold">
                        Take the first step towards smarter health management today!
                    </p>

                    <button
                        className="gap-2 px-3 py-2  w-fit  border border-1 border-deepPurple rounded-3xl  mt-[20px] mx-auto md:m-0 flex items-center">
                        <img src={TopRightSvg} />
                        <p className='text-deepPurple text-sm '>  Explore Our Products Now!</p>
                    </button>


                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://via.placeholder.com/400" // Replace with the image you want
                        alt="Health Management"
                        className="w-full max-w-[300px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

type Product = {
    name: string;
    description: string[];
    link: string; // Link for redirection
};

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="border border-[#A689B0] px-5 py-6 rounded-xl w-full    md:max-w-[300px]  h-fit  md:min-h-[350px] flex flex-col justify-between">
            {/* Product Title */}
            <h3 className="text-deepPurple text-lg font-medium">{product.name}</h3>

            {/* Product Description */}
            <ul className="flex flex-col gap-3 mt-4">
                {product.description.map((line, idx) => (
                    <li key={idx} className="text-sm md:text-base leading-6">
                        {line}
                    </li>
                ))}
            </ul>

            {/* Call to Action */}
            <a
                href={product.link}
                className="text-deepPurple underline font-medium text-sm md:text-base mt-6"
            >
                Know more
            </a>
        </div>
    );
};


const products: Product[] = [
    {
        name: "Tax Saver",
        description: [
            "Preventive health check-ups and consultations with ₹5,000 digital wallet.",
            "Unlock benefits worth over ₹17,000+.",
        ],
        link: "/products/tax-saver",
    },
    {
        name: "Silver Plan",
        description: [
            "Comprehensive primary care services with a ₹10,000 digital wallet for doctor consultations, diagnostics, pharmacy, and more.",
            "Unlock benefits worth over ₹30,000+.",
        ],
        link: "/products/silver-plan",
    },
    {
        name: "Gold Plan",
        description: [
            "Includes critical illness coverage of ₹25,00,000 and a ₹15,000 digital wallet for preventive health and primary care services.",
            "Unlock benefits worth over ₹25,00,000+.",
        ],
        link: "/products/gold-plan",
    },
    {
        name: "Platinum Plan",
        description: [
            "The ultimate protection plan with ₹25,00,000 critical illness coverage, ₹15,000 digital wallet, base health coverage, and super top-up coverage of ₹25,00,000.",
            "Unlock benefits worth over ₹55,00,000+.",
        ],
        link: "/products/platinum-plan",
    },
];

export const Section5 = () => {
    return (
        <div
            className="px-6 py-10 flex items-center justify-center"
            style={{
                background: "linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)",
            }}
        >
            <div className="flex flex-col max-w-[1200px] gap-8">
                {/* Header */}
                <div className="text-center">

                    <p className="font-bold text-xl md:text-4xl mx-auto  "> Explore Our Products</p>

                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import Navbar from "../components/nav-bar";
import Accordion from "../components/accordion";

const FAQPage = () => {
    const Faqs = ({ heading, content }) => {
        return (
            <div className="pt-[30px] pb-[50px] flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-800">{heading}</h1>
                <Accordion items={content} />
            </div>
        );
    };

    const memberShipfaqs = [
        {
            title: 'How do I activate my CarePass membership?',
            content: (
                <div>
                    To activate your CarePass membership, follow these steps:
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                        <li>Visit <a href="https://carepass.in" className="text-blue-600 hover:underline">carepass.in</a></li>
                        <li>Choose a plan</li>
                        <li>Read and accept the terms and conditions</li>
                        <li>Fill in the required details</li>
                        <li>Make the payment</li>
                        <li>Your account will be activated within 24 hours</li>
                    </ol>
                </div>
            ),
        },
        { title: 'What discounts do I get on medicines with CarePass?', content: 'CarePass members receive up to 18% discount on medicines.' },
        { title: 'What is the refund policy for CarePass?', content: 'TBD' },
    ];

    const taxSaverfaqs = [
        {
            title: 'Why choose CarePass Tax Saver?',
            content: (
                <div>
                    CarePass Tax Saver offers:
                    <ul className="list-decimal list-inside mt-2 space-y-1">
                        <li>Exclusive rates for preventive health check plans at premium hospitals</li>
                        <li>Unlimited teleconsultation for self and dependents</li>
                        <li>Tax savings benefits</li>
                    </ul>
                </div>
            ),
        },
        { title: 'Will I get an Income Tax rebate for CarePass Tax Saver Plan?', content: 'Yes, CarePass Tax Saver Plan is eligible for Income Tax rebate.' },
        { title: 'Can I choose my own center to book health checks?', content: 'Yes, you can choose your preferred center.' },
        { title: 'Who is covered under CarePass Tax Saver Plan?', content: 'Self and dependents are covered by the CarePass Tax Saver Plan.' },
    ];

    const silverPlanfaqs = [
        {
            title: 'Why choose CarePass Silver Plan?',
            content: (
                <div>
                    CarePass Silver Plan offers:
                    <ul className="list-decimal list-inside mt-2 space-y-1">
                        <li>Cashless OPD care benefits at minimal cost</li>
                        <li>Digital health and wellness benefits</li>
                    </ul>
                </div>
            ),
        },
        { title: 'Will I get an Income Tax rebate for CarePass Silver Plan?', content: 'Yes, CarePass Silver Plan is eligible for Income Tax rebate.' },
        { title: 'What is the difference between CarePass Tax Saver and CarePass Silver Plan?', content: 'CarePass Tax Saver focuses on preventive health checks, while CarePass Silver Plan focuses on primary care benefits.' },
        { title: 'Who is covered under CarePass Silver Plan?', content: 'Self, spouse, and up to 2 dependents are covered.' },
    ];

    const goldPlanfaqs = [
        {
            title: 'Why choose CarePass Gold Plan?',
            content: (
                <div>
                    The CarePass Gold Plan offers comprehensive health and financial protection, providing benefits worth ₹3,00,000+ for just ₹10,000. This plan includes:
                    <ul className="list-decimal list-inside mt-2 space-y-1">
                        <li>Preventive care</li>
                        <li>Primary care services</li>
                        <li>Critical illness coverage</li>
                        <li>Financial benefits</li>
                    </ul>
                    Making it an excellent value proposition for individuals and families seeking comprehensive healthcare coverage.
                </div>
            ),
        },
        { 
            title: 'Will I get an Income Tax rebate for CarePass Gold Plan?', 
            content: 'Yes, you are eligible for an Income Tax rebate under Section 80D of the Income Tax Act, 1961, for the premium paid towards the CarePass Gold Plan, up to ₹10,000.' 
        },
        { 
            title: 'What is the difference between CarePass Silver and CarePass Gold Plan?', 
            content: 'The CarePass Silver Plan is designed to provide tax benefits under Section 80D, with benefits worth ₹30,000+ for just ₹5,000. In contrast, the CarePass Gold Plan offers a more comprehensive range of benefits, including preventive care, primary care services, critical illness coverage, and financial benefits, with benefits worth ₹3,00,000+ for ₹10,000.' 
        },
        { 
            title: 'Who is covered under CarePass Gold Plan?', 
            content: 'The CarePass Gold Plan covers the policyholder, their spouse, and up to two dependent children. The plan is available for individuals aged 18-60 years.' 
        },
    ];

    const platinumPlanfaqs = [
        {
            title: 'Why choose CarePass Platinum Plan?',
            content: (
                <div>
                    The CarePass Platinum Plan offers comprehensive health and financial protection, providing benefits worth ₹28,00,000+ for just ₹15,000. This plan includes:
                    <ul className="list-decimal list-inside mt-2 space-y-1">
                        <li>Extensive coverage, including preventive care</li>
                        <li>Primary care services</li>
                        <li>Critical illness coverage</li>
                        <li>Super top-up coverage</li>
                    </ul>
                    Making it an excellent value proposition for individuals and families seeking comprehensive healthcare coverage.
                </div>
            ),
        },
        { 
            title: 'Will I get an Income Tax rebate for CarePass Platinum Plan?', 
            content: 'Yes, you are eligible for an Income Tax rebate under Section 80D of the Income Tax Act, 1961, for the premium paid towards the CarePass Platinum Plan, up to ₹15,000.' 
        },
        { 
            title: 'What is the difference between CarePass Gold and CarePass Platinum Plan?', 
            content: 'The main difference between the two plans is the scope of benefits and coverage. The CarePass Gold Plan offers benefits worth ₹3,00,000+ for ₹10,000, while the CarePass Platinum Plan offers more comprehensive benefits worth ₹28,00,000+ for ₹15,000, including higher critical illness coverage, super top-up coverage, and health insurance benefits.' 
        },
        { 
            title: 'Who is covered under CarePass Platinum Plan?', 
            content: 'The CarePass Platinum Plan covers the policyholder, their spouse, and up to two dependent children. The plan is available for individuals aged 18-60 years.' 
        },
    ];

    const walletfaqs = [
        {
            title: 'Where can I use my wallet amount?',
            content: (
                <div>
                    Your wallet amount can be used for:
                    <ul className="list-decimal list-inside mt-2 space-y-1">
                        <li>Doctor consultations (up to ₹10,000)</li>
                        <li>Pharmacy purchases (up to ₹5,000)</li>
                        <li>Diagnostic tests (up to ₹5,000)</li>
                        <li>Dental care (up to ₹3,000)</li>
                        <li>Vision care (up to ₹2,000)</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <>
            <Navbar />
            <Faqs heading="CarePass Membership FAQs" content={memberShipfaqs} />
            <Faqs heading="CarePass Tax Saver Product" content={taxSaverfaqs} />
            <Faqs heading="CarePass Silver Plan" content={silverPlanfaqs} />
            <Faqs heading="CarePass Gold Plan" content={goldPlanfaqs} />
            <Faqs heading="CarePass Platinum Plan" content={platinumPlanfaqs} />
            <Faqs heading="Wallet Usage" content={walletfaqs} />
            <ContactUsSection />
            <FooterSection />
        </>
    );
};

export default FAQPage;

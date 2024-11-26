import { useState } from "react"
import FooterSection from "../components/footer"
import Navbar from "../components/nav-bar"
import toast from "react-hot-toast"
import ContactUsSection from "../components/contact-us"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';



const ContactUs = () => {

    const contacts = [
        {
            title: "Customer Support",
            email: "support@carepass.in",
            phone: "+91-XXXXXXXXXX",
            availableHours: "24/7",
            description: ' For immediate assistance, reach out to our dedicated support team'
        },
        {
            title: "Corporate Inquiries", email: "corporate@carepass.in", description: ' For partnerships, collaborations, or corporate services, please contact'
        },
        { title: "Feedback & Suggestions", email: "feedback@carepass.in", description: 'We appreciate your insights to help us improve our service' },
    ];

    const visitItems = [
        {
            title: "CarePass Headquarters",
            address: "Your Office Address",
            city: "City",
            state: "State",
            zipCode: "Zip Code",
            country: "Country",
            description: "If you prefer to speak with us in person or want to visit our office, you can find us here.",
        },
    ];


    const socialMediaLinks = [
        {
            title: "Facebook",
            url: "https://facebook.com/carepass",
            icon: FaFacebook,
        },
        {
            title: "Twitter",
            url: "https://twitter.com/carepass",
            icon: FaTwitter,
        },
        {
            title: "Instagram",
            url: "https://instagram.com/carepass",
            icon: FaInstagram,
        },
        {
            title: "LinkedIn",
            url: "https://linkedin.com/company/carepass",
            icon: FaLinkedin,
        },
    ];


    return (
        <>
            <Navbar />

            <div
                className="w-100%"
                style={{
                    background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
                }}>


                <GetInTouch
                    heading="Get in touch"
                    description="At CarePass, we value your feedback and are here to assist you with any inquiries you may have. Whether you have questions about our products, need support, or want to provide feedback, we’re just a message away!"
                    contacts={contacts}
                />
            </div>

            <VisitSection
                heading="Visit Us"
                description="If you prefer to speak with us in person or want to visit our office, you can find us at:"
                visitItems={visitItems}
            />

            <div
                className="w-100%"
                style={{
                    background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
                }}>

                <FollowUsSection
                    heading="Follow Us"
                    description="Stay connected with CarePass! Follow us on our social media platforms for the latest updates, tips, and health information:"
                    socialMediaLinks={socialMediaLinks}
                />
            </div>

            <ContactForm />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default ContactUs


function ContactForm() {
    const defaultValues = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    }
    const [formData, setFormData] = useState(defaultValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        toast.success('Thank you for reaching out to CarePass. We look forward to assisting you!');
        setFormData(defaultValues)
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-lg md:text-3xl font-semibold tracking-tight text-gray-900 ">Have a question ?</h2>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full bg-deepPurple hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-sm sm:px-8"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}


interface ContactItem {
    title: string;
    email: string;
    phone?: string;
    description?: string;
    availableHours?: string;
}

interface GetInTouchProps {
    heading: string;
    description: string;
    contacts: ContactItem[];
}

const GetInTouch: React.FC<GetInTouchProps> = ({ heading, description, contacts }) => {
    return (
        <div className="px-[20px]  mb-5 md:mb-10 rounded-lg flex flex-col md:flex-row justify-between max-w-[1200px] m-auto pt-20">
            <div className="mb-8 max-w-[100%] md:max-w-[30%]">
                <h2 className="text-lg md:text-3xl font-bold text-gray-900">{heading}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contacts.map((contact, index) => (
                    <div key={index} className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm">
                        <h3 className="text-md font-semibold text-gray-900">{contact.title}</h3>
                        {contact.description && <p className="text-gray-600 mt-2">{contact.description}</p>}
                        <p className="text-deepPurple mt-2 hover:underline cursor-pointer">
                            {contact.email}
                        </p>
                        {contact.phone && <p className="text-gray-600 mt-1">{contact.phone}</p>}
                        {contact.availableHours && (
                            <p className="text-gray-600 mt-1">{`Available Hours: ${contact.availableHours}`}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}



interface VisitItem {
    title: string;
    address: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    description?: string;
}

interface VisitSectionProps {
    heading: string;
    description: string;
    visitItems: VisitItem[];
}

const VisitSection: React.FC<VisitSectionProps> = ({ heading, description, visitItems }) => {
    return (
        <div className="px-[20px] mb-5 md:mb-10  rounded-lg flex flex-col md:flex-row justify-between max-w-[1200px] m-auto pt-10">
            <div className="mb-8 max-w-[100%] md:max-w-[30%]">

                <h2 className="text-lg md:text-3xl font-bold text-gray-900">{heading}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visitItems.map((item, index) => (
                    <div key={index} className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm">
                        <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                        {item?.description && <p className="text-gray-600 mt-2">{item.description}</p>}
                        <p className="text-gray-600 mt-2">{item.address}</p>
                        {item.city && item.state && item.zipCode && (
                            <p className="text-gray-600 mt-1">
                                {item.city}, {item.state}, {item.zipCode}
                            </p>
                        )}
                        {item.country && <p className="text-gray-600 mt-1">{item.country}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};



interface SocialMediaItem {
    title: string;
    url: string;
    icon: any;
}

interface FollowUsSectionProps {
    heading: string;
    description: string;
    socialMediaLinks: SocialMediaItem[];
}

const FollowUsSection: React.FC<FollowUsSectionProps> = ({ heading, description, socialMediaLinks }) => {
    return (
        <div className="px-[20px] rounded-lg flex flex-col md:flex-row justify-between max-w-[1200px] m-auto pt-20">
            <div className="mb-8 max-w-[100%] md:max-w-[30%]">
                <h2 className="text-lg md:text-3xl font-bold text-gray-900">{heading}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {socialMediaLinks.map((social, index) => (
                    <div key={index} className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm flex flex-col justify-between">
                        <h3 className="text-md font-semibold text-gray-900">{social.title}</h3>
                        <div className="flex items-center gap-3 mt-3">
                            {/* <img src={social.icon} alt={social.title} className="w-6 h-6" /> */}
                            <p className="text-deepPurple mt-2 hover:underline cursor-pointer">
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    {social.url}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};




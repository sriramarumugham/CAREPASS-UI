import { useState } from "react"
import FooterSection from "../components/footer"
import Navbar from "../components/nav-bar"
import toast from "react-hot-toast"
import ContactUsSection from "../components/contact-us"
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {

    const contacts = [
        {
            title: "Customer Support",
            email: "support@carepass.in",
            phone: "+91-XXXXXXXXXX",
            availableHours: "24/7",
            description: 'For immediate assistance, reach out to our dedicated support team'
        }
    ];

    const socialMediaLinks = [
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

            {/* <ContactForm />
            <BusinessContactForm /> */}
            <CombinedForms />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default ContactUs


const ContactForm = () => {
    const defaultValues = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    };

    const [formData, setFormData] = useState(defaultValues);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phoneNumber: false,
        message: false,
    });

    // Validation rules
    const validationRules = {
        name: (value: string) => {
            if (!value.trim()) return 'Name is required';
            if (value.trim().length < 2) return 'Name must be at least 2 characters';
            if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name should only contain letters and spaces';
            if (value.trim().length > 50) return 'Name must be less than 50 characters';
            return '';
        },
        email: (value: string) => {
            if (!value) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
            if (value.length > 100) return 'Email must be less than 100 characters';
            return '';
        },
        phoneNumber: (value: string) => {
            if (!value) return 'Phone number is required';
            // Allow formats: (123) 456-7890, 123-456-7890, or 1234567890
            const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
            if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
            return '';
        },
        message: (value: string) => {
            if (!value.trim()) return 'Message is required';
            if (value.trim().length < 10) return 'Message must be at least 10 characters';
            if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
            return '';
        },
    };

    // Validate single field
    const validateField = (name: string, value: string) => {
        const validationRule = validationRules[name as keyof typeof validationRules];
        return validationRule ? validationRule(value) : '';
    };

    // Validate all fields
    const validateForm = () => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            phoneNumber: validateField('phoneNumber', formData.phoneNumber),
            message: validateField('message', formData.message),
        };

        setErrors(newErrors);
        return Object.values(newErrors).every(error => !error);
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Validate field on change if it's been touched
        if (touched[name as keyof typeof touched]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    // Handle input blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, formData[name as keyof typeof formData]);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // Format phone number as user types
    const formatPhoneNumber = (value: string) => {
        // Remove all non-digits
        const cleaned = value.replace(/\D/g, '');
        // Format as (XXX) XXX-XXXX
        if (cleaned.length >= 10) {
            return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6,10)}`;
        }
        return cleaned;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setFormData(prev => ({ ...prev, phoneNumber: formatted }));
        
        if (touched.phoneNumber) {
            const error = validateField('phoneNumber', formatted);
            setErrors(prev => ({ ...prev, phoneNumber: error }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({
            name: true,
            email: true,
            phoneNumber: true,
            message: true,
        });

        if (validateForm()) {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Form submitted:', formData);
                toast.success('Thank you for reaching out to CarePass. We look forward to assisting you!');
                setFormData(defaultValues);
                setTouched({
                    name: false,
                    email: false,
                    phoneNumber: false,
                    message: false,
                });
            } catch (error) {
                toast.error('An error occurred. Please try again later.');
            }
        } else {
            toast.error('Please fix the errors in the form');
        }
    };

    const getInputClassName = (fieldName: string) => `
        block w-full rounded-md border-0 px-3.5 py-2 text-black-900 shadow-sm ring-1 ring-inset 
        ${errors[fieldName as keyof typeof errors] && touched[fieldName as keyof typeof touched] 
            ? 'ring-red-500 focus:ring-red-500' 
            : 'ring-gray-300 focus:ring-indigo-600'
        } 
        placeholder:text-black-400 sm:text-sm focus:ring-2 focus:ring-inset transition-colors
    `;

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-lg md:text-3xl font-semibold tracking-tight text-black-900">
                    Have a question?
                </h2>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-sm/6 font-semibold text-black-900">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName('name')}
                                placeholder="John Doe"
                            />
                            {touched.name && errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-black-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName('email')}
                                placeholder="john@example.com"
                            />
                            {touched.email && errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-black-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={handlePhoneChange}
                                onBlur={handleBlur}
                                className={getInputClassName('phoneNumber')}
                                placeholder="(123) 456-7890"
                            />
                            {touched.phoneNumber && errors.phoneNumber && (
                                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-black-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName('message')}
                                placeholder="Your message here..."
                            />
                            {touched.message && errors.message && (
                                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full bg-deepPurple hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-sm sm:px-8 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

const BusinessContactForm = () => {
    const defaultValues = {
        companyName: '',
        personName: '',
        designation: '',
        contactNo: '',
        businessEmail: '',
        remarks: ''
    };

    const [formData, setFormData] = useState(defaultValues);
    const [errors, setErrors] = useState({
        companyName: '',
        personName: '',
        designation: '',
        contactNo: '',
        businessEmail: '',
        remarks: ''
    });
    const [touched, setTouched] = useState({
        companyName: false,
        personName: false,
        designation: false,
        contactNo: false,
        businessEmail: false,
        remarks: false
    });

    // Validation rules
    const validationRules = {
        companyName: (value: string) => {
            if (!value.trim()) return 'Company name is required';
            if (value.trim().length < 2) return 'Company name must be at least 2 characters';
            if (value.trim().length > 100) return 'Company name must be less than 100 characters';
            return '';
        },
        personName: (value: string) => {
            if (!value.trim()) return 'Name is required';
            if (value.trim().length < 2) return 'Name must be at least 2 characters';
            if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name should only contain letters and spaces';
            if (value.trim().length > 50) return 'Name must be less than 50 characters';
            return '';
        },
        designation: (value: string) => {
            if (!value.trim()) return 'Designation is required';
            if (value.trim().length < 2) return 'Designation must be at least 2 characters';
            if (value.trim().length > 50) return 'Designation must be less than 50 characters';
            return '';
        },
        contactNo: (value: string) => {
            if (!value) return 'Contact number is required';
            const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
            if (!phoneRegex.test(value)) return 'Please enter a valid contact number';
            return '';
        },
        businessEmail: (value: string) => {
            if (!value) return 'Business email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
            if (value.length > 100) return 'Email must be less than 100 characters';
            return '';
        },
        remarks: (value: string) => {
            if (!value.trim()) return 'Remarks are required';
            if (value.trim().length < 10) return 'Remarks must be at least 10 characters';
            if (value.trim().length > 500) return 'Remarks must be less than 500 characters';
            return '';
        }
    };

    // Validate single field
    const validateField = (name: string, value: string) => {
        const validationRule = validationRules[name as keyof typeof validationRules];
        return validationRule ? validationRule(value) : '';
    };

    // Validate all fields
    const validateForm = () => {
        const newErrors = {
            companyName: validateField('companyName', formData.companyName),
            personName: validateField('personName', formData.personName),
            designation: validateField('designation', formData.designation),
            contactNo: validateField('contactNo', formData.contactNo),
            businessEmail: validateField('businessEmail', formData.businessEmail),
            remarks: validateField('remarks', formData.remarks)
        };

        setErrors(newErrors);
        return Object.values(newErrors).every(error => !error);
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (touched[name as keyof typeof touched]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    // Handle input blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, formData[name as keyof typeof formData]);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // Format phone number
    const formatPhoneNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length >= 10) {
            return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6,10)}`;
        }
        return cleaned;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setFormData(prev => ({ ...prev, contactNo: formatted }));
        
        if (touched.contactNo) {
            const error = validateField('contactNo', formatted);
            setErrors(prev => ({ ...prev, contactNo: error }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({
            companyName: true,
            personName: true,
            designation: true,
            contactNo: true,
            businessEmail: true,
            remarks: true
        });

        if (validateForm()) {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Form submitted:', formData);
                toast.success('Thank you for your business inquiry. We will get back to you soon!');
                setFormData(defaultValues);
                setTouched({
                    companyName: false,
                    personName: false,
                    designation: false,
                    contactNo: false,
                    businessEmail: false,
                    remarks: false
                });
            } catch (error) {
                toast.error('An error occurred. Please try again later.');
            }
        } else {
            toast.error('Please fix the errors in the form');
        }
    };

    const getInputClassName = (fieldName: string) => `
        block w-full rounded-md border-0 px-3.5 py-2 text-black-900 shadow-sm ring-1 ring-inset 
        ${errors[fieldName as keyof typeof errors] && touched[fieldName as keyof typeof touched] 
            ? 'ring-red-500 focus:ring-red-500' 
            : 'ring-gray-300 focus:ring-indigo-600'
        } 
        placeholder:text-black-400 sm:text-sm focus:ring-2 focus:ring-inset transition-colors
    `;

    return (
        <div className="isolate bg-white px-2 py-2 sm:py-10 lg:px-2">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-lg md:text-3xl font-semibold tracking-tight text-black-900">
                Partner with us
                </h2>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="companyName" className="block text-sm/6 font-semibold text-black-900">
                            Company Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                value={formData.companyName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName('companyName')}
                                placeholder="Company Name"
                            />
                            {touched.companyName && errors.companyName && (
                                <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="personName" className="block text-sm/6 font-semibold text-black-900">
                            Name of the Person
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="personName"
                                name="personName"
                                type="text"
                                value={formData.personName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName('personName')}
                                placeholder="John Doe"
                            />
                            {touched.personName && errors.personName && (
                                <p className="mt-1 text-sm text-red-600">{errors.personName}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="designation" className="block text-sm/6 font-semibold text-black-900">
                            Designation
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="designation"
                                name="designation"
                                type="text"
                                value={formData.designation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName('designation')}
                                placeholder="Senior Manager"
                            />
                            {touched.designation && errors.designation && (
                                <p className="mt-1 text-sm text-red-600">{errors.designation}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="contactNo" className="block text-sm/6 font-semibold text-black-900">
                            Contact Number
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="contactNo"
                                name="contactNo"
                                type="tel"
                                value={formData.contactNo}
                                onChange={handlePhoneChange}
                                onBlur={handleBlur}
                                className={getInputClassName('contactNo')}
                                placeholder="(123) 456-7890"
                            />
                            {touched.contactNo && errors.contactNo && (
                                <p className="mt-1 text-sm text-red-600">{errors.contactNo}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="businessEmail" className="block text-sm/6 font-semibold text-black-900">
                            Business Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="businessEmail"
                                name="businessEmail"
                                type="email"
                                value={formData.businessEmail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName('businessEmail')}
                                placeholder="john.doe@company.com"
                            />
                            {touched.businessEmail && errors.businessEmail && (
                                <p className="mt-1 text-sm text-red-600">{errors.businessEmail}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="remarks" className="block text-sm/6 font-semibold text-black-900">
                            Remarks or Comments
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="remarks"
                                name="remarks"
                                rows={4}
                                value={formData.remarks}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName('remarks')}
                                placeholder="Your remarks or comments here..."
                            />
                            {touched.remarks && errors.remarks && (
                                <p className="mt-1 text-sm text-red-600">{errors.remarks}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full bg-deepPurple hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-sm sm:px-8 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

const CombinedForms = () => {
    return (
    <div className="pt-[50px] pb-[50px]" style={{ background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)' }}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md border border-gray-200">
              <BusinessContactForm />
            </div>
            <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md border border-gray-200">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  };

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
                <h2 className="text-lg md:text-3xl font-bold text-black-900">{heading}</h2>
                <p className="mt-2 text-black-600">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contacts.map((contact, index) => (
                    <div key={index} className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm">
                        <h3 className="text-md font-semibold text-black-900">{contact.title}</h3>
                        {contact.description && <p className="text-black-600 mt-2">{contact.description}</p>}
                        <p className="text-deepPurple mt-2 hover:underline cursor-pointer">
                            {contact.email}
                        </p>
                        {contact.phone && <p className="text-black-600 mt-1">{contact.phone}</p>}
                        {contact.availableHours && (
                            <p className="text-black-600 mt-1">{`Available Hours: ${contact.availableHours}`}</p>
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

                <h2 className="text-lg md:text-3xl font-bold text-black-900">{heading}</h2>
                <p className="mt-2 text-black-600">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visitItems.map((item, index) => (
                    <div key={index} className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm">
                        <h3 className="text-md font-semibold text-black-900">{item.title}</h3>
                        {item?.description && <p className="text-black-600 mt-2">{item.description}</p>}
                        <p className="text-black-600 mt-2">{item.address}</p>
                        {item.city && item.state && item.zipCode && (
                            <p className="text-black-600 mt-1">
                                {item.city}, {item.state}, {item.zipCode}
                            </p>
                        )}
                        {item.country && <p className="text-black-600 mt-1">{item.country}</p>}
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
        <div className="py-[30px] rounded-lg flex flex-col md:flex-row justify-between max-w-[1200px] m-auto">
            <div className="mb-8 max-w-[100%] md:max-w-[30%]">
                <h2 className="text-lg md:text-3xl font-bold text-black-900">{heading}</h2>
                <p className="mt-2 text-black-600">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {socialMediaLinks.map((social, index) => (
                    <div key={index} className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm flex flex-col justify-between">
                        <h3 className="text-md font-semibold text-black-900">{social.title}</h3>
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

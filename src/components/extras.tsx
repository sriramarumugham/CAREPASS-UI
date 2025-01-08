import HeartGrafti from '../assets/hert-grafti.svg';
import AboutUsThree from '../assets/about-us-3.png';
import DownloadApp from '../assets/download_app.png';
import TopRightSvg from '../assets/top-right.svg';
import { GiWeightLiftingUp, GiLifeSupport } from "react-icons/gi";
import { CiDiscount1, CiMobile1, CiHeart } from "react-icons/ci";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbReceiptTax, TbRosetteDiscountCheckFilled, TbDiscount } from "react-icons/tb";
import { FaUserDoctor, FaPeopleRoof, FaPeopleGroup, FaShieldHeart } from "react-icons/fa6";
import { BsHouseHeartFill, BsFillPatchCheckFill } from "react-icons/bs";
import { MdHealthAndSafety, MdOutlineSupportAgent, MdOutlineMedicalServices, MdOutlineFamilyRestroom, MdOutlineSavings } from "react-icons/md";
import { FaUsers, FaUserMd, FaDollarSign, FaClipboardList, FaTag, FaStethoscope, FaHeartbeat, FaAppleAlt, FaBookMedical, FaRegDotCircle
, FaHospital, FaPlay } from 'react-icons/fa';
import { FiShield } from "react-icons/fi";
import { useState } from 'react';
import FourDoctor from '../assets/fourDoctors.svg';
import { PiHandCoinsFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { LuHeartPulse } from "react-icons/lu";
import AboutUsTwo from '../assets/about-us-2.png';
import TaxSaver from '../assets/Tax.png';
import Silver from '../assets/Silver.png';
import Gold from '../assets/Gold.png';
import Platinum from '../assets/Platinum.png';
import YouPay from '../assets/Give.png';
import YouGet from '../assets/Take.png';
import AboutOurWellnessApp from '../assets/about_our_wellness_app.png';
import WhyChooseCarePassVideoThumbnail from '../assets/why_choose_CarePass.png';
import HowItWorksVideoThumbnail from '../assets/how_it_works.png';
import { X } from "react-icons/fi"; 

export const Section2 = () => {
    return (
        <div
            className="py-12 md:py-16 w-full max-w-[1200px] mx-auto  flex items-center justify-center"
            id="section-2"
        >
            <div className="flex flex-col md:flex-row justify-start gap-8 px-[20px] ">
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

export const HomePageSection1 = () => {
  return (
    <div
      className="py-12 md:py-16 flex items-center justify-center px-[20px]"
      style={{
        background: "#FCF9FF",
      }}
    >
      <div className="flex justify-center flex-col md:w-1/2 gap-4">
        <h1 className="text-2xl font-bold mb-4 text-deepPurple">
          Still Settling for Ordinary Health Plans?
        </h1>
        <p className="text-lg mb-4">
          Say hello to{" "}
          <span className="font-semibold text-deepPurple">CarePass</span>—a
          health plan that goes beyond just emergency protection. With CarePass,
          you stay proactive with preventive care, ensuring long-term
          well-being, while also enjoying significant savings.
        </p>
        <p className="text-lg font-medium">
          It’s more than just a safety net—it’s a smarter way to manage your
          health, every day.
        </p>
      </div>
    </div>
  );
};

  export const HomePageSection2 = () => {
    return (
      <div
        className="py-12 md:py-16 flex items-center justify-center px-[20px]"
        style={{
          background: "#FFF",
        }}
      >
        <div className="flex justify-center flex-col md:w-1/2 gap-4">
          <p className="text-lg mb-4">
          <span className="font-semibold text-deepPurple">Complete Health Protection</span>— Whether it’s a regular health check-up or managing a critical illness, CarePass simplifies and enhances your health journey.
          </p>
          <p className="text-lg font-medium">
          <span className="font-semibold text-deepPurple">Preventive & Primary Care</span>— Take control of your wellness with extensive preventive measures and primary care services.
          </p>
        </div>
      </div>
    );
  };

  export const HomePageSection3 = () => {
    return (
      <div
        className="py-12 md:py-16 flex items-center justify-center px-[20px]"
        style={{
          background: "#FCF9FF",
        }}
      >
        <div className="flex justify-center flex-col md:w-1/2 gap-4">
          <h1 className="text-2xl font-bold mb-4 text-deepPurple">
            Simplifying Health & Wellness Like Never Before
          </h1>
          <p className="text-lg mb-4">
            <span className="font-semibold text-deepPurple">CarePass</span> offers an all-in-one digital health solution to ensure you’re prepared for preventive care and unexpected health challenges. Gain financial ease and peace of mind—all in one plan.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <span className="font-semibold text-deepPurple">
                Comprehensive Health Management
              </span>
            </li>
            <li>
              <span className="font-semibold text-deepPurple">
                Financial Security
              </span>{" "}
              with coverage up to ₹25,00,000
            </li>
            <li>
              <span className="font-semibold text-deepPurple">
                Preventive Health Focus
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export const HomePageSection4 = () => {
    return (
      <div
        className="py-12 md:py-16 flex items-center justify-center px-[20px]"
        style={{
          background: "#FFF",
        }}
      >
        <div className="flex justify-center flex-col md:w-1/2 gap-4">
          <h1 className="text-2xl font-bold mb-4 text-deepPurple">
            Comprehensive Care Across India
          </h1>
          <p className="text-lg mb-4">
            <span className="font-semibold text-deepPurple">CarePass</span> offers extensive healthcare support across India, ensuring that no matter where you are, you have access to top-notch medical services.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <span className="font-semibold text-deepPurple">25,000+ Doctors</span> for in-clinic consultations
            </li>
            <li>
              <span className="font-semibold text-deepPurple">8,000+ Doctors</span> for online teleconsultation
            </li>
            <li>
              <span className="font-semibold text-deepPurple">5,500+ Gyms</span> for fitness and wellness
            </li>
            <li>
              <span className="font-semibold text-deepPurple">8,000+ Diagnostic Centers</span> for home sample collection
            </li>
            <li>
              <span className="font-semibold text-deepPurple">5,000+ Dentists</span> for comprehensive dental care
            </li>
            <li>
              <span className="font-semibold text-deepPurple">35,000+ Pharmacies</span> for easy access to medication
            </li>
            <li>
              <span className="font-semibold text-deepPurple">300+ Vision Care Stores</span> for eye health services
            </li>
            <li>
              Coverage across <span className="font-semibold text-deepPurple">400+ cities</span>
            </li>
          </ul>
          <p className="text-lg mt-4">
            CarePass is supported by an extensive network across{" "}
            <span className="font-semibold text-deepPurple">
              30,000+ pin codes
            </span>{" "}
            in India.
          </p>
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

export const AboutSection322 = () => {
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

export const AboutSection3 = () => {
  const features = [
    {
      icon: MdOutlineFamilyRestroom,
      title: "Comprehensive Family Coverage",
      description: "Our floater plans cover your entire family, including spouse, children, and parents, under one plan."
    },
    {
      icon: RiDiscountPercentFill,
      title: "Health Benefits and Exclusive Savings",
      description: "Enjoy exclusive savings on annual health checks, diagnostic tests from premium hospitals, and more."
    },
    {
      icon: CiMobile1,
      title: "User-Friendly Digital Platform",
      description: "Experience a seamless healthcare management experience with our user-friendly digital platform, featuring automated confirmations, secure wallet, and easy document storage on our app."
    },
    {
      icon: MdHealthAndSafety,
      title: "Easy Health Management",
      description: "Manage your health and wellness with ease using our app, where you can schedule appointments, access your digital wallet, store health records, and more."
    },
    {
      icon: MdOutlineSavings,
      title: "Unbeatable Value",
      description: "Get the lowest premiums with maximum value with our Gold and Platinum plans, offering unmatched benefits and coverage."
    },
    {
      icon: TbReceiptTax,
      title: "Tax Benefits",
      description: "Take advantage of tax benefits under Section 80D, providing additional savings on your healthcare costs."
    }
  ];

  return (
    <div
      className="px-6 py-10 flex flex-col items-center justify-center"
      style={{
        background: "#FCF9FF",
      }}
    >
      {/* Center-aligned heading */}
      <h2 className="text-black-900 text-2xl font-bold md:text-3xl md:leading-8 text-center mb-6">
        Why Choose CarePass?
      </h2>

      <div className="flex flex-col md:flex-row max-w-[1200px] gap-8 items-center">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={WhyChooseCarePassVideoThumbnail}
            alt="Care Across India"
            className="w-full object-contain max-w-[600px]"
          />
        </div>

        <div className="flex flex-col md:w-1/2 gap-6">
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <IconComponent className="w-6 h-6 text-black-900" />
                  </div>
                  <div>
                    <p className="text-base md:text-md leading-7">
                      <span className="text-black-900 font-semibold">
                        {feature.title}:{' '}
                      </span>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Center-aligned bottom text */}
      <p className="text-base md:text-md leading-7 mt-8 text-center max-w-[800px]">
        At CarePass, we’re not just offering health insurance; we’re providing a complete healthcare solution that’s tailored to your unique needs.
      </p>
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
  
  const benefits = [
    {
      text: "Discounted Health checks, medicines and gym memberships",
      icon: GiWeightLiftingUp,
    },
    {
      text: "AI-powered personalized diet plans",
      icon: FaAppleAlt,
    },
    {
      text: "Access to digital health records and assessments",
      icon: MdHealthAndSafety,
    },
    {
      text: "In-person & online doctor consultations",
      icon: FaStethoscope,
    },
    {
      text: "24/7 access to mental health professionals",
      icon: FaHeartbeat,
    },
    {
      text: "Live expert support available 24/7 through chat, phone, or email",
      icon: MdOutlineSupportAgent,
    },
  ];
  
  export const WellnessAppBenefits = () => {
    return (
      <div className='px-[20px] flex items-center justify-center' style={{ background: '#FCF9FF', }}>
          <div className="flex flex-col max-w-[1200px] py-[30px] md:py-[30px] gap-4 md:gap-12">
              <p className="font-bold text-xl md:text-4xl mx-auto">Wellness App Benefits</p>
              <div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                      <img 
                          src={DownloadApp} 
                          alt="Wellness App" 
                          className="w-full max-w-xs object-contain rounded-lg mb-6 md:mb-0"
                      />
                      <div className='flex flex-col gap-3'>
                          <ul className="space-y-6">
                              {benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-center space-x-4 text-lg text-black-700">
                                      <benefit.icon className="text-deepPurple text-2xl" />
                                      <span>{benefit.text}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
              <p className="text-lg text-black-800 text-center">
                  Download the <span className="font-semibold text-deepPurple">Wellness Corner App</span> to get started.
              </p>
          </div>
      </div>
    );
  };

  export const WhyChooseCarePass = () => {
    const benefits = [
      {
        title: "Complete Family Coverage:",
        description: "Plans for your spouse, children, and parents.",
        icon: <FaUsers className="text-deepPurple text-3xl" />,
      },
      {
        title: "Personalized Health Plans:",
        description: "Tailored to your individual health needs.",
        icon: <FaUserMd className="text-deepPurple text-3xl" />,
      },
      {
        title: "Lowest Premiums:",
        description:
          "Exceptional value with Gold and Platinum plans at the most competitive rates.",
        icon: <FaDollarSign className="text-deepPurple text-3xl" />,
      },
      {
        title: "Simple Health Management:",
        description: "Manage appointments, wallets, and health records through one app.",
        icon: <FaClipboardList className="text-deepPurple text-3xl" />,
      },
      {
        title: "Health Benefits and Exclusive Savings:",
        description:
          "Enjoy exclusive savings on Annual Health checks, Pharmacy purchases, diagnostic tests from premium hospitals, and more.",
        icon: <FaTag className="text-deepPurple text-3xl" />,
      },
      {
        title: "Tax Benefits:",
        description:
          "Take advantage of tax benefits under Section 80D, providing additional savings on your healthcare costs.",
        icon: <RiDiscountPercentFill className="text-deepPurple text-3xl" />,
      },
    ];
  
    const videoUrl = "https://drive.google.com/file/d/1bF6cerGu_0Gh-_PsySWyQg1yECQcLs_F/preview";
  
    return (
      <div className="px-[20px] flex items-center justify-center">
        <div className="flex flex-col max-w-[1200px] py-[30px] md:py-[30px] gap-6">
          <p className="font-bold text-xl md:text-4xl mx-auto text-black">
            Why Choose CarePass?
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Content Section */}
            <div className="flex-1 flex flex-col gap-4">
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <span className="text-black">{benefit.icon}</span>
                    <div>
                      <h2 className="text-xl font-semibold text-black">
                        {benefit.title}
                      </h2>
                      <p className="text-black-700">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Video Thumbnail Section */}
            <div
              className="flex-1 border-2 border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-gray-400 transition-colors relative"
              onClick={() => window.open(videoUrl, "_blank")}
            >
              <img
                src={WhyChooseCarePassVideoThumbnail}
                alt="Why Choose CarePass Video Thumbnail"
                className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <FaPlay className="text-deepPurple text-4xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export const HealthControlCTA = () => {
    return (
      <div className="py-12 px-6 md:px-12 text-center"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-deepPurple">
          Ready to Take Control of Your Health?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Don’t settle for less—choose <span className="font-semibold text-deepPurple">CarePass</span> and experience comprehensive healthcare that covers you and your family in every situation. From preventive care to critical illness coverage, CarePass has it all, ensuring you stay ahead while saving big.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Take the first step towards smarter health management today!
        </p>
        <a
          href="/"
          className="bg-white text-deepPurple font-semibold text-lg px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Explore Our Products Now!
        </a>
      </div>
    );
  };

  export const HealthcareEcosystem = () => {
    const data = [
      {
        title: "Teleconsultations",
        details: "8,000+ doctors, specialists & super-specialists",
      },
      {
        title: "In-Clinic Consultations",
        details: "25,000+ doctors across 650+ cities",
      },
      {
        title: "Dental Care",
        details: "5,000+ dentists, 2,500+ clinics in 330+ cities",
      },
      {
        title: "Vision Care",
        details: "300+ stores pan-India, courier service in 19,000+ pin codes",
      },
      {
        title: "Pharmacy Network",
        details: "35,000+ physical pharmacies, 90%+ fulfillment across 650+ cities",
      },
      {
        title: "Diagnostic Centers",
        details: "8,000+ partners pan-India, 650+ cities",
      },
      {
        title: "Home Sample Collection",
        details: "400+ cities, 10,000+ pin codes",
      },
      {
        title: "Gym & Fitness",
        details: "5,500+ gyms across 40+ cities",
      },
      {
        title: "E-Pharmacy",
        details: "5,72,287+ SKUs, doorstep delivery across 59 cities, 30,000+ pin codes",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Get Access to India's Biggest Healthcare Ecosystem
        </h1>
        <p className="text-xl text-center text-black-700 font-semibold mb-8">
          50,000+ Experts, 1,00,000+ Locations
        </p>
        <ul className="list-disc list-inside text-lg text-black-700 space-y-4 mx-auto max-w-3xl">
        {data.map((item, index) => (
          <li key={index} className="text-left">
            <span className="font-semibold text-deepPurple">{item.title}:</span>{" "}
            {item.details}
          </li>
        ))}
      </ul>
      </div>
    );
  };

  export const WellnessApp = () => {
    const points = [
      {
        title: "Personalized Wellness Plans",
        description:
          "Get AI-powered customized diet plans and access to expert dieticians for a healthier you.",
      },
      {
        title: "Seamless Doctor Consultations",
        description:
          "Enjoy in-person and online consultations with doctors for convenient healthcare management.",
      },
      {
        title: "Fitness Made Easy",
        description:
          "Access discounted gym memberships to kickstart your fitness journey.",
      },
      {
        title: "Knowledge at Your Fingertips",
        description:
          "Explore our knowledge hubs, webinars, and more to stay updated on the latest health and wellness trends.",
      },
      {
        title: "Exclusive Discounts",
        description:
          "Avail exclusive discounts on pharmacy, diagnostics, and health checks to save on your healthcare expenses.",
      },
      {
        title: "Digital Health Management",
        description:
          "Store and manage your digital health records, track your progress with personalized health assessments, and stay on top of your health with our intuitive trackers.",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          About Our Wellness App
        </h1>
        <ul className="list-disc list-inside text-lg text-black-700 space-y-4 mx-auto max-w-3xl">
          {points.map((point, index) => (
            <li key={index} className="text-left">
              <span className="font-semibold text-deepPurple">{point.title}:</span>{" "}
              {point.description}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export const BenefitsBreakdownGold = ({ onBuyNow }) => {
    const benefits = [
      {
        category: "Preventive Care",
        items: [
          { name: "Preventive Health Check", value: "₹8,000" },
          { name: "Doctor Consultation", value: "₹12,400" },
          { name: "App Access", value: "₹2,000" },
        ],
      },
      {
        category: "Medicines & Diagnostics",
        items: [
          { name: "Doctor-Prescribed Medicines", value: "₹6,000" },
          { name: "Doctor-Prescribed Diagnostic", value: "₹7,000" },
        ],
      },
      {
        category: "Wellness",
        items: [
          { name: "Dental Care", value: "₹4,200" },
          { name: "Vision Care", value: "₹2,800" },
        ],
      },
      {
        category: "Critical Care",
        items: [{ name: "Critical Illness", value: "₹2,50,000" }],
      },
      {
        category: "Financial Benefits",
        items: [{ name: "Tax Benefits Under 80D", value: "₹10,000" }],
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Breakdown of Benefits
        </h1>
        <div className="text-center text-lg text-black-800 mb-8">
          <p className="font-semibold">You Pay: ₹10,000</p>
          <p className="font-semibold">Get Benefits Worth: ₹3,00,000+</p>
        </div>
        <div className="space-y-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside text-lg text-black-700 space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-lg text-black-800 mt-8 max-w-xl mx-auto space-y-2">
          <p>
            <span className="font-bold">Age Limit:</span> 18 to 60 years
          </p>
          <p>
            <span className="font-bold">Validity:</span> 1 year
          </p>
          <p>
            <span className="font-bold">Coverage:</span> Self, spouse, and two
            children
          </p>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const BenefitsBreakdownPlatinum = ({ onBuyNow }) => {
    const benefits = [
      {
        category: "Healthcare Services",
        items: [
            { name: "Preventive Health Check", value: "₹8,000" },
            { name: "Doctor Consultation", value: "₹12,400" },
            { name: "App Access", value: "₹2,000" },
            { name: "Doctor-Prescribed Medicines", value: "₹6,000" },
            { name: "Doctor-Prescribed Diagnostic", value: "₹7,000" },
            { name: "Dental Care", value: "₹4,200" },
            { name: "Vision Care", value: "₹2,800" },
            { name: "Critical Illness", value: "₹2,50,000" },
        ],
      },
      {
        category: "Health Insurance Benefits",
        items: [
            { name: "Super Top-Up for Hospitalization", value: "₹15,00,000/ ₹25,00,000" },
            { name: "Health Insurance", value: "₹3,00,000/ ₹5,00,000" },
            { name: "Tax Benefits Under 80D", value: "₹15,000" },
        ],
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Breakdown of Benefits
        </h1>
        <div className="text-center text-lg text-black-800 mb-8">
          <p className="font-semibold">You Pay: ₹10,000</p>
          <p className="font-semibold">Get Benefits Worth: ₹3,00,000+</p>
        </div>
        <div className="space-y-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside text-lg text-black-700 space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-lg text-black-800 mt-8 max-w-xl mx-auto space-y-2">
          <p>
            <span className="font-bold">Age Limit:</span> 18 to 60 years
          </p>
          <p>
            <span className="font-bold">Validity:</span> 1 year
          </p>
          <p>
            <span className="font-bold">Coverage:</span> Self, spouse, and two
            children
          </p>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const BenefitsBreakdownSilver = ({ onBuyNow }) => {
    const benefits = [
      {
        category: "Medical Consultations",
        items: [
            { name: "Doctor Consultations (In-clinic & Online)", value: "₹10,000" },
        ],
      },
      {
        category: "Medicines & Diagnostics",
        items: [
            { name: "Doctor-Prescribed Medicines", value: "₹6,000" },
            { name: "Doctor-Prescribed Diagnostics", value: "₹7,000" },
        ],
      },
      {
        category: "Wellness",
        items: [
            { name: "Dental Care", value: "₹4,200" },
            { name: "Vision Care", value: "₹2,800" },
        ],
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Breakdown of Benefits
        </h1>
        <div className="text-center text-lg text-black-800 mb-8">
          <p className="font-semibold">You Pay: ₹5,000</p>
          <p className="font-semibold">Get Benefits Worth: ₹30,000+</p>
        </div>
        <div className="space-y-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside text-lg text-black-700 space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-lg text-black-800 mt-8 max-w-xl mx-auto space-y-2">
          <p>
            <span className="font-bold">Age Limit:</span> 18 to 60 years
          </p>
          <p>
            <span className="font-bold">Validity:</span> 1 year
          </p>
          <p>
            <span className="font-bold">Coverage:</span> Self, spouse, and two
            children
          </p>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const BenefitsBreakdownTaxSaver = ({ onBuyNow }) => {
    const benefits = [
      {
        category: "Preventive Health Checks",
        items: [
            { name: "Comprehensive screenings & Early disease detection and prevention", value: "₹8,000" },
        ],
      },
      {
        category: "Unlimited Tele-consultation",
        items: [
            { name: "Convenient access to medical experts, endlessly!", value: "₹2,400" },
            { name: "Doctor-Prescribed Diagnostics", value: "₹7,000" },
        ],
      },
      {
        category: "Application Access",
        items: [
            { name: "Exclusive health and wellness tools", value: "₹2,000" },
        ],
      },
      {
        category: "Tax Benefit under 80D",
        items: [
            { name: "Deduction under Section 80D, Validity: 1 year, renewable", value: "₹5,000" },
        ],
      },
      {
        category: "Discounts on Pharmacy (up to 18%)",
        items: [
            { name: "Savings on medication and health products, and more", value: "-" },
        ],
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Breakdown of Benefits
        </h1>
        <div className="text-center text-lg text-black-800 mb-8">
          <p className="font-semibold">You Pay: ₹5,000</p>
          <p className="font-semibold">Get Benefits Worth: ₹17,400</p>
          <p className="font-semibold">Savings: ₹12,400 (74% off)</p>
        </div>
        <div className="space-y-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside text-lg text-black-700 space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-lg text-black-800 mt-8 max-w-xl mx-auto space-y-2">
          <p>
            <span className="font-bold">Age Limit:</span> 18 to 60 years
          </p>
          <p>
            <span className="font-bold">Validity:</span> 1 year
          </p>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const HowItWorksGold = ({ onBuyNow }) => {
    const steps = [
      {
        title: "Buy Now",
        description: "Purchase CarePass Gold",
      },
      {
        title: "Get ₹15,000 Wallet",
        description: "Receive digital wallet amount",
      },
      {
        title: "Critical Illness Coverage",
        description: "Activate ₹2,50,000 coverage",
      },
      {
        title: "Avail Services",
        description: "Access preventive health checks and primary care services",
      },
      {
        title: "Tax Benefits",
        description: "Claim deductions under Section 80D",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          How it Works
        </h1>
        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="text-lg text-black-700 mr-4">Step {index + 1}:</div>
              <div className="text-lg text-black-700">
                <strong>{step.title}</strong>: {step.description}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={onBuyNow}
            className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const HowItWorksPlatinum = ({ onBuyNow }) => {
    const steps = [
      {
        title: "Buy Now",
        description: "Purchase CarePass Platinum Plan for ₹15,000",
      },
      {
        title: "Get ₹15,000 Wallet",
        description:
          "Receive a digital wallet for preventive health checks and primary care services",
      },
      {
        title: "Critical Illness Coverage",
        description:
          "Activate coverage up to ₹2,50,000 for major medical expenses",
      },
      {
        title: "Extended Coverage",
        description:
          "Access base health insurance and super top-up coverage up to ₹25,00,000",
      },
      {
        title: "Tax Benefits",
        description: "Claim deductions under Section 80D, saving up to ₹15,000",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          How it Works
        </h1>
        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="text-lg text-black-700 mr-4">Step {index + 1}:</div>
              <div className="text-lg text-black-700">
                <strong>{step.title}</strong>: {step.description}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={onBuyNow}
            className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const CarePassBenefitsSilver = () => {
    const benefits = [
        {
          category: "Exclusive Benefits",
          items: [
            "Family Protection: All-in-one coverage for you, your spouse, and children",
            "Consultation Flexibility: Book, reschedule, and customize appointments effortlessly",
            "Digital Convenience: Intuitive app and secure data storage",
            "Exclusive Discounts: Significant savings on health services and products",
          ],
        },
        {
          category: "Expert Care Team",
          items: [
            "Personalized Support: Passionate professionals dedicated to your well-being",
            "Round-the-Clock Assistance: Seamless connectivity via phone, email, and chat",
          ],
        },
        {
          category: "Endless Wellness Possibilities",
          items: [
            "Health and Wellness Network: Access a vast range of services and products through our app",
          ],
        },
      ];
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Unlock a Healthier Tomorrow with CarePass
        </h1>
  
        <div className="space-y-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-black-700">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-8">
            <p className="text-xl font-semibold text-deepPurple">
            Become a Part of the CarePass Family Today!
            </p>
        </div>
      </div>
    );
  };

  export const CarePassBenefitsTaxSaver = () => {
    const benefits = [
      {
        category: "Unique Advantages benefits",
        icon: <FiShield className="w-8 h-8 text-purple-600" />,
        items: [
          {
            text: "Family Protection: Comprehensive coverage for loved ones",
            icon: <FaUsers className="w-5 h-5 text-purple-500" />
          },
          {
            text: "Flexibility: Book, reschedule, and customize consultations",
            icon: <FaUserDoctor className="w-5 h-5 text-purple-500" />
          },
          {
            text: "Tax Savings: Maximize benefits under Section 80D",
            icon: <TbReceiptTax className="w-5 h-5 text-purple-500" />
          },
          {
            text: "Digital Convenience: User-friendly app and secure storage",
            icon: <CiMobile1 className="w-5 h-5 text-purple-500" />
          },
          {
            text: "Unbeatable Discounts: Save big on health services and products",
            icon: <CiDiscount1 className="w-5 h-5 text-purple-500" />
          },
        ],
      },
      {
        category: "Expert Support",
        icon: <BiSupport className="w-8 h-8 text-purple-600" />,
        items: [
          {
            text: "Dedicated Team: Personalized care from passionate professionals",
            icon: <GiLifeSupport className="w-5 h-5 text-purple-500" />
          },
          {
            text: "24/7 Help & Support: Seamless connectivity via phone, email, and chat",
            icon: <MdOutlineSupportAgent className="w-5 h-5 text-purple-500" />
          },
        ],
      },
      {
        category: "Limitless Wellness",
        icon: <FaShieldHeart className="w-8 h-8 text-purple-600" />,
        items: [
          {
            text: "Wellness App: Access a vast network of health services and products",
            icon: <CiMobile1 className="w-5 h-5 text-purple-500" />
          },
        ],
      },
    ];
  
    return (
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl font-semibold text-deepPurple text-center mb-5">
            Unlock a healthier tomorrow with exclusive benefits of CarePass
          </p>
  
          <div className="space-y-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="transform transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  {benefit.icon}
                  <h2 className="text-2xl font-semibold text-purple-800">
                    {benefit.category}
                  </h2>
                </div>
                <div className="grid gap-4">
                  {benefit.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-4 group transition-all duration-300"
                    >
                      <div className="flex-shrink-0 transform transition-all duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="text-black-700 text-lg group-hover:text-purple-800 transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-16">
            <p className="text-2xl font-semibold text-purple-800 transform">
              Join the CarePass Family Today!
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const CarePassSilverSteps = () => {
    const steps = [
      { title: "Buy Now", description: "Purchase CarePass Silver" },
      { title: "Get ₹10,000 Wallet", description: "Receive wallet amount for healthcare services" },
      { title: "Unlimited Teleconsultation", description: "Avail 24/7 online consultations" },
      { title: "Comprehensive Coverage", description: "Access in-clinic consultations, diagnostic tests, pharmacy purchases, dental services, and vision care" },
      { title: "Tax Benefits", description: "Claim deductions under Section 80D" },
      { title: "Exclusive Discounts", description: "Enjoy savings on pharmacy purchases and diagnostic tests" },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
              style={{
            background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
        }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Simple Steps to Comprehensive Care
        </h1>
  
        <div className="max-w-4xl mx-auto">
          <ul className="list-disc pl-6 space-y-4 text-lg text-black-700">
            {steps.map((step, index) => (
              <li key={index}>
                <strong className="font-semibold text-deepPurple">{step.title}:</strong> {step.description}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-black-800 mb-4">Join the Thousands of Satisfied Clients</p>
          <p className="text-xl text-black-600">Transform your healthcare experience with CarePass Silver.</p>
          <div className="mt-6">
            <p className="text-xl font-semibold text-deepPurple">
              Get Started Now
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const ReusableTableComponent111122 = ({ title, tableData }) => {
    return (
      <div className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          {title}
        </h1>
  
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-deepPurple text-white">
                {tableData.headers.map((header, index) => (
                  <th key={index} className="py-4 px-6 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`hover:bg-gray-100 ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="py-4 px-6 border-t border-gray-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export const PlanComparison = ({features, heading, title}) => {  
    return (
      <div className="pt-[50px] pb-[50px]" style={{ background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)' }}>
        <p className="text-3xl md:text-4xl font-bold text-center text-black mb-12">{heading}</p>
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center justify-center md:items-start gap-12">
          {/* Left Section with Image */}
          <div className="max-w-[300px] w-full flex-shrink-0 flex items-center justify-center pt-[50px]">
            <img
              src={FourDoctor}
              alt="Table Image"
              className="w-full object-cover rounded-lg"
            />
          </div>
  
          {/* Right Section with Table */}
          
            <div className="flex justify-center items-start gap-1">
              {/* Feature Names Column */}
              <div className="w-1/3 border border-gray-200 rounded-lg bg-white">
                <div className="h-16 flex items-center p-4 border-b border-gray-200 bg-[#EBEDF0] justify-center">
                  <h3 className="font-medium text-black-600">Feature/Aspect</h3>
                </div>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`h-20 flex items-center justify-center p-4 ${
                      index !== features.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <p className="text-black-600 font-bold">{feature.name}</p>
                  </div>
                ))}
              </div>
  
              {/* Main Plan Column */}
              <div className="w-1/3 transform transition-all duration-300 scale-105 shadow-2xl hover:-translate-y-2 hover:scale-110 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-lg bg-white border-2 border-deepPurple">
                <div className="h-16 flex flex-col items-center justify-center bg-deepPurple rounded-t-lg transition-colors duration-300 hover:bg-indigo-800">
                  <div className="flex items-center gap-2">
                    <span className="text-white animate-pulse">★</span>
                    <h3 className="font-bold text-white">Most popular</h3>
                    <span className="text-white animate-pulse">★</span>
                  </div>
                  <p className="font-medium text-white">{title}</p>
                </div>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`h-20 flex items-center justify-center p-4 text-center transition-colors duration-300 hover:bg-indigo-50 ${
                      index !== features.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <p className="text-black-600">{feature.main}</p>
                  </div>
                ))}
              </div>
  
              {/* Other Column */}
              <div className="w-1/3 border border-gray-200 rounded-lg bg-white">
                <div className="h-16 flex items-center p-4 border-b border-gray-200 bg-[#EBEDF0] justify-center">
                  <h3 className="font-medium text-black-600">Other</h3>
                </div>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`h-20 flex items-center p-4 ${
                      index !== features.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <p className="text-black-600">{feature.other}</p>
                  </div>
                ))}
              </div>
            </div>
          
        </div>
      </div>
    );
  };

  export const BenefitsCard = ({
    payment,
    benefitsWorth,
    healthcareServices,
    insuranceDetails,
    validity,
    ageLimit,
    coverage,
  }) => {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Breakdown of Benefits</h2>
  
        <div className="flex justify-around items-center mb-8">
          <div className="text-center">
            <div className="bg-purple-100 text-purple-700 font-bold text-lg py-2 px-4 rounded-full">You Pay</div>
            <div className="text-2xl font-semibold mt-2">₹{payment}</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 text-purple-700 font-bold text-lg py-2 px-4 rounded-full">Get Benefits Worth</div>
            <div className="text-2xl font-semibold mt-2">₹{benefitsWorth}+</div>
          </div>
        </div>
  
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Healthcare Services</h3>
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <tbody>
              {healthcareServices.map((service, index) => (
                <tr
                  key={index}
                  className={`border-t ${index === 0 ? "border-t-0" : "border-gray-200"} bg-gray-${index % 2 === 0 ? "50" : "100"}`}
                >
                  <td className="p-4 text-black-700 font-medium">{service.name}</td>
                  <td className="p-4 text-black-700 font-medium text-right">₹{service.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Healthcare Services</h3>
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <tbody>
              {insuranceDetails.map((detail, index) => (
                <tr
                  key={index}
                  className={`border-t ${index === 0 ? "border-t-0" : "border-gray-200"} bg-gray-${index % 2 === 0 ? "50" : "100"}`}
                >
                  <td className="p-4 text-black-700 font-medium">{detail.name}</td>
                  <td className="p-4 text-black-700 font-medium text-right">₹{detail.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="flex justify-between items-center bg-purple-50 p-4 rounded-lg">
          <div className="text-black-700">
            <div>Validity: <span className="font-medium">{validity}</span></div>
            <div>Age Limit: <span className="font-medium">{ageLimit}</span></div>
            <div>Coverage: <span className="font-medium">{coverage}</span></div>
          </div>
          <button className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-800">Buy Now</button>
        </div>
      </div>
    );
  };

  export const WhyChooseCarePassTaxSaver = () => {
    const features = [
      {
        title: "E-Wallet",
        description: "₹5,000 for Preventive Health Check (PHC) for self and registered family members",
      },
      {
        title: "Unlimited Tele-consultation",
        description: "Doctor consultations via chat, audio, and video for registered members",
      },
      {
        title: "Tax Benefit",
        description: "Avail deduction under Section 80D",
      },
      {
        title: "Customizable Health Packages",
        description: "Choose from various service providers and doctors",
      },
      {
        title: "Substantial Savings",
        description: "Discounts on tests, health packages, pharmacy items, consultations, and more",
      },
      {
        title: "Effortless Service Management",
        description: "Automated confirmations, digital wallet, secured health report storage",
      },
      {
        title: "Discounts on Pharmacy Purchases",
        description: "Up to 18% off on medication and health products on order value over Rs. 500",
      },
      {
        title: "Diagnostic Test Discounts",
        description: "Save up to 60% on diagnostic tests",
      },
      {
        title: "PHC Floater Benefits",
        description: "Extend benefits to family members",
      },
      {
        title: "Save up to 60% on PHC",
        description: "Exclusive discounts for you",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Why Choose CarePass?
        </h1>
  
        <p className="text-lg text-center text-black-700 mb-12">
          Unlock Extra Savings with Our CarePass Tax Saver
        </p>
  
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-deepPurple mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-black-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                  <strong>{feature.title}:</strong> {feature.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="text-center mt-8">
            <p className="text-xl font-semibold text-deepPurple">
                Get Started with CarePass Today!
            </p>
        </div>
      </div>
    );
  };
  
  export const HowItWorks = ({ onBuyNow, steps }) => {
    const videoUrl = "https://drive.google.com/file/d/1bF6cerGu_0Gh-_PsySWyQg1yECQcLs_F/preview";
  
    return (
      <div className="relative py-12 bg-[#FCF9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <p className="text-3xl md:text-4xl font-bold text-center text-black mb-12">How it Works</p>
  
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Section: Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300"
                >
                  <div 
                    className={`
                      p-6 rounded-lg bg-white shadow-md 
                      transition-all duration-300
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-lg text-black-800">
                          {step.title}
                        </h3>
                        <p className="text-black-600 mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
  
              <div className="mt-8 pt-4">
                <button 
                  onClick={onBuyNow} 
                  className="w-full bg-deepPurple text-white py-3 px-8 rounded-lg text-lg font-semibold 
                    hover:bg-purple-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Buy Now
                </button>
              </div>
            </div>
  
            {/* Right Section: Video Thumbnail */}
{/* Right Section: Video Thumbnail and Text */}
<div className="space-y-4">
            <div
              className="flex-1 border-2 border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-gray-400 transition-colors relative"
              onClick={() => window.open(videoUrl, "_blank")}
            >
              <img
                src={HowItWorksVideoThumbnail}
                alt="How it works Video Thumbnail"
                className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <FaPlay className="text-deepPurple text-4xl" />
                </button>
              </div>
            </div>
            <p className="text-black-700 text-md font-bold">Disclaimer: Information above is just for reference. Kindly read T & C of products thoroughly, Do refer to IRDAI guidelines for policy  and tax exemption conditions.</p>
          </div>
          </div>
        </div>
      </div>
    );
  };

export const AboutUsOurWellnessApp = () => {
  const features = [
    {
      icon: FaHeartbeat,
      text: "Personalized Wellness Plans: Get AI-powered customized diet plans and access to expert dieticians for a healthier you."
    },
    {
      icon: FaUserDoctor,
      text: "Doctor Consultations: Enjoy in-person and online consultations with doctors for convenient healthcare management."
    },
    {
      icon: GiWeightLiftingUp,
      text: "Fitness Made Easy: Access discounted gym memberships to kickstart your fitness journey."
    },
    {
      icon: FaBookMedical,
      text: "Knowledge at Your Fingertips: Explore our knowledge hubs, webinars, and more to stay updated on the latest health and wellness trends."
    },
    {
      icon: RiDiscountPercentFill,
      text: "Exclusive Discounts: Avail exclusive discounts on pharmacy, diagnostics, and health checks to save on your healthcare expenses."
    },
    {
      icon: BsHouseHeartFill,
      text: "Digital Health Management: Store and manage your digital health records, track your progress with personalized health assessments, and stay on top of your health with our intuitive trackers."
    }
  ];

  return (
    <div className="py-12 px-6 md:px-12" style={{ background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)' }}>
      <p className="text-3xl md:text-4xl font-bold text-center text-black mb-12">About Our Wellness App</p>
      <div className="py-12 md:py-4 flex items-center justify-center px-[20px]">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] gap-8">
          {/* Text Section */}
          <div className="flex items-center justify-center flex-col md:w-1/2 gap-4">
            <ul className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const [boldText, restText] = feature.text.split(':');
                return (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <IconComponent className="w-6 h-6 text-black-900" />
                    </div>
                    <span className="text-lg text-black-700">
                      <strong>{boldText}:</strong> {restText}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
              <img
                  src={AboutOurWellnessApp}
                  alt="Health & Wellness"
                  className="w-full max-w-[500px]"
              />
          </div>
      </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg text-black-800 font-semibold">
          Download The wellness Corner APP using the scanner provided above
        </p>
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

export const ProductCards = () => {
  const products = [
    {
      title: "CarePass Tax Saver",
      description: [
        "Annual health check-ups and Unlimited Tele-Consultations with ₹5,000 digital wallet.",
        "Unlock benefits worth over ₹17,000+.",
      ],
      link: "/tax-saver",
      Icon: TaxSaver
    },
    {
      title: "CarePass Silver Plan",
      description: [
        "Comprehensive primary care services with a ₹10,000 digital wallet for doctor consultations, diagnostics, pharmacy, and more.",
        "Unlock benefits worth over ₹30,000+.",
      ],
      link: "/silver-plan",
      Icon: Silver
    },
    {
      title: "CarePass Gold Plan",
      description: [
        "Includes Critical illness coverage of ₹2,50,000 and a ₹15,000 digital wallet for Annual Health Checks and Primary Care services.",
        "Unlock benefits worth over ₹2,50,000+.",
      ],
      link: "/gold-plan",
      Icon: Gold
    },
    {
      title: "CarePass Platinum Plan",
      description: [
        "The ultimate protection plan with ₹2,50,000 critical illness coverage, ₹15,000 digital wallet, base health coverage, and super top-up coverage of ₹25,00,000.",
        "Unlock benefits worth over ₹30,00,000+.",
      ],
      link: "/platinum-plan",
      Icon: Platinum
    },
  ];

  return (
    <div className="py-12 px-4 md:px-12" style={{
      background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
  }}>
      <h1 className="text-3xl font-bold text-center text-black-900 mb-8">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          const IconComponent = product.Icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Background Icon */}
              <div className="absolute top-0 right-0 w-full h-full flex justify-end items-center opacity-15 group-hover:opacity-40 transition-opacity duration-300">
                {/* <IconComponent className="w-32 h-32 text-purple-900 mr-4" /> */}
                <img
                  src={product.Icon}
                  alt={`${product.title} icon`}
                  className="w-32 h-32 mr-3"
                />
              </div>
              
              <h2 className="text-xl font-bold text-black-900 mb-4 relative z-10">
                {product.title}
              </h2>
              
              <div className="text-black-700 space-y-2 mb-6 relative z-10">
                {product.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              
              <a
                href={product.link}
                className="text-purple-900 font-semibold underline hover:text-purple-700 transition relative z-10"
              >
                Know More
              </a>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

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

export const ComparisonDemo = () => {
  return (
    <ComparisonTable 
      planTitle="CarePass Platinum Plan"
      price="15,000"
      data={features} // Reusing features array
    />
  );
}

export const BenefitsBreakdown = ({ youPay, benefitsAmount, title1, title2, savings, benefits1, benefits2, showFooter, showCoverage }) => {
  return (
    <div className="py-4 px-6 md:px-12" style={{ background: "linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)" }}>
      <div className="max-w-[900px] mx-auto w-full p-6">
      <p className="text-2xl sm:text-3xl font-semibold text-deepPurple text-center mb-5">Breakdown of benefits</p>
        
        {/* Top Cards */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-200 bg-white">
            {/* <YouPay className="text-purple-600 w-5 h-5" /> */}
            <img
              src={YouPay}
              alt="you pay"
              className="object-contain pr-4"
            />
            <span>You Pay <br /><span className="text-deepPurple font-bold">₹{youPay}</span></span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-200 bg-white">
            <img
              src={YouGet}
              alt="you get"
              className="object-contain pr-4"
            />
            <span>Get Benefits Worth <br /><span className="text-deepPurple font-bold">₹{benefitsAmount}</span></span>
          </div>
          {savings ?
            <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-200 bg-white">
              <img
                src={YouGet}
                alt="you get"
                className="object-contain pr-4"
              />
              <span>Savings: <br /><span className="text-deepPurple font-bold">{savings}</span></span>
            </div>
            :
            null
          }
          
        </div>

        {/* Benefits Section 1 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-center">{title1}</h3>
          <div className="border rounded-lg p-6 border-purple-200 bg-white">
            {benefits1.map((item, index) => (
              <div key={index} className="border-b last:border-b-0">
                <div className="flex justify-between items-center py-3">
                  <span className="text-black-800 font-medium">{item.service}</span>
                  {item.amount ? <span className="text-black-800 font-medium ml-auto">₹ {item.amount}</span> : null}
                </div>
                {item.subItems && (
                  <div className="pl-6 mb-3">
                    {item.subItems.map((subItem, subIndex) => (
                      <div 
                        key={subIndex} 
                        className={`flex items-center justify-between py-2 border-b last:border-b-0`}
                      >
                        <div className="flex items-center gap-2">
                          <FaRegDotCircle className="w-4 h-4 text-purple-600" />
                          <span className="text-black-600">{subItem.service}</span>
                        </div>
                        {subItem.amount ? <span className="text-black-600">₹ {subItem.amount}</span> : null}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section 2 */}
        {benefits2 ?
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">{title2}</h3>
            <div className="border rounded-lg p-6 border-purple-200 bg-white">
            {benefits2.map((item, index) => (
              <div key={index} className="border-b last:border-b-0">
                <div className="flex justify-between items-center py-3">
                  <span className="text-black-700 font-medium">{item.service}</span>
                  {/* <span className="font-medium">₹ {item.amount}</span> */}
                  {item.amount ? <span className="text-black-800 font-medium ml-auto">₹ {item.amount}</span> : null}
                </div>
                {item.subItems && (
                  <div className="pl-6 mb-3">
                    {item.subItems.map((subItem, subIndex) => (
                      <div 
                        key={subIndex} 
                        className={`flex items-center justify-between py-2 border-b last:border-b-0`}
                      >
                        <div className="flex items-center gap-2">
                          <FaRegDotCircle className="w-4 h-4 text-purple-600" />
                          <span className="text-black-600">{subItem.service}</span>
                        </div>
                        {subItem.amount ? <span className="text-black-600">₹ {subItem.amount}</span> : null}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>
          :
          null
        }

        {/* Footer Info */}
        {showFooter ?
          <div className="flex flex-wrap justify-center gap-6 text-sm text-black-600">
            <div className="flex items-center gap-2">
              <BsFillPatchCheckFill className="text-purple-600 w-4 h-4" />
              <span className="text-black-600">Validity: <span className="text-black-600 font-bold">1 year</span></span>
            </div>
            <div className="flex items-center gap-2">
              <FaPeopleGroup className="text-purple-600 w-4 h-4" />
              <span className="text-black-600">Age Limit: {showCoverage ? <span className="text-black-600 font-bold">18 to 60 years</span> : 
              <span className="text-black-600 font-bold">No Limit</span>}</span>
            </div>
            <div className="flex items-center gap-2">
                <FaPeopleRoof className="text-purple-600 w-4 h-4" />
                <span className="text-black-600">Coverage: <span className="text-black-600 font-bold">Self, spouse, and two children</span></span>
            </div>
          </div>
          :
          null
        }
      </div>
    </div>
  );
};

export const ProductsIntro = () => {
  return (
    <div className="px-[20px] flex items-center justify-center" style={{ background: "linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)" }}>
      <div className="flex flex-col max-w-[1200px] py-[16px] md:py-[20px] gap-3 md:gap-6">
        {/* Center-Aligned "Our Products" Title */}
        <p className="font-bold text-xl md:text-3xl mx-auto text-center">
          Our Products
        </p>
        <div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
            {/* Responsive Image Section - Reduced size */}
            <div className="w-full md:w-2/5">
              <img
                src={AboutUsTwo}
                alt="Health & Wellness"
                className="w-full max-h-[280px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 md:w-3/5">
              <p className="leading-6 md:leading-7 text-justify">
                At CarePass, we offer a range of health plans designed to cater to the diverse needs of individuals and families.
              </p>
              <p className="leading-6 md:leading-7 text-justify">
                Our products provide comprehensive insurance coverage that not only protects you in emergencies but also prioritizes preventive care, while offering tax savings benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CarePassTable = () => {
  const features = [
    {
      name: "CarePass Tax Saver",
      label: "Tax Saver",
      iconImage: TaxSaver,
      link: "/tax-saver",
      features: [
        { text: "E-wallet. ₹5,000 for AHC.", strike: false },
        { text: "Annual Health checks", strike: false },
        { text: "Unlimited Tele consultations", strike: false },
        { text: "Wellness APP benefits: Discounted Gym memberships, Pharmacy & Health checks, etc.", strike: false },
        { text: "In-clinic Doctor consultation", strike: true },
        { text: "Pharmacy", strike: true },
        { text: "Dental Care", strike: true },
        { text: "Vision Care", strike: true },
        { text: "Critical Illness Coverage", strike: true },
        { text: "Base Insurance coverage", strike: true },
        { text: "Super Top up- Insurance coverage", strike: true },
      ],
    },
    {
      name: "CarePass Silver Plan",
      label: "Silver",
      iconImage: Silver,
      link: "/silver-plan",
      features: [
        { text: "E-wallet. ₹10,000 with pre-defined sub limits", strike: false },
        { text: "In-clinic Doctor consultation", strike: false },
        { text: "RX. Pharmacy", strike: false },
        { text: "RX. Diagnostic test", strike: false },
        { text: "Dental Care", strike: false },
        { text: "Vision Care", strike: false },
        { text: "Wellness APP benefits: Discounted Gym memberships, Pharmacy & Health checks, etc.", strike: false },
        { text: "Annual Health checks", strike: true },
        { text: "Critical Illness Coverage", strike: true },
        { text: "Base Insurance coverage", strike: true },
        { text: "Super Top up- Insurance coverage", strike: true },
      ],
    },
    {
      name: "CarePass Gold Plan",
      label: "Gold",
      iconImage: Gold,
      link: "/gold-plan",
      features: [
        { text: "E-wallet. ₹15,000 for AHC & Primary care", strike: false },
        { text: "Annual Health checks", strike: false },
        { text: "Unlimited Tele consultations", strike: false },
        { text: "Wellness APP benefits: Discounted Gym memberships, Pharmacy & Health checks, etc.", strike: false },
        { text: "In-clinic Doctor consultation", strike: false },
        { text: "Rx. Pharmacy", strike: false },
        { text: "Dental Care", strike: false },
        { text: "Vision Care", strike: false },
        { text: "Critical Illness Coverage", strike: false },
        { text: "Base Insurance coverage", strike: true },
        { text: "Super Top up- Insurance coverage", strike: true },
      ],
    },
    {
      name: "CarePass Platinum Plan",
      label: "Platinum",
      iconImage: Platinum,
      link: "/platinum-plan",
      features: [
        { text: "E-wallet. ₹15,000 for AHC & Primary care", strike: false },
        { text: "Annual Health checks", strike: false },
        { text: "Unlimited Tele consultations", strike: false },
        { text: "In-clinic Doctor consultation", strike: false },
        { text: "Pharmacy", strike: false },
        { text: "Dental Care", strike: false },
        { text: "Vision Care", strike: false },
        { text: "Critical Illness Coverage", strike: false },
        { text: "Base Insurance coverage", strike: false },
        { text: "Super Top up- Insurance coverage", strike: false },
        { text: "Wellness APP benefits: Discounted Gym memberships, Pharmacy & Health checks, etc.", strike: false },
      ],
    },
  ];

  return (
    <div className="pt-12 pb-12" style={{ background: "#FCF9FF" }}>
      <div className="max-w-6xl mx-auto w-full p-5">
        <div className="px-[20px] flex items-center justify-center mb-10">
          <p className="font-bold text-xl md:text-4xl mx-auto">Explore our offerings below</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((plan, columnIndex) => (
            <div
              key={columnIndex}
              className="border border-gray-200 rounded-lg bg-white transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-purple-800 relative z-10"
            >
              <div className="p-6 border-b border-gray-200 flex flex-col items-center gap-4">
                <div className="w-25 h-25 rounded-full flex items-center justify-center">
                  <img
                    src={plan.iconImage}
                    alt={`${plan.label} icon`}
                    className="w-24 h-24"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-black-800">{plan.name}</h3>
                </div>
              </div>
              {plan.features.map((feature, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`min-h-[80px] flex items-center justify-center p-4 text-center ${
                    rowIndex !== plan.features.length - 1
                      ? "border-b border-black-200"
                      : ""
                  }`}
                >
                  <p
                    className={`text-black-800 ${
                      feature.strike ? "line-through" : ""
                    }`}
                  >
                    {feature.text}
                  </p>
                </div>
              ))}
              {/* Know More Link */}
              <div className="p-4 text-center border-t border-gray-200">
                  <a 
                    href={plan.link}
                    className="text-purple-900 font-semibold underline hover:text-purple-700 transition relative z-10"
                  >
                    Know More
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

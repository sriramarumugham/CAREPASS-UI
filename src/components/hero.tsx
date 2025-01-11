import Gradient from "../assets/gradient.png";
import TaxBefnifitsSvg from '../assets/tax-benifits-hero.svg';
import PharmacyBenifitsSvg from '../assets/pharmacy-purchase.svg';
import PhoneSvg from '../assets/pohone.svg';
import WalletSvg from '../assets/wallet.svg';
import PercentageSvg from '../assets/percentage.svg';
import RewardSvg from '../assets/reward.svg'
import { Button } from '@headlessui/react'
import { useEffect, useState } from "react";
import MascotGif from '../assets/mascot.gif';
import silver_image from '../assets/carepass_silver.png';
import gold_image from '../assets/carepass_gold.png';
import platinum_image from '../assets/carepass_platinum.png';
import { Carousel } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { GiMedicines } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";
import { FaDiagnoses } from "react-icons/fa";
import { PiSunglassesThin } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import { RiHandCoinLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegHospital } from "react-icons/fa";

const AnimatedBenifites11 = () => {

    const Benifits = [
        {
            logo: TaxBefnifitsSvg, description: 'Tax benefit under 80D'
        },
        {
            logo: PharmacyBenifitsSvg, description: 'Discounts on Pharmacy Purchase'
        },
        {
            logo: PhoneSvg, description: 'Unlimited Tele- consultation'
        },
        {
            logo: WalletSvg, description: 'Wallet mount ₹5000 for PHC'
        },
        {
            logo: PercentageSvg, description: 'Follow up HC for dependents up to 60% Discounts'
        },
        {
            logo: RewardSvg, description: 'Earn Rewards and TRU coins'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setFade('opacity-0');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % Benifits.length);
                setFade('opacity-100');
            }, 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, [Benifits.length]);

    const currentBenefit = Benifits[currentIndex];

    return (
        <div className="bg-white w-fit rounded-lg shadow-md">
            <div className={`min-w-[237px] min-h-[48px] max-w-[237px] px-3 flex gap-3 items-center transition-opacity duration-500 ${fade} flex gap-3 items-center`}>
                <img src={currentBenefit.logo} className="w-[14px] h-[14px]" alt="Benefit Logo" />
                <p className="font-extralight text-xs">{currentBenefit.description}</p>
            </div>
        </div>
    );
}

const AnimatedBenefits = () => {
    const benefits = [
        {
            icon: <CiDiscount1 className="w-4 h-4" />,
            description: 'Tax benefit under 80D',
            position: 'top-20 left-1/4'
        },
        {
            icon: <GiMedicines className="w-4 h-4" />,
            description: 'Discounts on Pharmacy Purchase',
            position: 'top-[35%] right-0'
        },
        {
            icon: <FaUserDoctor className="w-4 h-4" />,
            description: 'Unlimited Tele-consultation',
            position: 'top-1/2 right-0'
        },
        {
            icon: <IoWalletOutline className="w-4 h-4" />,
            description: 'Wallet mount ₹5000 for PHC',
            position: 'bottom-1/4 right-0'
        },
        {
            icon: <FaRegHospital className="w-4 h-4" />,
            description: 'Follow up HC for dependents up to 60% Discounts',
            position: 'bottom-12 left-1/2'
        },
        {
            icon: <RiHandCoinLine className="w-4 h-4" />,
            description: 'Earn Rewards and TRU coins',
            position: 'bottom-12 left-0'
        },
    ];

    const [activeIndices, setActiveIndices] = useState([0]);
    const [fade, setFade] = useState({});

    useEffect(() => {
        // Initialize all benefits with opacity 0
        const initialFade = benefits.reduce((acc, _, index) => {
            acc[index] = 'opacity-0';
            return acc;
        }, {});
        setFade(initialFade);

        // Sequence to show benefits one by one
        let currentIndex = 0;
        const interval = setInterval(() => {
            setFade(prev => ({
                ...prev,
                [currentIndex]: 'opacity-100'
            }));
            currentIndex = (currentIndex + 1) % benefits.length;

            // Once all benefits are shown, keep them visible
            if (currentIndex === 0) {
                clearInterval(interval);
            }
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full">
            {/* Mascot Image Container */}
            <div className="relative">
                <img
                    src={MascotGif}
                    className="w-full max-w-[663px] max-h-[521px] md:w-auto md:max-w-[663px] relative md:left-[-100px]"
                    alt="Hero Image"
                />

                {/* Benefits positioned around the image */}
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className={`absolute ${benefit.position} ${fade[index]} transition-opacity duration-500`}
                    >
                        <div className="bg-white rounded-lg shadow-md p-3 flex gap-3 items-center min-w-[237px] min-h-[48px] max-w-[237px]">
                            <div className="text-deepPurple">
                                {benefit.icon}
                            </div>
                            <p className="font-extralight text-xs">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HeroSection = () => {

    const navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(route, { relative: 'path' })
    }

    const Plan1 = () => {
        return (
            <div className="px-[20px] py-[20px] flex flex-col lg:flex-row items-center justify-center gap-2 ">
                {/* <div className="relative">
                    <img
                        src={MascotGif}
                        className="w-full max-w-[663px] max-h-[521px] md:w-auto md:max-w-[663px] relative md:left-[-100px]"
                        alt="Hero Image"
                    />
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 md:left-[30%] md:bottom-20 md:transform-none">
                        <AnimatedBenifites />
                    </div>
                </div> */}

                <div className="relative">
                    {/* <AnimatedBenefits /> */}
                    <img
                        src={MascotGif}
                        className="w-full max-w-[663px] max-h-[521px] md:w-auto md:max-w-[663px] relative md:left-[-100px]"
                        alt="Hero Image"
                    />
                </div>

                <div className="bg-white rounded-xl max-w-[521px] px-[20px] md:px-[10px] py-[13px]  lg:p-9 flex flex-col gap-[10px] h-fit">
                    <div className="border border-1 border-black rounded-[25px] px-[10px] w-fit">
                        <p className="text-black font-bold">CarePass Tax Saver Plan</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Package Price: ₹5,000 <br />
                            Actual Value of Benefits: ₹17,000+
                        </p>
                        <p className="font-light text-[#A689B0]">
                            The Ultimate Health Bundle: Annual Health Checks, Unlimited Tele-Consults & Exclusive Discounts!
                        </p>

                        <Button onClick={() => handleNavigation(ROUTES.TAX_SAVER)} className="inline-flex items-center gap-2 rounded-3xl justify-center  w-full lg:w-fit px-9 bg-deepPurple  py-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-purple-950 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            Know more
                        </Button>
                    </div>
                </div>
            </div>

        )
    }

    const Plan2 = () => {
        const silverPlanIcons = [
            {
                icon: <FaUserDoctor size={24} className="text-deepPurple" />,
                title: "Doctor Consultations (In-clinic & Online)",
                value: "₹10,000",
            },
            {
                icon: <FaDiagnoses size={24} className="text-deepPurple" />,
                title: "Diagnostics covered till",
                value: "₹5,000",
            },
            {
                icon: <GiMedicines size={24} className="text-deepPurple" />,
                title: "Pharmacy Purchases worth up to",
                value: "₹5,000",
            },
            {
                icon: <TbDental size={24} className="text-deepPurple" />,
                title: "Dental Care up to",
                value: "₹3,000",
            },
            {
                icon: <PiSunglassesThin size={24} className="text-deepPurple" />,
                title: "Vision Care Products up to",
                value: "₹2,000",
            },
        ];
        return (
            <div className="px-[20px] mt-[10px] mt-[45px] py-[20px] flex flex-col lg:flex-row items-center justify-center gap-2">
                <div className="relative ml-[25px]">
                    <img
                        src={silver_image}
                        className="w-full max-w-[400px] max-h-[400px] md:w-auto md:max-w-[521px] relative md:left-[-100px] object-contain"
                        alt="CarePass Silver"
                    />
                </div>

                <div className="bg-white rounded-xl max-w-[650px] px-[20px] md:px-[10px] py-[13px] lg:p-9 flex flex-col gap-[10px] h-fit">
                    <div className="border border-1 border-black rounded-[25px] px-[10px] w-fit">
                        <p className="text-black font-bold">CarePass Silver</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Pay just ₹5,000 and receive benefits valued at ₹30,000 + </p>
                        <p className="font-light text-[#A689B0]">
                            Get an e-Wallet Amount of Rs. 10,000 For Comprehensive Primary Care Services!
                        </p>
                        <div className="w-full">
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {silverPlanIcons.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-lg"
                                    >
                                        <div className="w-12 h-12 bg-purple-200 border-white rounded-full flex items-center justify-center mb-2">
                                            {service.icon}
                                        </div>
                                        <p className="text-sm mb-1">{service.title}</p>
                                        <p className="text-deepPurple font-bold">
                                            {service.value}
                                            {index === 0 && <span className="text-xs align-top">*</span>}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button onClick={() => handleNavigation(ROUTES.SILVER_PLAN)} className="inline-flex items-center gap-2 rounded-3xl justify-center  w-full lg:w-fit px-9 bg-deepPurple  py-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-purple-950 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            Know more
                        </Button>
                    </div>
                </div>

            </div>

        )
    }

    const Plan3 = () => {
        return (
            <div className="px-[20px] py-[20px] mt-[45px] flex flex-col lg:flex-row items-center justify-center gap-2 ">
                <div className="relative">
                    <img
                        src={gold_image}
                        className="w-full max-w-[521px] max-h-[521px] md:w-auto md:max-w-[521px] relative md:left-[-100px]"
                        alt="CarePass Silver"
                        width="521"
                        height="521"
                    />
                </div>

                <div className="bg-white rounded-xl max-w-[521px] px-[20px] md:px-[10px] py-[13px] lg:p-9 flex flex-col gap-[10px] h-fit">
                    <div className="border border-1 border-black rounded-[25px] px-[10px] w-fit">
                        <p className="text-black font-bold">CarePass Gold</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Pay just ₹10,000 and receive benefits valued at ₹3,00,000+ </p>
                        <p className="font-light text-[#A689B0]">
                            Comprehensive coverage: CarePass Tax Saver + CarePass Silver + Critical Illness Insurance
                        </p>
                        <Button onClick={() => handleNavigation(ROUTES.GOLD_PLAN)} className="inline-flex items-center gap-2 rounded-3xl justify-center  w-full lg:w-fit px-9 bg-deepPurple  py-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-purple-950 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            Know more
                        </Button>
                    </div>
                </div>

            </div>

        )
    }

    const Plan4 = () => {
        return (
            <div className="px-[20px] mt-[45px] py-[20px] flex flex-col lg:flex-row items-center justify-center gap-2 ">
                <div className="relative">
                    <img
                        src={platinum_image}
                        className="w-full max-w-[521px] max-h-[521px] md:w-auto md:max-w-[521px] relative"
                        alt="CarePass Silver"
                    />
                </div>

                <div className="bg-white rounded-xl max-w-[521px] px-[20px] md:px-[10px] py-[13px]  lg:p-9 flex flex-col gap-[10px] h-fit" >
                    <div className="border border-1 border-black rounded-[25px] px-[10px] w-fit">
                        <p className="text-black font-bold">CarePass Platinum</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Pay just ₹15,000 and receive benefits valued at ₹28,00,000 </p>
                        <p className="font-light text-[#A689B0]">
                            Comprehensive Coverage: CarePass Tax Saver + CarePass Silver + Critical Illness Insurance + Super Top-up Insurance with Base Insurance
                        </p>
                        <Button onClick={() => handleNavigation(ROUTES.SUPER_TOPUP)} className="inline-flex items-center gap-2 rounded-3xl justify-center  w-full lg:w-fit px-9 bg-deepPurple  py-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-purple-950 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            Know more
                        </Button>
                    </div>
                </div>

            </div>

        )
    }

    return (
        <div
            className="w-full h-auto min-h-[450px] bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${Gradient})` }}
        >
            <Carousel
                className="rounded-xl max-w-[1200px] m-auto"
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                autoplay='true'
                loop='true'
                prevArrow={({ handlePrev }) => (
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-white-200 shadow-md hover:bg-gray-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}
                nextArrow={({ handleNext }) => (
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-white-200 shadow-md hover:bg-gray-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
            >
                <Plan1 />
                <Plan2 />
                <Plan3 />
                <Plan4 />

            </Carousel>
        </div>
    );
}

export default HeroSection;



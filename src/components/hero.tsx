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
import useCartStore from "../store/cart-store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { FaHeartbeat, FaLaptopMedical } from "react-icons/fa";
import { MdOutlineMobileFriendly, MdHealthAndSafety } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaUserDoctor, FaShieldHeart } from "react-icons/fa6";
import { FaClinicMedical, FaTooth, FaCheckCircle } from "react-icons/fa";
import { IoGlasses } from "react-icons/io5";
import { TbHealthRecognition } from "react-icons/tb";

const AnimatedBenifites = () => {

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

const products = [
    {
        productId: "product2",
        productName: "CarePass Silver",
        price: 5000
    },
    {
        productId: "product3",
        productName: "CarePass Gold",
        price: 10000
    },
    {
        productId: "product4",
        productName: "CarePass Platinum",
        price: 15000
    }
]

const HeroSection = () => {

    const { addToCart } = useCartStore();
    const navigate = useNavigate();

    const handleBuyNow = (index: number) => {
        const product = products[index];
        const { productId, productName, price } = product
        addToCart({ productId, productName, price });
        navigate(ROUTES.CART, { relative: 'path' })
    };

    const handleNavigation = (route: string) => {
        navigate(route, { relative: 'path' })
    }

    const Plan1 = () => {
        return (
            <div className="px-[20px] py-[20px] flex flex-col lg:flex-row items-center justify-center gap-2 ">
                <div className="relative">
                    <img
                        src={MascotGif}
                        className="w-full max-w-[663px] max-h-[521px] md:w-auto md:max-w-[663px] relative md:left-[-100px]"
                        alt="Hero Image"
                    />
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 md:left-[30%] md:bottom-20 md:transform-none">
                        <AnimatedBenifites />
                    </div>
                </div>
    
                <div className="bg-white rounded-xl max-w-[521px] px-[20px] md:px-[10px] py-[13px]  lg:p-9 flex flex-col gap-[10px] h-fit">
                    <div className="border border-1 border-[#A689B0] rounded-[25px]  px-[10px] font-light w-fit">
                        <p className="text-[#A689B0]">CarePass Tax Saver Plan</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Package Price: ₹5,000 <br />
                        Actual Value of Benefits: ₹17,000+
                        </p>
                        <p className="font-light text-[#A689B0]">
                            <span className="flex items-center gap-2">
                                <FaHeartbeat /> Annual Health Checks (₹8,000)
                            </span>
                            <span className="flex items-center gap-2">
                                <FaLaptopMedical /> Unlimited Tele-consultation (₹2,400)
                            </span>
                            <span className="flex items-center gap-2">
                                <MdOutlineMobileFriendly /> Application Access (₹2,000)
                            </span>
                            <span className="flex items-center gap-2">
                                <RiDiscountPercentFill /> Tax Benefit under 80D (₹5,000)
                            </span>
                            <span className="flex items-center gap-2">
                                <GiMedicines /> Discounts on Pharmacy (up to 18%)
                            </span>
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
        return (
            <div className="px-[20px] mt-[10px] mt-[45px] py-[20px] flex flex-col lg:flex-row items-center justify-center gap-2">
                <div className="relative ml-[25px]">
                    <img
                        src={silver_image}
                        className="w-full max-w-[521px] max-h-[521px] md:w-auto md:max-w-[521px] relative md:left-[-100px]"
                        alt="CarePass Silver"
                        width="521"
                        height="521"
                    />
                </div>
    
                <div className="bg-white rounded-xl max-w-[521px] px-[20px] md:px-[10px] py-[13px] lg:p-9 flex flex-col gap-[10px] h-fit">
                    <div className="border border-1 border-[#A689B0] rounded-[25px]  px-[10px] font-light w-fit">
                        <p className="text-[#A689B0]">CarePass Silver</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Pay just ₹5,000 and receive benefits valued at ₹30,000 + </p>
                        <p className="font-light text-[#A689B0]">
                            <span className="flex items-center gap-2">
                                <FaUserDoctor /> Doctor Consultations (In-clinic & Online): ₹10,000
                            </span>
                            <span className="flex items-center gap-2">
                                <GiMedicines /> Medicines: ₹6,000
                            </span>
                            <span className="flex items-center gap-2">
                                <FaClinicMedical /> Diagnostics: ₹7,000
                            </span>
                            <span className="flex items-center gap-2">
                                <FaTooth /> Dental Care: ₹4,200
                            </span>
                            <span className="flex items-center gap-2">
                                <IoGlasses /> Vision Care: ₹2,800
                            </span>
                        </p>
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
                    <div className="border border-1 border-[#A689B0] rounded-[25px]  px-[10px] font-light w-fit">
                        <p className="text-[#A689B0]">CarePass Gold</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Pay just ₹10,000 and receive benefits valued at ₹3,00,000+ </p>
                        <p className="font-light text-[#A689B0]">
                            <span className="flex items-center gap-2">
                                <FaHeartbeat /> Preventive Health Check: ₹8,000
                            </span>
                            <span className="flex items-center gap-2">
                                <FaUserDoctor /> Doctor Consultation: ₹12,400
                            </span>
                            <span className="flex items-center gap-2">
                                <MdOutlineMobileFriendly /> App Access: ₹2,000
                            </span>
                            <span className="flex items-center gap-2">
                                <GiMedicines /> Medicines: ₹6,000
                            </span>
                            <span className="flex items-center gap-2">
                                <FaClinicMedical /> Diagnostic: ₹7,000
                            </span>
                            <span className="flex items-center gap-2">
                                <FaTooth /> Dental Care: ₹4,200
                            </span>
                            <span className="flex items-center gap-2">
                                <IoGlasses /> Vision Care: ₹2,800
                            </span>
                            <span className="flex items-center gap-2">
                                <FaShieldHeart /> Critical Illness: ₹2,50,000
                            </span>
                            <span className="flex items-center gap-2">
                                <RiDiscountPercentFill /> Tax Benefits Under 80D: ₹10,000
                            </span>
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
        const benefits = [
            { text: 'Preventive Health Check: ₹8,000', icon: <FaHeartbeat /> },
            { text: "Doctor Consultation: ₹12,400", icon: <FaUserDoctor /> },
            { text: "App Access: ₹2,000", icon: <MdOutlineMobileFriendly /> },
            { text: "Medicines: ₹6,000 ", icon: <GiMedicines /> },
            { text: 'Diagnostic: ₹7,000', icon: <FaClinicMedical /> },
            { text: 'Dental Care: ₹4,200', icon: <FaTooth /> },
            { text: 'Vision Care: ₹2,800', icon: <IoGlasses /> },
            { text: 'Critical Illness: ₹2,50,000', icon: <FaShieldHeart /> },
            { text: 'Health Insurance Benefits', icon: <MdHealthAndSafety /> },
            { text: 'Super Top-Up: ₹15,00,000/ ₹25,00,000', icon: <FaCheckCircle /> },
            { text: 'Health Insurance: ₹3,00,000/₹5,00,000', icon: <TbHealthRecognition /> },
            { text: 'Tax Benefits Under 80D: ₹15,000', icon: <RiDiscountPercentFill /> },
          ];
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
                    <div className="border border-1 border-[#A689B0] rounded-[25px]  px-[10px] font-light w-fit">
                        <p className="text-[#A689B0]">CarePass Platinum</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Pay just ₹15,000 and receive benefits valued at ₹28,00,000 </p>
                        <p className="font-light text-[#A689B0]">
                        {benefits.map((benefit, index) => (
                            <span key={index} className="flex items-center gap-1">
                            {benefit.icon} {benefit.text}
                            {index < benefits.length - 1 && <br />}
                            </span>
                        ))}
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



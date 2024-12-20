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
  Annual Health Checks (₹8,000)<br />
  Unlimited Tele-consultation (₹2,400)<br />
  Application Access (₹2,000)<br />
  Tax Benefit under 80D (₹5,000)<br />
  Discounts on Pharmacy (up to 18%)
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
                        Unlock ₹30,000+ in Benefits for Just ₹5,000! Protect Your Loved Ones with Our Primary Care Services and Flexible Digital Wallet
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
                        Experience unmatched peace of mind with CarePass Gold, the ultimate healthcare solution for you and your loved ones. This premium product seamlessly integrates the benefits of Tax Saver and Silver, with an added layer of critical illness coverage.
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
                    <div className="border border-1 border-[#A689B0] rounded-[25px]  px-[10px] font-light w-fit">
                        <p className="text-[#A689B0]">CarePass Platinum</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mb-5">
                        <p className="text-2xl font-bold text-deepPurple">Pay just ₹15,000 and receive benefits valued at ₹28,00,000 </p>
                        <p className="font-light text-[#A689B0]">
                        Experience unparalleled protection and care with CarePass Platinum, a cohesive product combining the benefits of Tax Saver, Silver, and Gold, enhanced with a super top-up.
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



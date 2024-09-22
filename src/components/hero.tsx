import Gradient from "../assets/gradient.png";
import hero from '../assets/hero.png'
import TaxBefnifitsSvg from '../assets/tax-benifits-hero.svg';
import PharmacyBenifitsSvg from '../assets/pharmacy-purchase.svg';
import PhoneSvg from '../assets/pohone.svg';
import WalletSvg from '../assets/wallet.svg';
import PercentageSvg from '../assets/percentage.svg';
import RewardSvg from '../assets/reward.svg'
import { Button } from '@headlessui/react'
import { useEffect, useState } from "react";


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
    const [fade, setFade] = useState('opacity-0');

    useEffect(() => {
        const interval = setInterval(() => {
            setFade('opacity-0');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % Benifits.length);
                setFade('opacity-100');
            }, 500);
        }, 1000);
        return () => clearInterval(interval);
    }, [Benifits.length]);

    const currentBenefit = Benifits[currentIndex];

    return (
        <div className="bg-white w-fit rounded-lg shadow-md">
            <div className={`min-w-[237px] min-h-[48px] max-w-[237px]   px-3  flex gap-3 items-center transition-opacity duration-500 ${fade} flex gap-3 items-center`}>
                <img src={currentBenefit.logo} className="w-[14px] h-[14px]" alt="Benefit Logo" />
                <p className="font-extralight text-xs">{currentBenefit.description}</p>
            </div>
        </div>
    );
}
const HeroSection = () => {
    return (
        <div
            className="w-full px-[5px] py-[16px]  min-h-[450px] h-auto bg-cover bg-center flex flex-col lg:flex-row items-center justify-evenly gap-5 mg:gap-0 "
            style={{ backgroundImage: `url(${Gradient})` }}
        >
            <div className="relative ">
                <img
                    src={hero}
                    className="w-full max-w-[663px] max-h-[521px] md:w-auto md:max-w-[663px]"
                    alt="Hero Image"
                />
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 md:bottom-10 md:right-10 md:transform-none">
                    <AnimatedBenifites />
                </div>
            </div>

            <div className="bg-white rounded-xl max-w-[521px] px-[8px] py-[13px]  lg:p-9 flex flex-col gap-[10px] h-fit " >
                <div className="border border-1 border-[#A689B0] rounded-[25px]  px-[10px] font-light w-fit">
                    <p className="text-[#A689B0]">CarePass Tax Saver</p>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <p className="text-2xl font-bold text-deepPurple">Pay just ₹ 5,000 and receive benefits valued at ₹ 17,000 </p>
                    <p className="font-light text-[#A689B0]">
                        Elevate Wellness Offering and Maximize Tax Benefits
                    </p>
                    <Button className="inline-flex items-center gap-2 rounded-3xl justify-center  w-full lg:w-fit px-9 bg-deepPurple  py-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-purple-950 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        Know more
                    </Button>
                </div>
            </div>

        </div>
    );
}

export default HeroSection;

import { FC } from 'react';
import Pharmacy from '../assets/GOLD/Pharmacy.svg';
import Rewards from '../assets/GOLD/Rewards.svg';
import Tax from '../assets/GOLD/Tax.svg';
import Wallet from '../assets/GOLD/Wallet.svg';
import discound from '../assets/GOLD/discound.svg';
import haeadpone from '../assets/GOLD/haeadpone.svg';
import hand from '../assets/GOLD/hand.svg';
import tag from '../assets/GOLD/tag.svg';
import { MdOutlineMobileFriendly, MdHealthAndSafety } from "react-icons/md";
import { FaHospital, FaUserShield } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";

export const goldPlanGrid = [
    { iconSrc: Wallet, description: "E-Wallet ₹10,000", icon: false },
    { iconSrc: haeadpone, description: "₹5,000 Preventive Health Checks", icon: false },
    { iconSrc: Rewards, description: "Tax Benefits (80D)", icon: false },
    { iconSrc: Tax, description: "₹25 Lacs Critical Illness Cover", icon: true, iconName: MdHealthAndSafety },
    { iconSrc: Pharmacy, description: "Scan & Pay Option", icon: true, iconName: BsQrCodeScan },
    { iconSrc: discound, description: "Premium Hospital Discounts", icon: true, iconName: FaHospital },
    { iconSrc: tag, description: "Gym Membership Discounts", icon: true, iconName: GiWeightLiftingUp  },
    { iconSrc: hand, description: "Wellness App Benefits", icon: true, iconName: MdOutlineMobileFriendly }
];

export const taxSaverGrid = [
    { iconSrc: Wallet, description: "E-Wallet ₹5000", icon: false },
    { iconSrc: haeadpone, description: "Unlimited Tele-Consults", icon: false },
    { iconSrc: Rewards, description: "Tax Benefits", icon: false },
    { iconSrc: Tax, description: "Exclusive Discounts", icon: false },
    { iconSrc: Pharmacy, description: "Floater Benefits", icon: false },
    { iconSrc: discound, description: "Premium Hospital Choice", icon: true, iconName: FaHospital },
    { iconSrc: tag, description: "Gym Membership Discounts", icon: true, iconName: GiWeightLiftingUp },
    { iconSrc: hand, description: "Wellness App Benefits", icon: true, iconName: MdOutlineMobileFriendly }
];

export const silverPlanGrid = [
    { iconSrc: Wallet, description: "E-Wallet ₹10,000", icon: false },
    { iconSrc: Tax, description: "Tax Benefits (80-D)", icon: false },
    { iconSrc: Pharmacy, description: "Floater Benefits", icon: false },
    { iconSrc: Tax, description: "Scan & Pay Option", icon: true, iconName: BsQrCodeScan },
    { iconSrc: Pharmacy, description: "Premium Hospital Discounts", icon: true, iconName: FaHospital },
    { iconSrc: tag, description: "Gym Membership Discounts", icon: true, iconName: GiWeightLiftingUp },
    { iconSrc: hand, description: "Wellness App Benefits", icon: true, iconName: MdOutlineMobileFriendly }
];

export const platinumPlanGrid = [
    { iconSrc: Wallet, description: "E-Wallet ₹10,000", icon: false },
    { iconSrc: haeadpone, description: "₹5,000 Preventive Health Checks", icon: false },
    { iconSrc: Rewards, description: "Tax Benefits (80D)", icon: false },
    { iconSrc: Tax, description: "₹25 Lacs Critical Illness Cover", icon: true, iconName: MdHealthAndSafety },
    { iconSrc: Tax, description: "Base Insurance Cover (₹3L/₹5L)", icon: true, iconName: FaUserShield },
    { iconSrc: Tax, description: "Super Top-Up Cover (₹15 Lacs/₹25 Lacs)", icon: true, iconName: FaPersonCircleCheck },
    { iconSrc: Pharmacy, description: "Scan & Pay Option", icon: true, iconName: BsQrCodeScan },
    { iconSrc: Tax, description: "Premium Hospital Discounts", icon: false },
    { iconSrc: tag, description: "Gym Membership Discounts", icon: true, iconName: GiWeightLiftingUp },
    { iconSrc: hand, description: "Wellness App Benefits", icon: true, iconName: MdOutlineMobileFriendly }
];

interface GridItemProps {
    iconSrc: string;
    description: string;
    icon: boolean;
    iconName: string;
}

const GridItem: FC<GridItemProps> = ({ iconSrc, description, icon, iconName }) => {
    const IconComponent = iconName;
    return (
        <div className="bg-white max-h-[280px] max-w-[220px] p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4 animated-border"
            style={{
                width: '100%',
            }}>
            {icon ? <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <IconComponent style={{ width: '60px', height: '60px', color: '#3E2E5F' }} /> {/* Apply inline styles */}
                </div> : 
            <img src={iconSrc} alt="icon" className="w-[60px] h-[60px] " />}
            <p className="text-sm text-center">{description}</p>
        </div>
    );
};

interface ResponsiveGridProps {
    heading: string;
    gridItems: GridItemProps[];
}

export const ResponsiveGrid: FC<ResponsiveGridProps> = ({ heading, gridItems }) => {

    return (
        <div className="w-full max-w-[1200px] px-[20px] mx-auto py-10 bg-white pt-[70px] pb-[30px] flex justify-center">
            <div className="max-w-[1200px] w-full">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <p className="text-2xl sm:text-3xl font-semibold text-deepPurple">
                        {heading}
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    {gridItems.map((item, index) => (
                        <GridItem
                            key={index}
                            iconSrc={item.iconSrc}
                            description={item.description}
                            icon={item.icon}
                            iconName={item.iconName}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
import { FC } from 'react';
import Pharmacy from '../assets/GOLD/Pharmacy.svg';
import Rewards from '../assets/GOLD/Rewards.svg';
import Tax from '../assets/GOLD/Tax.svg';
import Wallet from '../assets/GOLD/Wallet.svg';
import discount from '../assets/GOLD/discount.svg';
import headphone from '../assets/GOLD/headphone.svg';
import hand from '../assets/GOLD/hand.svg';
import tag from '../assets/GOLD/tag.svg';
import { MdOutlineMobileFriendly, MdHealthAndSafety, MdFamilyRestroom } from "react-icons/md";
import { FaUserShield, FaHeartbeat, FaRegHospital } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";

export const goldPlanGrid = [
    { iconSrc: Wallet, description: "E-wallet ₹15,000. (₹5,000: Annual Health Checks, ₹10,000: Primary care Services)", icon: false },
    { iconSrc: Rewards, description: "Tax benefits under 80-D", icon: false },
    { iconSrc: Tax, description: "Critical Insurance (CI) cover ₹2,50,000", icon: true, iconName: MdHealthAndSafety },
    { iconSrc: Tax, description: "Add additional beneficiary for CI coverage at a very minimal cost", icon: true, iconName: FaHeartbeat },
    { iconSrc: Tax, description: "Exclusive discounts on Diagnostic and Pharmacy.", icon: true, iconName: RiDiscountPercentFill },
    { iconSrc: Tax, description: "Comprehensive Family Protection: (Include- Self, spouse, 2 children)", icon: true, iconName: MdFamilyRestroom },
    { iconSrc: discount, description: "Premium Hospitals Network", icon: true, iconName: FaRegHospital },
    { iconSrc: tag, description: "Discounted Gym Memberships", icon: true, iconName: CiDumbbell },
    { iconSrc: Pharmacy, description: "Scan & Pay Option", icon: true, iconName: BsQrCodeScan },
    { iconSrc: hand, description: "The Wellness corner Platinum Access", icon: true, iconName: MdOutlineMobileFriendly }
];

export const taxSaverGrid = [
    { iconSrc: Wallet, description: "E-wallet 5000 for AHC", icon: false },
    { iconSrc: headphone, description: "Unlimited -Teleconsultations", icon: false },
    { iconSrc: Tax, description: "Tax benefits under 80-D", icon: false },
    { iconSrc: Pharmacy, description: "Exclusive discounts on Diagnostics and Pharmacy", icon: false },
    { iconSrc: Pharmacy, description: "Floater benefits (Include: Self, Spouse, 2 children, Parents and In-Laws)", icon: true, iconName: IoPersonAddOutline },
    { iconSrc: discount, description: "Premium Hospitals Network.", icon: true, iconName: FaRegHospital },
    { iconSrc: tag, description: "Discounted Gym memberships", icon: true, iconName: CiDumbbell },
    { iconSrc: hand, description: "The Wellness Corner platinum Access", icon: true, iconName: MdOutlineMobileFriendly }
];

export const silverPlanGrid = [
    { iconSrc: Wallet, description: "E-wallet 10,000 for Primary Care Services", icon: false },
    { iconSrc: Tax, description: "Tax benefits under 80-D", icon: false },
    { iconSrc: Pharmacy, description: "Exclusive discounts on Diagnostics and Pharmacy", icon: false },
    { iconSrc: Pharmacy, description: "Floater benefits (Include: Self, Spouse, 2 children)", icon: true, iconName: IoPersonAddOutline },
    { iconSrc: Pharmacy, description: "Premium Hospitals Network", icon: true, iconName: FaRegHospital },
    { iconSrc: tag, description: "Discounted Gym memberships", icon: true, iconName: CiDumbbell },
    { iconSrc: Tax, description: "Scan & Pay Option", icon: true, iconName: BsQrCodeScan },
    { iconSrc: hand, description: "The Wellness Corner Platinum Access", icon: true, iconName: MdOutlineMobileFriendly }
];

export const platinumPlanGrid = [
    { iconSrc: Wallet, description: "E-wallet worth ₹ 15,000. (₹5,000: Annual Health Checks, ₹10,000: Primary care benefits)  ", icon: false },
    { iconSrc: Rewards, description: "Tax benefits under 80-D.", icon: false },
    { iconSrc: Tax, description: "Critical Insurance (CI) cover ₹2,50,000", icon: true, iconName: MdHealthAndSafety },
    { iconSrc: Tax, description: "Base Insurance Cover (₹3L/₹5L)", icon: true, iconName: FaUserShield },
    { iconSrc: Tax, description: "Super Top-Up Cover (₹15 Lacs/₹25 Lacs)", icon: true, iconName: FaPersonCircleCheck },
    { iconSrc: Tax, description: "Exclusive discounts on Diagnostic and Pharmacy.", icon: true, iconName: RiDiscountPercentFill },
    { iconSrc: Tax, description: "Comprehensive Family Protection: (Include- Self, spouse, 2 children)", icon: true, iconName: MdFamilyRestroom },
    { iconSrc: Tax, description: "Premium Hospitals Network", icon: true, iconName: FaRegHospital },
    { iconSrc: tag, description: "Dscounted Gym memberships", icon: true, iconName: CiDumbbell },
    { iconSrc: Pharmacy, description: "Scan & Pay Option", icon: true, iconName: BsQrCodeScan },
    { iconSrc: hand, description: "The Wellness Corner Platinum Access", icon: true, iconName: MdOutlineMobileFriendly }
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
      <div
        className="bg-white max-h-[280px] max-w-[220px] p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4 transform transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 hover:border-deepPurple"
        style={{
          width: '100%',
        }}
      >
        {icon ? (
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            <IconComponent
              style={{
                width: '60px',
                height: '60px',
                color: '#3E2E5F',
                transition: 'color 0.3s ease-in-out',
              }}
              className="group-hover:text-deepPurple"
            />
          </div>
        ) : (
          <img
            src={iconSrc}
            alt="icon"
            className="w-[60px] h-[60px] transition-transform duration-300 hover:scale-110"
          />
        )}
        <p className="text-sm text-center text-gray-700 transition-colors duration-300 hover:text-deepPurple">
          {description}
        </p>
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
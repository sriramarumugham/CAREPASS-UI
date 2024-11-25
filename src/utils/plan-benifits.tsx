import { FC } from 'react';
import Pharmacy from '../assets/GOLD/Pharmacy.svg';
import Rewards from '../assets/GOLD/Rewards.svg';
import Tax from '../assets/GOLD/Tax.svg';
import Wallet from '../assets/GOLD/Wallet.svg';
import discound from '../assets/GOLD/discound.svg';
import haeadpone from '../assets/GOLD/haeadpone.svg';
import hand from '../assets/GOLD/hand.svg';
import tag from '../assets/GOLD/tag.svg';


export const goldPlanGrid = [
    { iconSrc: Wallet, description: "₹5000 for PHC" },
    { iconSrc: haeadpone, description: "Unlimited Tele-consultation" },
    { iconSrc: Rewards, description: "Earn Rewards and TRU coins" },
    { iconSrc: Tax, description: "Tax benefit under 80D" },
    { iconSrc: Pharmacy, description: "Discounts on Pharmacy Purchase" },
    { iconSrc: discound, description: "Follow up HC for dependents up to 60% Discounts" },
    { iconSrc: tag, description: "PHC at 60% lesser price" },
    { iconSrc: hand, description: "Tax benefit under 80D" }
];


interface GridItemProps {
    iconSrc: string;
    description: string;
}

const GridItem: FC<GridItemProps> = ({ iconSrc, description }) => {
    return (
        <div className="bg-white max-h-[280px] max-w-[220px] p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4 animated-border"
            style={{
                width: '100%',
            }}>
            <img src={iconSrc} alt="icon" className="w-[60px] h-[60px] " />
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
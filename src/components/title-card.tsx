import { motion } from 'framer-motion';
import { FC } from 'react';

interface TitleCardProps {
    heading: string;
}

export const TitleCard: FC<TitleCardProps> = ({ heading }) => {

    return (
        <div className="flex items-center pl-[30px] w-full px-[20px] min-h-[150px]"
            style={{ background: '#FCF9FF', borderBottom: '1px solid #eeeaf2' }}>
            <motion.h1
                className="flex gap-[10px] md:gap-[10px] min-w-[165px] font-bold text-xl md:text-4xl"
                variants={itemVariants}
            >
                {heading}
            </motion.h1>
        </div>

    );
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
};

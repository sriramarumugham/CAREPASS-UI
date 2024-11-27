
import HeartGrafti from '../assets/hert-grafti.svg';
import TickSvg from '../assets/tick.svg'
import { motion } from 'framer-motion';



const healthBenefits = [
    "Preventive Health Check ups",
    "Unlimited Doctor Consults",
    "Secured Medical Expenses",
    "Vision Care",
    "Dental care",
    "Critical illness cover",
    "Health cover",
    "Comprehensive IPD cover"
];

const additionalBenefits = [
    "Get access to App",
    "Diagnostics",
    "Discounts on Health Checks",
    "Exclusive discounts on pharmacy",
    "Discounted Gym Memberships",
    "Nutrition & Wellness Coaching",
    "Healthy Eating Habits",
    "Free Diet Plan"
];

const BenifitsHeader = () => {
    return (
        <div className="p-[30px] gap-[10px] md:gap-[44px] flex md:flex-col items-center justify-between">
            <p className="text-xl md:text-3xl">Health Plan Benefits for End Users</p>
            <img src={HeartGrafti} className='md:w-[310px] md:h-[270px]' />
        </div>
    )
}

const BenifitsList = ({ benifits }: { benifits: string[] }) => {
    return (
        <motion.div
            className="border border-1 border-[#A689B0] px-5 rounded-xl py-6 w-[340px] h-fit md:h-[430px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.ul className="flex flex-col gap-6">
                {benifits.map((benefit, index) => (
                    <motion.li
                        key={index}
                        className="flex gap-3 items-center"
                        variants={itemVariants}
                    >
                        <img src={TickSvg} alt="Tick" />
                        <p className="font-normal">{benefit}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};



const BenifitsSection = () => {
    return (
    <div className='w-full px-[20px] flex items-center justify-center'>
        <div className='flex  max-w-[1200px] flex-col md:flex-row gap-4 md:gap-6 items-center justify-center md:py-[100px]'>
            <BenifitsHeader />
            <BenifitsList benifits={healthBenefits} />
            <BenifitsList benifits={additionalBenefits} />
        </div>
    </div>
    )}

export default BenifitsSection



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delays each child animation
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
};
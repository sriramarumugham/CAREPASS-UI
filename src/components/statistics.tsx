import Stetescope from '../assets/stetescope.svg';
import Medicine from '../assets/medicine.svg';
import Lab from '../assets/lab.svg';
import Dumbell from '../assets/dumbell.svg';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { MdHealthAndSafety } from "react-icons/md";
import { FaUserDoctor, FaTooth } from "react-icons/fa6";
import { FaClinicMedical, FaMapMarkerAlt } from "react-icons/fa";
import { IoGlasses } from "react-icons/io5";

const Statistics = () => {
    const stats = [
        { logo: Stetescope, number: 25000, description: 'Doctors for in-clinic consultations', icon: false },
        { logo: Stetescope, number: 8000, description: 'Doctors for online teleconsultation', icon: true, iconName: FaUserDoctor },
        { logo: Dumbell, number: 5500, description: 'Gyms for fitness and wellness', icon: false },
        { logo: Dumbell, number: 8000, description: 'Diagnostic Centers for home sample collection', icon: true, iconName: FaClinicMedical },
        { logo: Stetescope, number: 5000, description: 'Dentists for comprehensive dental care', icon: true, iconName: FaTooth },
        { logo: Medicine, number: 35000, description: 'Pharmacies for easy access to medication', icon: false },
        { logo: Lab, number: 300, description: 'Vision Care Stores for eye health services', icon: true, iconName: IoGlasses },
        { logo: Dumbell, number: 400, description: 'Coverage across 400+ cities', icon: true, iconName: FaMapMarkerAlt }
      ];      

    return (
        <div className="bg-[#FCFAFE] flex items-center justify-center w-full px-[20px]">
            <motion.div
                className="max-w-[1200px] grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[30px] items-center justify-center py-[30px] md:py-[30px]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="flex gap-[10px] md:gap-[10px] items-center min-w-[165px]"
                        variants={itemVariants}
                    >
                        <div className="bg-deepPurple min-w-[30px] min-h-[30px] md:min-w-[70px] md:min-h-[70px] rounded-full flex items-center justify-center">
                        {stat.icon ? (
                            <stat.iconName className="w-[16px] h-[16px] md:w-[36px] md:h-[36px] text-white" />
                        ) : (
                            <img
                                src={stat.logo}
                                className="w-[16px] h-[16px] md:w-[36px] md:h-[36px]"
                                alt={stat.description}
                            />
                        )}
                        </div>
                        <div className="flex flex-col h-fit gap-[5px] shrink">

                            <div className="font-bold text-2xl md:text-[16px]">
                                <CountUp start={0} end={stat.number} duration={2} separator="," />+
                            </div>

                            <div className="text-[#333333] text-xs md:text-[16px]">{stat.description}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

    );
};

export default Statistics;


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Controls delay between each child
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
};

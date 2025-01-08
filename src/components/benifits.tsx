import {
    FaStethoscope,
    FaEye,
    FaTooth,
    FaHeartbeat,
    FaClinicMedical,
    FaDiagnoses,
    FaPrescriptionBottle,
  } from "react-icons/fa";
  import {
    GiHealthNormal,
    GiWeightLiftingUp,
    GiMeal,
  } from "react-icons/gi";
  import {
    MdHealthAndSafety,
    MdOutlineMedicalServices,
    MdOutlineMobileFriendly
  } from "react-icons/md";
  import { motion } from "framer-motion";
  import HeartGrafti from "../assets/hert-grafti.svg";
  
  // Updated data structure to include unique icons
  const healthBenefits = [
    { text: "Doctor Consultations", icon: FaStethoscope },
    { text: "Comprehensive Health Checkups", icon: MdOutlineMedicalServices },
    { text: "Medical Expense Coverage", icon: MdHealthAndSafety },
    { text: "Vision Care Benefits", icon: FaEye },
    { text: "Dental Care Coverage", icon: FaTooth },
    { text: "Critical Illness Insurance", icon: FaHeartbeat },
    { text: "Hospitalization Coverage (IPD)", icon: FaClinicMedical },
  ];
  
  const additionalBenefits = [
    { text: "Diagnostic Services", icon: FaDiagnoses },
    { text: "Discounted Health Screenings", icon: MdOutlineMedicalServices },
    { text: "Pharmacy Discounts", icon: FaPrescriptionBottle },
    { text: "Subsidized Gym Memberships", icon: GiWeightLiftingUp },
    { text: "Nutrition & Wellness Coaching", icon: GiHealthNormal },
    { text: "Personalized Diet Plans", icon: GiMeal },
    { text: "Platinum Access to Wellness App", icon: MdOutlineMobileFriendly },
  ];
  
  const BenifitsHeader = () => {
    return (
      <div className="p-[30px] gap-[10px] md:gap-[44px] flex md:flex-col items-center justify-between">
        <p className="text-xl md:text-3xl font-bold text-center">
          CarePass Benefits
        </p>
        <img
          src={HeartGrafti}
          className="md:w-[310px] md:h-[270px] w-[150px] h-[130px]"
          alt="Heart Grafti"
        />
      </div>
    );
  };
  
  const BenifitsList = ({
    benifits,
  }: {
    benifits: { text: string; icon: React.ComponentType }[];
  }) => {
    return (
      <motion.div
        className="border border-[#A689B0] bg-white shadow-md px-5 rounded-xl py-6 w-[340px] h-fit md:h-[430px] xl:h-[375px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
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
              <benefit.icon className="text-deepPurple text-xl md:text-2xl" />
              <p className="font-medium text-black-700">{benefit.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    );
  };
  
  const BenifitsSection = () => {
    return (
      <div className="w-full px-[20px] flex flex-col items-center justify-center bg-[#F7F3FB]">
        {/* Title Section */}
        <div className="py-[20px]">
          <p className="text-xl md:text-3xl font-bold text-center pt-5">
            CarePass Benefits
          </p>
        </div>
  
        {/* Benefits Section */}
        <div className="flex max-w-[1200px] flex-col md:flex-row gap-4 md:gap-6 items-center justify-center md:py-[20px]">
          {/* Image Section */}
          <div className="p-[30px] gap-[10px] md:gap-[44px] flex md:flex-col items-center justify-between">
            <img
              src={HeartGrafti}
              className="md:w-[310px] md:h-[270px] w-[150px] h-[130px]"
              alt="Heart Grafti"
            />
          </div>
  
          {/* Benefits List */}
          <BenifitsList benifits={healthBenefits} />
          <BenifitsList benifits={additionalBenefits} />
        </div>
      </div>
    );
  };
  
  
  export default BenifitsSection;
  
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
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  };
  
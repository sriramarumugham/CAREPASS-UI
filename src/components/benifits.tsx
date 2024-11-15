
import HeartGrafti from '../assets/hert-grafti.svg';
import TickSvg from '../assets/tick.svg'

const healthBenefits = [
    "Preventive Health Check ups",
    "Unlimited Doctor Consults",
    "Secured Medical Expenses",
    "Diagnostics",
    "Dental care",
    "Critical illness cover",
    "Accidental cover",
    "Comprehensive cover for IP care"
];

const additionalBenefits = [
    "Get access to App",
    "Discounts on Health Checks",
    "Discounts on Pharmacy Purchase",
    "Doctor consults",
    "Discounted Gym Memberships",
    "Nutrition & Wellness Coaching",
    "Healthy Eating Habits"
];

const BenifitsHeader = () => {
    return (
        <div className=" p-[30px] gap-[10px] md:gap-[44px] flex md:flex-col items-center justify-between">
            <p className="text-xl md:text-3xl">Health Plan Benefits for End Users</p>
            <img src={HeartGrafti} className='md:w-[310px] md:h-[270px]' />
        </div>
    )
}


const BenifitsList = ({ benifits }: { benifits: string[] }) => {
    return (
        <div className='border border-1 border-[#A689B0] px-5 rounded-xl py-6 w-[340px] h-fit md:h-[430px]'>
            <ul className='flex flex-col gap-6'>
                {benifits.map((benefit, index) => (
                    <li key={index} className='flex gap-3 items-center'>
                        <img src={TickSvg} alt="Tick" />
                        <p className='font-normal'>{benefit}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const BenifitsSection = () => {
    return (<div className='w-full px-[20px] flex items-center justify-center'>
        <div className='flex  max-w-[1200px]   flex-col md:flex-row gap-4 md:gap-6 items-center justify-center md:py-[100px] '>
            <BenifitsHeader />
            <BenifitsList benifits={healthBenefits} />
            <BenifitsList benifits={additionalBenefits} />

        </div>
    </div>)

}

export default BenifitsSection
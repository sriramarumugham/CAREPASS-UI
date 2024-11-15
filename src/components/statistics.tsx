import Stetescope from '../assets/stetescope.svg';
import Medicine from '../assets/medicine.svg';
import Lab from '../assets/lab.svg';
import Dumbell from '../assets/dumbell.svg';

const Statistics = () => {
    const stats = [
        { logo: Stetescope, number: 8000, description: 'Online Teleconsultations' },
        { logo: Medicine, number: 35000, description: 'Physical pharmacies & fulfilment' },
        { logo: Lab, number: 400, description: 'Serviceable Home Sample Collection' },
        { logo: Dumbell, number: 5500, description: 'Gym & Fitness Centre network' }
    ];

    return (
        <div className='bg-[#FCFAFE] flex items-center justify-center w-full  px-[20px]'>
            <div className=' max-w-[1200px]  grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[30px] items-center justify-center py-[30px] md:py-[30px] '>
                {stats.map((stat, index) => (
                    <div key={index} className='flex gap-[10px] md:gap-[10px] items-center  min-w-[165px]'>
                        <div className='bg-deepPurple min-w-[30px] min-h-[30px] md:min-w-[70px] md:min-h-[70px] rounded-full flex items-center justify-center'>
                            <img src={stat.logo} className='w-[16px] h-[16px] md:w-[36px] md:h-[36px]' alt={stat.description} />
                        </div>
                        <div className='flex flex-col h-fit gap-[5px] shrink'>
                            <div className='font-bold text-2xl md:text-[16px]'>{stat.number} +</div>
                            <div className='text-[#333333] text-xs md:text-[16px]'>{stat.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;



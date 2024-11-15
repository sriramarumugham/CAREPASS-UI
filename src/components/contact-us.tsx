


import Phone from '../assets/pohone.svg';
import Email from '../assets/email.svg';
import ArrowRight from '../assets/contact-arrow-right.svg';
import Arrowleft from '../assets/contact-us-arrow-left.svg';


const ContactUsSection = () => {

    const addresses = [
        { city: 'Banglore', address: '#801, Level 8, East Wing, Raheja Towers, M.G Road, Bengaluru 560001, India' },
        { city: 'Mumbai', address: '#801, Level 8, East Wing, Raheja Towers, M.G Road, Bengaluru 560001, India' },
        { city: 'Jaipur', address: '#801, Level 8, East Wing, Raheja Towers, M.G Road, Bengaluru 560001, India' },

    ]

    return (
        <div className="flex flex-col  gap-4 md:gap-10 py-[30px] px-[20px]"
            style={{
                background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
            }}
        >

            <div className='flex flex-col gap-3 items-center justify-between'>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <img src={ArrowRight} alt="arrow left" />
                    <p className=' text-xs'>Contact Us</p>
                    <img src={Arrowleft} alt="arrow right" />

                </div>

                <p className='text-lg md:text-3xl font-bold'>We are Here to Help You</p>
            </div>

            <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-5 '>

                <div className=" p-8 rounded-xl py-7 h-fit  w-full md:w-fit   flex md:min-h-full  items-center justify-center gap-[40px] ">
                    <div className='flex gap-5 items-center '>
                        <img src={Phone} alt='phone' className='w-[12px] h-[12px]' />
                        <p className='text-deepPurple font-semibold '> +1800-123-4567</p>

                    </div>

                    <div className='flex gap-5'>
                        <img src={Email} alt='Email' />
                        <p className='font-semibold text-sm underline text-deepPurple '>lnfo@123.com</p>

                    </div>

                    <div className='flex gap-5'>
                        <button
                            className="gap-2 px-3 py-2  w-fit  border border-1 border-deepPurple rounded-md  mt-[20px] mx-auto md:m-0 flex items-center">
                            <p className='text-deepPurple text-sm font-semibold '>Partner with us</p>
                        </button>

                    </div>

                </div>

                {/* <div className="border border-1 border-[#A689B0] p-8 rounded-xl py-6 h-fit w-full md:w-fit  ">


                    <div className='flex gap-4 justify-center items-center  '>
                        <img src={Location} alt='Location' />
                        <p className='font-bold text-lg text-deepPurple'>Address</p>
                    </div>
                    <div className=' flex flex-col md:flex-row gap-5'>
                        {addresses.map((address, index) => (
                            <div
                                className={`flex flex-col gap-[20px] w-fit md:max-w-[200px] items-center justify-center mt-2 ${index < 2 && index < addresses.length - 1 ? 'md:border-r md:border-[#A689B0]' : ''}`}
                            >
                                <p className='font-bold text-sm'>{address.city}</p>
                                <p className='text-sm font-light'>{address.address}</p>
                            </div>
                        ))}

                    </div>

                </div> */}


            </div>


        </div>
    )
}

export default ContactUsSection
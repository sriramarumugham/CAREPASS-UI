import Phone from '../assets/pohone.svg';
import Email from '../assets/email.svg';
import ArrowRight from '../assets/contact-arrow-right.svg';
import Arrowleft from '../assets/contact-us-arrow-left.svg';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const ContactUsSection = () => {
    const navigate = useNavigate();
    const handleNavigation = (route: string) => {
        navigate(route, { relative: 'path' })
    }
    return (
        <div className="w-full flex items-center justify-center px-[20px] "
            style={{
                background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
            }}
            id='contact-us'
        >
            <div className='flex flex-col items-center gap-5  py-[50px] justify-evenly  max-w-[1200px]'>

                <div className='flex flex-col gap-3 items-center justify-between'>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <img src={ArrowRight} alt="arrow left" />
                        <p className=' text-xs'>Contact Us</p>
                        <img src={Arrowleft} alt="arrow right" />

                    </div>


                </div>

                <p className='text-lg md:text-3xl font-bold m-auto '>We are Here to Help You</p>

                <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-5 '>

                    <div className="  rounded-xl    h-fit    w-full md:w-fit   flex flex-col md:flex-row  md:min-h-full  items-center justify-center gap-5 md:gap-[40px] ">
                        <div className='flex gap-5 items-center '>
                            <img src={Phone} alt='phone' className='w-[12px] h-[12px]' />
                            <p className='text-deepPurple font-semibold '>+91 - 9660 503 504</p>

                        </div>

                        <div className='flex gap-5'>
                            <img src={Email} alt='Email' />
                            <p className='font-semibold text-sm underline text-deepPurple '>support@carepass.in</p>

                        </div>

                        <div className='flex gap-5'>
                            <button
                                onClick={() => handleNavigation(ROUTES.CONTACT_US)}
                                className="gap-2 px-3 py-2  w-fit  border border-1 border-deepPurple rounded-md   mx-auto md:m-0 flex items-center">
                                <p className='text-deepPurple text-sm font-semibold '>Partner with us</p>
                            </button>

                        </div>

                    </div>




                </div>


            </div>


        </div>
    )
}

export default ContactUsSection






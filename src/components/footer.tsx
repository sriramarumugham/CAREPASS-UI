
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/youtube.svg';
import LogoPng1 from '../assets/footer-logo.png';


const FooterSection = () => {
    return (
        <div className='w-full bg-deepPurple flex items-center justify-center'>
            <div className="w-full max-w-[1200px] px-[20px] md:px-5 p-[16px] m-auto flex flex-col gap-[16px]">
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <div className='p-1 bg-white rounded-md'>
                        <img src={LogoPng1} alt='Logo' />
                    </div>

                    <p className='text-white text-sm font-light text-center md:block hidden'>
                        Copyright © 2025 CAREPASS. All rights reserved.
                    </p>

                    <div className='flex items-center justify-center gap-5'>
                        <img src={Facebook} alt='facebook' className='w-[24px] h-[24px]' style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                        <img src={Instagram} alt='Instagram' className='w-[24px] h-[24px]' style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                        <img src={Youtube} alt='Youtube' className='w-[24px] h-[24px]' style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                    </div>
                </div>

                <p className="md:hidden text-white text-sm font-light text-center">
                    Copyright © 2025 CAREPASS. All rights reserved.
                </p>
            </div>
        </div>
    )
}


export default FooterSection
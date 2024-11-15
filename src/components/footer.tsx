
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/youtube.svg';
import CarePassFooter from '../assets/carepass-footer-logo.svg';

const FooterSection = () => {
    return (
        <div className="bg-deepPurple  p-[16px] px-[40px]  md:px-[80px] flex flex-col gap-[16px]"

        >
            <div className='flex justify-between items-center' >
                <div>
                    <img src={CarePassFooter} className='w-[90px] h-[13px] md:w-[144px] md:h-[21px]' />
                </div>
                <p className='text-white hidden md:block text-sm font-light text-center'>Copyright © 2024 CAREPASS. All rights reserved.</p>
                <div className='flex items-center justify-center gap-5'>
                    <img src={Facebook} alt='facebook' className='w-[24px] h-[24px]' style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                    <img src={Instagram} alt='Instagram' className='w-[24px] h-[24px]' style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                    <img src={Youtube} alt='Youtube' className='w-[24px] h-[24px]' style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />

                </div>
            </div>
            <div className="md:hidden text-white text-sm font-light text-center"><p>Copyright © 2024 CAREPASS. All rights reserved.</p></div>
        </div>
    )
}

export default FooterSection
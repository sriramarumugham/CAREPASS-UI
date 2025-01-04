
import TopRightSvg from '../assets/top-right.svg';
import aboutUsImageOne from '../assets/about-us-one.svg';
import { NavHashLink } from 'react-router-hash-link';

const AboutUsSection = ({showViewMore}) => {
    return (
        <div className='px-[20px] flex items-center justify-center'
            style={{
                background: '#FCF9FF',
            }}
            id='about-us'
        >
            <div
                className="flex flex-col max-w-[1200px] py-[30px] md:py-[30px] gap-4 md:gap-12"

            >
                <p className="font-bold text-xl md:text-4xl mx-auto">About Us</p>
                <div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-9">
                        <img src={aboutUsImageOne} className="md:hidden w-auto max-w-full" />
                        <img src={aboutUsImageOne} className="hidden md:block w-auto max-w-full" />
                        <div className='flex flex-col gap-3'>

                            <p className="text-[#A689B0] font-light md:leading-9">Streamlining your</p>

                            <p className="text-deepPurple text-2xl md:text-3xl font-light md:leading-9">Health Management Through CarePass!</p>

                            <p className="leading-9 mt-4">
                            At CarePass, we believe that healthcare should be proactive, comprehensive, and affordable. Our mission is to transform the way individuals and families manage their health by offering a solution that not only covers emergencies but also emphasizes preventive care. 
                            </p>
                            <br />
                            <p className="leading-9">
                            We're driven by the goal of making health management simple, accessible, and effective.
                            Our plans cater to diverse healthcare needs, from routine check-ups & Primary care enablement to critical illness coverage, secondary and tertiary care protection ensuring peace of mind for you and your loved ones.
                            CarePass is more than just a safety net—it's a smarter way to manage your health, every day.
                            </p>
                            {showViewMore ? 
                            <button
                            className="gap-2 px-3 py-2 w-fit border border-1 border-deepPurple rounded-3xl mt-[20px] mx-auto md:m-0 flex items-center">
                            <img src={TopRightSvg} />
                            <p className='text-deepPurple text-sm'>
                            <NavHashLink to="/about-us" className="font-light focus:font-bold focus:underline-offset-4 focus:underline">View more</NavHashLink>    
                            </p>
                        </button> :
                        ''}
                            
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );

}

export default AboutUsSection



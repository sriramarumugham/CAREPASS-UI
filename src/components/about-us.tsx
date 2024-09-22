
import TopRightSvg from '../assets/top-right.svg';
import AboutUseMobilePng from '../assets/about-us-mobile.png';
import AboutUseDesktopPng from '../assets/about-us-desktop.png'

const AboutUsSection = () => {
    return (
        <div
            className="flex flex-col  px-[20px] py-[30px] md:px-[60px] md:py-[30px]  gap-4 md:gap-12"
            style={{
                background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
            }}
        >

            <p className="font-bold text-xl md:text-4xl mx-auto  ">About Us</p>
            <div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-9">
                    <img src={AboutUseMobilePng} className="md:hidden w-auto max-w-full" />
                    <img src={AboutUseDesktopPng} className="hidden md:block w-auto max-w-full" />
                    <div className='flex flex-col gap-3'>

                        <p className="text-[#A689B0] font-light md:leading-9">Streamlining your</p>

                        <p className="text-deepPurple text-2xl md:text-3xl font-light md:leading-9">Health Plan Management</p>

                        <p className="leading-9">
                            Streamlining your Health Plan Management through our standardized, measurable health plans to build a happy, healthy, and secured lifestyle!!
                            Welcome to a new era of flexible, floater, and digitalized health & financial cover for your healthcare needs with CarePass.
                        </p>
                        <br />
                        <p className="leading-9">
                            Our tailored health plan packages are designed to meet your needs at every level. From comprehensive wellness checks and tax advantages to financial support through insurance cover during illness and hospitalization, we’ve crafted solutions that empower you to take control of your health and future, all while providing unparalleled value.
                            Explore how our innovative products can help transform your approach to wellbeing and financial protection, ensuring you get the best for yourself and your loved ones.
                        </p>

                        <button
                            className="gap-2 px-3 py-2  w-fit  border border-1 border-deepPurple rounded-3xl  mt-[20px] mx-auto md:m-0 flex items-center">
                            <img src={TopRightSvg} />
                            <p className='text-deepPurple text-sm '>View more</p>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );

}

export default AboutUsSection
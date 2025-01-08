import TopRightSvg from '../assets/top-right.svg';
import aboutUsImageOne from '../assets/about_us.png';
import { NavHashLink } from 'react-router-hash-link';

const AboutUsSection = ({ showViewMore }) => {
    return (
        <div
            className="px-[20px] flex items-center justify-center"
            style={{
                background: '#FCF9FF',
            }}
            id="about-us"
        >
            <div className="flex flex-col max-w-[1200px] py-[30px] md:py-[30px] gap-4 md:gap-8">
                {/* Main Heading */}
                <p className="font-bold text-xl md:text-4xl mx-auto">About Us</p>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {/* Image Section */}
                    <div className="w-full md:w-2/5 flex justify-center">
                        <img
                            src={aboutUsImageOne}
                            className="w-full h-full object-cover rounded-lg"
                            alt="About Us"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-3/5 flex flex-col gap-4">
                        {/* Subheading */}
                        <p className="text-black font-extrabold md:leading-9 text-lg md:text-xl">
                            Streamlining your
                        </p>
                        <p className="text-black text-2xl md:text-3xl font-extrabold md:leading-tight">
                            Health Management Through CarePass!
                        </p>

                        {/* Paragraphs */}
                        <p className="text-black leading-7 text-justify">
                            At CarePass, we believe that healthcare should be proactive, comprehensive, and affordable.
                            Our mission is to transform the way individuals and families manage their health by offering a solution that not only covers emergencies but also emphasizes preventive care.
                        </p>
                        <p className="text-black leading-7 text-justify">
                            We're driven by the goal of making health management simple, accessible, and effective. Our plans cater to diverse healthcare needs, from routine check-ups & primary care enablement to critical illness coverage, secondary and tertiary care protection ensuring peace of mind for you and your loved ones. 
                            CarePass is more than just a safety net—it's a smarter way to manage your health, every day.
                        </p>

                        {/* View More Button */}
                        {showViewMore && (
                            <button className="gap-2 px-3 py-2 w-fit border border-1 border-deepPurple rounded-3xl mt-[20px] mx-auto md:mx-0 flex items-center">
                                <img src={TopRightSvg} alt="View More Icon" />
                                <p className="text-deepPurple text-sm">
                                    <NavHashLink
                                        to="/about-us"
                                        className="font-light focus:font-bold focus:underline-offset-4 focus:underline"
                                    >
                                        View more
                                    </NavHashLink>
                                </p>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;

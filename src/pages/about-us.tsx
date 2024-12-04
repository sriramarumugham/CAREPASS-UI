import AboutUsSection from "../components/about-us";
import ContactUsSection from "../components/contact-us";
import FooterSection from "../components/footer";
import Navbar from "../components/nav-bar";
import HeartGrafti from '../assets/about-us-2.png';
import { AboutSection3, AboutSection4, AboutUsOurWellnessApp } from '../components/extras'

const AboutUsPage = () => {
    return (
        <>
            <Navbar />
            <AboutUsSection showViewMore={false} />
            <div className=" py-12 md:py-16 flex items-center justify-center px-[20px]">
                <div className="flex flex-col md:flex-row w-full max-w-[1200px] gap-8">
                    {/* Text Section */}
                    <div className="flex items-center justify-center flex-col md:w-1/2 gap-4">
                        <p className="text-base md:text-md leading-7">
                        Backed by a vast network of 25,000+ doctors, 8,000+ diagnostic centers, and services across 400+ cities, 
                        CarePass offers a seamless healthcare experience with maximum convenience. Powered by Truworth Wellness, 
                        we are committed to combining cutting-edge digital health solutions with personalized care, 
                        so you can stay ahead of your health at all times.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img
                            src={HeartGrafti}
                            alt="Health & Wellness"
                            className="w-full max-w-[500px]"
                        />
                    </div>
                </div>
            </div>
            <AboutSection3 />
            <AboutUsOurWellnessApp />
            <AboutSection4 />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default AboutUsPage
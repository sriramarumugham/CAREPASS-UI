
import ApolloHospitalsSvg from '../assets/insurance/apollohospitals.svg';
import ManipalHospital from '../assets/insurance/manipal.svg';
import LilavathiHospital from '../assets/insurance/lilavati hospital.svg';
import Aster from '../assets/insurance/aster.svg';
import Mqx from '../assets/insurance/maxlife.svg';
import Fortis from '../assets/insurance/fortis.svg';
import Healthians from '../assets/insurance/healthians.svg';
import Sububarban from '../assets/insurance/suburban.svg';
import RubiHall from '../assets/insurance/rubyhallclinic.svg';
import Radcliffe from '../assets/insurance/radclif.svg';
import Agilus from '../assets/insurance/agilus.svg';
import TataOneMg from '../assets/insurance/tata1mg.svg';



const TrustedPartnersSection = () => {
    const partners = [
        { logo: ApolloHospitalsSvg, alt: "Apollo Hospitals" },
        { logo: ManipalHospital, alt: "Manipal Hospital" },
        { logo: LilavathiHospital, alt: "Lilavati Hospital" },
        { logo: Aster, alt: "Aster" },
        { logo: Mqx, alt: "Max Life" },
        { logo: Fortis, alt: "Fortis" },
        { logo: Healthians, alt: "Healthians" },
        { logo: Sububarban, alt: "Suburban Diagnostics" },
        { logo: RubiHall, alt: "Ruby Hall Clinic" },
        { logo: Radcliffe, alt: "Radcliffe" },
        { logo: Agilus, alt: "Agilus Diagnostics" },
        { logo: TataOneMg, alt: "Tata 1mg" }
    ];


    return (
        <div className="flex flex-col p-3 md:p-7 gap-[32px] bg-white justify-center items-center">
            <p className="text-lg md:text-3xl font-bold">Trusted Partners</p>
            <ul className="flex flex-wrap gap-5 md:gap-8 justify-center items-center   max-w-[70%]">
                {partners.map((partner, index) => (
                    <li key={index} className="flex items-center justify-center ">
                        <img
                            src={partner.logo}
                            alt={partner.alt}
                            className="w-[100%] h-auto md:w-[150%] md:scale-150 m-[5px]  md:m-[30px] object-contain"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default TrustedPartnersSection
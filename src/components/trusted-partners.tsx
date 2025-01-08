
import ApolloHospitalsSvg from '../assets/insurance/apollohospitals.svg';
import ManipalHospital from '../assets/insurance/manipal.svg';
import LilavathiHospital from '../assets/insurance/lilavati_hospital.svg';
import Aster from '../assets/insurance/aster.svg';
import Mqx from '../assets/insurance/maxlife.svg';
import Fortis from '../assets/insurance/fortis.svg';
import Healthians from '../assets/insurance/healthians.svg';
import Sububarban from '../assets/insurance/suburban.svg';
import RubiHall from '../assets/insurance/rubyhallclinic.svg';
import Radcliffe from '../assets/insurance/radclif.svg';
import Agilus from '../assets/insurance/agilus.svg';
import TataOneMg from '../assets/insurance/tata1mg.svg';
import CareHealthInsurance from '../assets/insurance/Care_health_insurance.svg';

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
        { logo: TataOneMg, alt: "Tata 1mg" },
        { logo: CareHealthInsurance, alt: "Care Health Insurance" }
    ];


    return (
        <div className='max-w-[1200px] px-[20px] flex m-auto items-center justify-center'>
            <div className="flex flex-col p-3 md:p-7 bg-white justify-center items-center">
                <p className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Our Esteemed Partners</p>
                <ul className="flex flex-wrap gap-5 md:gap-8 justify-center items-center">
                    {partners.map((partner, index) => (
                        <li key={index} className="flex items-center justify-center w-[100px] md:w-[150px] h-[80px] md:h-[100px] p-2">
                            <img
                                src={partner.logo}
                                alt={partner.alt}
                                className="max-w-full max-h-full object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default TrustedPartnersSection
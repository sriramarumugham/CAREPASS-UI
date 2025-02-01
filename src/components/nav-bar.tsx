
import LogoPng1 from '../assets/footer-logo.png';
import HamMenuSvg from '../assets/ham-menu.svg';
import CartSvg from '../assets/cart.svg';
import ProfileSvg from '../assets/profile.svg';
import PhoneSvg from '../assets/pohone.svg';
import TaxSaverSvg from '../assets/Tax.png';
import SilverPlan from '../assets/Silver.png';
import GoldPlan from '../assets/Gold.png';
import Platinum from '../assets/Platinum.png';
import ArrowRight from '../assets/arrow-right.svg';
import Youtube from '../assets/youtube.svg';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import ArrowDown from '../assets/arrow-down.svg';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import LoginModal from './ui/modal/login';
import { Modal } from './ui/modal/modal';
import Sidebar from './ui/modal/sidebar';
import { useUserStore } from '../store/user-store';
import { ROUTES } from '../utils/routes';
import useCartStore from '../store/cart-store';

const products = [
    { name: 'CarePass Tax Saver', img: TaxSaverSvg, route: ROUTES.TAX_SAVER },
    { name: 'CarePass Silver Plan', img: SilverPlan, route: ROUTES.SILVER_PLAN },
    { name: 'CarePass Gold Plan', img: GoldPlan, route: ROUTES.GOLD_PLAN },
    { name: 'CarePass Platinum Plan', img: Platinum, route: ROUTES.SUPER_TOPUP }
];

const ProductsListMobile = () => {

    const navigate = useNavigate()
    const handleNavigation = (route: string) => {
        navigate(route, { relative: 'path' })
    }
    return (
        <div className="w-full flex flex-col gap-2">
            <NavHashLink to="/products">Products</NavHashLink>
            {products.map((product, index) => (
                <div key={index} className="flex w-full  relative py-[6px] px-[17px] items-center gap-[17px] "
                    onClick={() => handleNavigation(product.route)}
                >
                    <img src={product.img} alt={product.name} width='20' height='20' />
                    <div className="h-full">
                        <div><p className="text-[#353535]">{product.name}</p></div>
                        <div><p className="text-[#353535]">{product.description}</p></div>
                    </div>
                    <img src={ArrowRight} className="absolute top-[16px] right-0" alt="arrow" />
                </div>
            ))}
        </div>
    );
}

const SignupSigning = (className: { className?: string }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { user, clearStore } = useUserStore();


    const handleLogin = () => {
        setOpen(true);
    }
    const navigateToProfile = () => {
        navigate(ROUTES.PROFILE, { relative: 'path' })
    }
    return (
        <>
            {open ? (
                <Modal open={open} setOpen={() => setOpen(false)} >
                    <LoginModal handleClose={() => setOpen(false)} />
                </Modal>
            ) : null}
            <div
                role="button"
                onClick={user?.token ? navigateToProfile : handleLogin}
                className={classNames('border border-deepPurple rounded-3xl flex items-center gap-3 px-4 py-2 cursor-pointer w-fit', className)}>
                <img src={ProfileSvg} alt="Profile" />
                <p className='text-deepPurple font-thin'>
                    {user?.token ? 'Profile' : 'Signin/Signup'}
                </p>
            </div>
        </>
    )
}

const Border = () => {
    return (<div className="border border-1  rounded-lg border-[rgb(221,223,224)] my-[12px]"></div>)
}

const MobileSidebarFooter = () => {
    const links = [
        { logo: Facebook, link: "#", alt: '' },
        { logo: Instagram, link: "#", alt: '' },
        { logo: Youtube, link: "#", alt: '' },

    ]
    return (
        <div className='w-full h-[44px] flex justify-between'>

            <img src={LogoPng1} className='w-[166px] h-[44px]' />
            <div className='flex items-center gap-5'>
                {links.map((link, index: number) => (
                    <img key={index} src={link.logo} />
                ))}

            </div>

        </div >)
}

const SideBarContent = () => {
    return (
        <div className="  h-full  px-4 py-2  flex flex-col ">
            <SignupSigning />

            <div className='flex flex-col gap-[8px] w-full mt-5'>
                <p className='text-#535763 '>
                <NavHashLink to="/" className="font-light focus:font-bold  focus:underline-offset-4  focus:underline">Home</NavHashLink>
                </p>
                <p className='text-#535763 '>
                <NavHashLink to="/about-us" className="font-light focus:font-bold  focus:underline-offset-4  focus:underline">About Us</NavHashLink>
                </p>
                <Border />
                <ProductsListMobile />
                <Border />
                <p className='text-#535763 '>
                <NavHashLink to="/faq" className="font-light focus:font-bold  focus:underline-offset-4  focus:underline">FAQ</NavHashLink>
                </p>
                <p className='text-#535763 mb-3'>
                <NavHashLink to="/contact-us" className="font-light focus:font-bold  focus:underline-offset-4  focus:underline">Contact Us</NavHashLink>
                </p>
            </div>

            {/* keep this at the bottom  */}
            <div className='mt-auto'>
                <div className='flex gap-4'>
                    <img src={PhoneSvg} alt="Contact" />
                    <p className='font-bold text-deepPurple'>+91- 9660 503 504</p>
                </div>
                <Border />
                <MobileSidebarFooter />
            </div>
        </div>
    )
}



function ProductListDesktop() {
    const navigate = useNavigate();
    
    const handleNavigation = (route: string) => {
        navigate(route, { relative: 'path' });
    };

    return (
        <div className="relative group">
            <div className="flex gap-2 cursor-pointer">
                <NavHashLink to="/products" className="font-light focus:font-bold focus:underline-offset-4 focus:underline">Products</NavHashLink>
                <img className="flex transition-transform group-hover:rotate-180" src={ArrowDown} alt="arrow" />
            </div>

            {/* Added a phantom div to extend hover area between trigger and menu */}
            <div className="absolute h-3 w-full" />

            {/* Dropdown menu - added z-50 and adjusted positioning */}
            <div className="absolute z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white rounded-md border border-[#F4BED1] p-4 w-[268px] mt-3 shadow-lg">
                <ul className="flex flex-col gap-[10px] w-full">
                    {products.map((product, index) => (
                        <React.Fragment key={product.name}>
                            <div 
                                className="gap-[4px] cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                                onClick={() => handleNavigation(product.route)}
                            >
                                <p className="text-deepPurple text-sm">{product.name}</p>
                                <p className="font-extralight text-xs">{product.description}</p>
                            </div>

                            {index < products.length - 1 && (
                                <div className="border border-1 rounded-lg border-[#F4BED1]"></div>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const Navbar = () => {

    const [openSidebar, setOpenSideBar] = useState(false);
    function toggle() {
        setOpenSideBar(!openSidebar);
    }

    const { cart } = useCartStore(); // Assuming cart is an array of items
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className="max-w-[1200px] m-auto px-[20px] md:px-[5px] w-full py-3 md:py-6 flex items-center justify-between">
                <Link to="/">
                    <img src={LogoPng1} />
                </Link>


                <ul className="hidden lg:flex space-x-4 text-deepPurple">
                    <li><NavHashLink to="/" className=" font-light focus:font-bold focus:underline-offset-4 focus:underline">Home</NavHashLink></li>
                    <li><NavHashLink to="/about-us" className="font-light focus:font-bold focus:underline-offset-4 focus:underline">About Us</NavHashLink></li>

                    <li>
                        <ProductListDesktop />
                    </li>

                    <li><NavHashLink to="/faq" className="font-light focus:font-bold focus:underline-offset-4 focus:underline">FAQ</NavHashLink></li>
                    <li><NavHashLink to="/contact-us" className="font-light focus:font-bold focus:underline-offset-4 focus:underline ">Contact Us</NavHashLink></li>
                </ul>

                <div className='hidden items-center justify-center lg:flex gap-3'>
                    <Link to="/cart" className="relative">
                        <img src={CartSvg} width={25} height={25} />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {itemCount}
                            </span>
                        )}

                    </Link>

                    <SignupSigning />

                    <div className='border border-deepPurple rounded-3xl flex items-center w-fit gap-3 px-4 py-2'>
                        <img src={PhoneSvg} alt="Contact" />
                        <p className='text-deepPurple font-bold'>+91 - 9660 503 504</p>
                    </div>
                </div>

                <div className='flex gap-4 items-center justify-center'>
                    <Link to="/cart" className="relative  md:hidden ">
                        <img src={CartSvg} width={25} height={25} />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {itemCount}
                            </span>
                        )}

                    </Link>

                    <div className='  h-[40px] w-[40px]  rounded-full  flex lg:hidden items-center justify-center bg-slate-200 '
                    >
                        <img src={HamMenuSvg} onClick={toggle} />
                    </div>
                </div>
            </div>
            <Sidebar open={openSidebar} setOpen={toggle} >
                <SideBarContent />
            </Sidebar>
        </>
    )
}

export default Navbar

import Logosvg from '../assets/logo.svg';
import HamMenuSvg from '../assets/ham-menu.svg';
import CartSvg from '../assets/cart.svg';
import ProfileSvg from '../assets/profile.svg';
import PhoneSvg from '../assets/pohone.svg';
import TaxSaverSvg from '../assets/tax-saver.svg';
import SilverPlan from '../assets/silver-plan.svg'
import GoldPlan from '../assets/gold-plan.svg'
import ArrowRight from '../assets/arrow-right.svg'
import Logo from '../assets/logo.svg';
import Youtube from '../assets/youtube.svg';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import ArrowDown from '../assets/arrow-down.svg'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';


import classNames from 'classnames';
import LoginModal from './ui/modal/login';
import { Modal } from './ui/modal/modal';
import Sidebar from './ui/modal/sidebar';
import { useUserStore } from '../store/user-store';
import { ROUTES } from '../utils/routes';
import useCartStore from '../store/cart-store';


const products = [
    { name: 'Tax Saver', description: "A preventive health check product with tax", img: TaxSaverSvg, route: ROUTES.TAX_SAVER },
    { name: 'Silver Plan', description: "A preventive health check product with tax", img: SilverPlan, route: ROUTES.SILVER_PLAN },
    { name: 'Gold Plan', description: "A preventive health check product with tax", img: GoldPlan, route: ROUTES.GOLD_PLAN },
    { name: 'Gold + Super topup', description: "A preventive health check product with tax", img: GoldPlan, route: ROUTES.SUPER_TOPUP }
];

const ProductsListMobile = () => {

    const navigate = useNavigate()

    const handleNavigation = (route: string) => {
        navigate(route, { relative: 'path' })
    }
    return (
        <div className="w-full flex flex-col gap-2">
            <p className=''>Products</p>
            {products.map((product, index) => (
                <div key={index} className="flex w-full  relative py-[6px] px-[17px] items-center gap-[17px] "
                    onClick={() => handleNavigation(product.route)}
                >
                    <img src={product.img} alt={product.name} />
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
                onClick={user?.token ? navigateToProfile : handleLogin} // Move onClick to the parent div
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
        <div className='w-full h-[42px] flex items-end justify-between'>

            <img src={Logo} className='w-[66px] h-[14px]' />
            <div className=' flex items-center  gap-5'>
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
                <p className='text-#535763 '>About us</p>
                <Border />
                <ProductsListMobile />
                <Border />
                <p className=''>FAQ</p>
            </div>

            {/* keep this at the bottom  */}
            <div className='mt-auto'>
                <div className='flex gap-4'>
                    <img src={PhoneSvg} alt="Contact" />
                    <p className='font-bold text-deepPurple'>+1800-123-4567</p>
                </div>
                <Border />
                <MobileSidebarFooter />
            </div>
        </div>
    )
}

function ProductListDesktop() {

    const navigate = useNavigate()



    const handleNavigation = (route: string) => {
        navigate(route, { relative: 'path' })
    }

    return (
        <Popover className="relative  ">
            <PopoverButton >
                <div className='flex gap-2'>
                    <a className="font-light focus:font-bold  active:outline-none   outline-none "> Products   </a><img className='flex' src={ArrowDown}></img>
                </div>

            </PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col bg-white rounded-md border border-[#F4BED1] p-[16px] w-[268px] mt-3">
                <ul className='flex flex-col gap-[10px] w-full'>
                    {products.map((product, index: number) => (
                        <>

                            <div className='gap-[4px] cursor-pointer'
                                onClick={() => handleNavigation(product.route)}
                            >
                                <p className='text-deepPurple text-sm'>{product.name}</p>
                                <p className='font-extralight text-xs' > {product.description}</p>
                            </div>

                            {index < products.length - 1 && (
                                <div className="border border-1 rounded-lg border-[#F4BED1]"></div>
                            )}
                        </>
                    ))}
                </ul>
            </PopoverPanel>
        </Popover>
    )
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
            <div className=" w-full py-3  md:py-6   px-5 md:px-[80px]   flex  items-center justify-between  ">
                <Link to="/">

                    <img src={Logosvg} className={'w-[66px] h-[14px]  md:h-[32px] md:w-[143px]'} />
                </Link>


                <ul className="hidden lg:flex space-x-4 text-deepPurple">
                    <li><a href="/" className=" font-light focus:font-bold focus:underline-offset-4  focus:underline">Home</a></li>
                    <li><a href="#" className="font-light focus:font-bold  focus:underline-offset-4  focus:underline">About Us</a></li>

                    <li>
                        <ProductListDesktop />
                    </li>

                    <li><a href="#" className="font-light focus:font-bold focus:underline-offset-4  focus:underline">FAQ</a></li>
                    <li><a href="#" className="font-light focus:font-bold focus:underline-offset-4  focus:underline ">Contact Us</a></li>
                </ul>

                <div className='hidden   items-center justify-center lg:flex gap-3'>
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
                        <p className='text-deepPurple font-bold'>+1800-123-4567</p>
                    </div>
                </div>

                <div className='  h-[40px] w-[40px]  rounded-full  flex lg:hidden items-center justify-center bg-slate-200 '
                >
                    <img src={HamMenuSvg} onClick={toggle} />
                </div>
            </div>
            <Sidebar open={openSidebar} setOpen={toggle} >
                <SideBarContent />
            </Sidebar>
        </>
    )
}

export default Navbar
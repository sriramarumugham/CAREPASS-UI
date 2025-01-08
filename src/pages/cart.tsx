import FooterSection from "../components/footer";
import Navbar from "../components/nav-bar";
import useCartStore, { CartItem } from "../store/cart-store";
import TrashSvg from '../assets/trash.svg'
import PharmacySvg from '../assets/pharmacy-purchase.svg'
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { Modal } from "../components/ui/modal/modal";
import PersonalInformationForm from "../components/ui/modal/primary-details";
import { useState } from "react";
import { useUserStore } from "../store/user-store";
import LoginModal from "../components/ui/modal/login";
import { useNavigate } from 'react-router-dom';

import { ROUTES } from "../utils/routes";

const Cart = ({ openLogin }: { openLogin: () => void, openPersonalInformation?: () => void }) => {
    const { cart, totalPrice } = useCartStore();
    const { getUser } = useUserStore();
    const userDetails = getUser();
    const navigate = useNavigate()



    if (cart.length == 0) {
        return null;
    }
    const handleCheckout = () => {
        if (!userDetails || !userDetails?.user?.userId) {
            console.log('oepn the login things')
            openLogin();
            return
        }
        // else if (!userDetails?.user?.pin) {
        //     openPersonalInformation();
        //     return;

        // }
        navigate(ROUTES.CHECKOUT, { relative: "path" });
        return;
    };

    return (
        <>
            <div className=" hidden  h-fit md:flex border w-[366px] border-1 border-[#EDE4FF] rounded-xl p-5  flex-col gap-5 max-w-[350px] ">
                <p className="font-bold text-sm">Order Details</p>
                {cart.map((item: CartItem) => (
                    <div key={item.productId} className="flex justify-between">
                        <p className="font-normal">{item.quantity} x {item.productName}</p>
                        <p className="font-bold">{item.price * item.quantity}</p>
                    </div>
                ))}
                <div className="flex justify-between">
                    <p className="font-normal">Platform Fee</p>
                    <p className="font-bold text-green-400 underline">FREE</p>
                </div>
                <div className="flex justify-between mt-5">
                    <p className="font-bold text-lg">Total Price</p>
                    <p className="font-bold text-lg">{totalPrice}</p>
                </div>
                <button
                    disabled={cart.length === 0}
                    className={classNames(
                        "w-full bg-deepPurple text-white flex items-center justify-center p-4 rounded-3xl",
                        cart.length === 0 && "bg-purple-300"
                    )}
                    onClick={handleCheckout}
                >
                    Proceed to checkout
                </button>
            </div>

            {/* Mobile View with Disclosure */}
            <div className=" fixed w-full bottom-0 left-0 right-0 bg-white border-t border-[#EDE4FF] p-5 flex md:hidden flex-col gap-2 ">
                <Disclosure as="div" key={1} defaultOpen={false} className="my-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full  rounded-md">
                                <p className="font-bold text-sm">Order Details</p>
                                <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${open ? 'rotate-180' : ''}`} />
                            </Disclosure.Button>

                            <Disclosure.Panel className="p-2 text-black-700">
                                {cart.map((item: CartItem) => (
                                    <div key={item.productId} className="flex justify-between">
                                        <p className="font-normal">{item.quantity} x {item.productName}</p>
                                        <p className="font-bold">{item.price * item.quantity}</p>
                                    </div>
                                ))}
                                <div className="flex justify-between mt-2">
                                    <p className="font-normal">Platform Fee</p>
                                    <p className="font-bold text-green-400 underline">FREE</p>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <div className="flex justify-between mt-5">
                    <p className="font-bold text-lg">Total Price</p>
                    <p className="font-bold text-lg">{totalPrice}</p>
                </div>

                <button
                    disabled={cart.length === 0}
                    className={classNames(
                        "w-full bg-deepPurple text-white flex items-center justify-center p-4 rounded-3xl",
                        cart.length === 0 && "bg-purple-300"
                    )}
                    onClick={handleCheckout}
                >
                    Proceed to checkout
                </button>
            </div>
        </>
    );
};


const ProductDetails = () => {

    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore(); // Get cart data and actions

    // const { user } = useUserStore();
    return (
        <div className="flex flex-col w-[80vw] md:min-w[60vw] max-w-[400px] md:max-w-[500px] gap-5 pb-40 rounded-xl">
            {/* {user?.user?.userId && (<div className="border border-1 border-[#EDE4FF] p-4 flex flex-col gap-4 rounded-xl">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-semibold">Personal information</p>
                    <img src={EditSvg} alt="Edit" onClick={openPersonalInformation} />
                </div>
                <p>
                    {user?.user?.gender ? <p> {user?.user?.fullName} ,{user?.user?.email}</p> :
                        <p>Please enter your personal detilas</p>
                    }
                </p>
            </div>)
            } */}

            {
                cart.map((item) => (
                    <div key={item.productId} className="rounded-xl border border-1 border-[#EDE4FF] p-4 flex flex-row gap-4 items-center justify-between">
                        <div className="flex flex-row gap-6 items-center">
                            <img src={PharmacySvg} alt="Pharmacy" />
                            <p>{item.productName}</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <button onClick={() => decreaseQuantity(item.productId)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => increaseQuantity(item.productId)}>+</button>
                            <p>{item.price * item.quantity}</p>
                            <img src={TrashSvg} alt="Remove" onClick={() => removeFromCart(item.productId)} className="cursor-pointer" />
                        </div>
                    </div>
                ))
            }
        </div >
    );
}

export const CartPage = () => {
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const openPersonalInformation = () => {
        setOpen(true);

    }
    const closePersonalInformation = () => {
        setOpen(false)
    }
    const handleopenLogin = () => {
        setOpenLogin(true);
    }
    const closeLogin = () => {
        setOpenLogin(false);
    }


    return (
        <>

            {/* dont need this one  */}
            <Modal open={open} setOpen={() => setOpen(false)} >
                <PersonalInformationForm handleClose={() => setOpen(false)} />
            </Modal>

            {openLogin ? (
                <Modal open={openLogin} setOpen={() => setOpenLogin(false)} >
                    <LoginModal handleClose={() => setOpenLogin(false)} />
                </Modal>
            ) : null}


            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow h-full flex flex-col gap-4  px-4 pb-28">
                    <p className="font-bold text-xl text-center w-full md:text-4xl mx-auto ">
                        Cart
                    </p>

                    <div className="flex flex-row  max-w-5xl gap-6 mx-auto  ">
                        <ProductDetails />
                        <Cart openLogin={handleopenLogin} />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <FooterSection />
                </div>
            </div>

        </>
    );
};

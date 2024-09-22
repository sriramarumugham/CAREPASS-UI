import { Checkout } from "../components/dynamic-form";
import FooterSection from "../components/footer";
import Navbar from "../components/nav-bar";

export const CheckoutPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow h-full">
                    <Checkout />
                </div>
                <div className="hidden lg:block">
                    <FooterSection />
                </div>
            </div>
        </>
    );
};






import EmailGif from '../assets/mail.gif';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchTransactionDetails } from '../data/query';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/nav-bar';
import FooterSection from '../components/footer';
import { useEffect, useState } from 'react';
import { ROUTES } from '../utils/routes';
import useCartStore from '../store/cart-store';


type CountdownProps = {
    initialCount: number;
    onComplete: () => void;
};

const Countdown = ({ initialCount, onComplete }: CountdownProps) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => (prev > 1 ? prev - 1 : 0));
        }, 1000);

        if (count === 0) onComplete();

        return () => clearInterval(timer);
    }, [count, onComplete]);

    return (
        <p className="text-center text-sm text-gray-500 mt-4">
            Redirecting to profile page in {count}.
        </p>
    );
};

const SuccessScreen = ({ amount }: { amount: number }) => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(ROUTES.PROFILE);
    };

    const { clearCart } = useCartStore();

    useEffect(() => {
        clearCart();
    }, [])
    return (
        <header className="header justify-center items-stretch shadow-2xl bg-white flex max-w-[328px] lg:max-w-[460px] flex-col px-8 py-10 rounded-xl">
            <img
                loading="lazy"
                src={EmailGif}
                className="aspect-[1.73] object-contain object-center w-full overflow-hidden"
            />
            <h1
                className=" text-center text-2xl text-green-600 font-semibold leading-7 self-center whitespace-nowrap mt-9"
                aria-label="Payment Success"
            >
                Payment Success!
            </h1>
            <p className="text-gray-600 text-center text-base font-medium leading-5 mt-2">
                <span className="whitespace-nowrap">
                    Congratulation!
                </span>{" "}
                <br /> plan of <span className="text-lg font-bold">₹ {amount}</span> is
                active.
            </p>
            <Countdown initialCount={5} onComplete={handleRedirect} />
        </header>
    );
};

const FailureScreen = () => {
    return (
        <header className="header justify-center items-stretch shadow-2xl bg-white flex max-w-[328px] lg:max-w-[460px] flex-col px-8 py-10 mb-10 lg:py-20 rounded-xl">
            <img
                loading="lazy"
                src={EmailGif}
                className="aspect-[1.73] object-contain object-center w-full overflow-hidden filter brightness-75 sepia-100"
                style={{ filter: "brightness(75%) sepia(100%)" }}
            />
            <h1
                className="text-red text-center text-2xl font-semibold leading-7 self-center whitespace-nowrap mt-9"
                aria-label="Payment Failure"
            >
                Payment Failure!
            </h1>
            <p className="text-gray-600 text-center text-base font-medium leading-5 mt-2">
                Sorry there was an issue processing your payment
            </p>
        </header>
    );
};

const LoadingScreen = () => {
    return (
        <header className="header justify-center items-stretch shadow-2xl bg-white flex max-w-[328px] lg:max-w-[460px] flex-col px-8 py-10 mb-10 lg:py-20 rounded-xl">
            <img
                loading="lazy"
                src={EmailGif}
                className="aspect-[1.73] object-contain object-center w-full overflow-hidden filter brightness-75 sepia-100"
                style={{ filter: "brightness(75%) sepia(100%)" }}
            />
            <h1
                className="text-red text-center text-2xl font-semibold leading-7 self-center whitespace-nowrap mt-9"
                aria-label="Payment Failure"
            >
                Loading
            </h1>
            <p className="text-gray-600 text-center text-base font-medium leading-5 mt-2">
                getting payment details
            </p>
        </header>
    );
};

const PaymentStatus = () => {
    const { paymentId } = useParams();
    const location = useLocation();
    console.log("location.state__", location.state)
    const { data, error, isLoading } = useQuery<any>(
        {
            queryKey: ['transaction', paymentId],
            queryFn: async () => {
                const data = await fetchTransactionDetails(paymentId!);
                return data.data;
            },
            refetchInterval: 1000
        }
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error fetching transaction details: {error.message}</div>;
    }

    return (
        <>
            <div className="min-h-[60vh]">
                <div className="flex justify-center mt-16 lg:mt-24">
                    {data?.transactionStatus == "success" && < SuccessScreen amount={data?.amount} />}
                    {data?.transactionStatus == "failure" && <FailureScreen />}
                    {data?.transactionStatus == "initiated" && <LoadingScreen />}
                </div>
            </div>
        </>
    )
}


const PaymentStatusPage = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className='flex-grow'>
                <div className='min-h-[80vh]'>
                    <PaymentStatus />
                </div>
            </div>
            <FooterSection />
        </div>
    );
};


export default PaymentStatusPage
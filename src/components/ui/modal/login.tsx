import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useUserStore } from '../../../store/user-store';
import { createUserApi, getOtp, validateOTP } from '../../../data/query';
import { useState, useEffect, useCallback } from 'react';

const schema = z.object({
    fullName: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    email: z.string().min(1, { message: 'Email is required' }).email('Invalid email address'),
    phoneNumber: z.string()
        .min(10, { message: 'Phone Number must be at least 10 digits' })
        .regex(/^\d+$/, 'Phone Number must contain only digits'),
});

type ValidationSchemaType = z.infer<typeof schema>;



interface LoginModalProps {

    handleClose?: () => void,
    createUser?: (data: any) => void
}

type LoginStep = "register" | "getOtp" | "enterOtp";


const LoginModal = ({ handleClose }: LoginModalProps) => {




    const { updateUser } = useUserStore();

    const createUser = async (data: ValidationSchemaType) => {
        await createUserApi(data).then((response: any) => {
            console.log("RESPONSE__", response)
            if (response) {
                updateUser(response);
                handleClose();
            }
        }).catch((error) => {
            console.log("ERROR", error);

        }).finally(() => {
        });
    }


    const [step, setStep] = useState<LoginStep>("register");

    const goToStep = useCallback((stepName: LoginStep) => {
        setStep(stepName);
    }, []);

    const [email, setEmail] = useState("");


    const [loading, setLoading] = useState(false);

    console.log("loading___", loading)

    const handleGetOTP = useCallback((data: { email: string }) => {
        if (loading) return;
        setLoading(true);

        getOtp(data)
            .then((response: any) => {
                console.log("OTP sent successfully!", response);
                if (step !== "enterOtp") {
                    goToStep("enterOtp");
                    setEmail(data?.email);
                }
            })
            .catch((error: any) => {
                console.error("Failed to get OTP", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [loading, step, goToStep, setEmail]);


    return (
        <>


            {step == 'register' && <RegisterUser createUser={createUser} goToStep={goToStep} />}
            {step == 'getOtp' && <GetOtp getOtp={handleGetOTP} loading={loading} />}
            {step == 'enterOtp' && < EnterOtp handleClose={handleClose} email={email} resentOTP={handleGetOTP} />}



            <div className="flex justify-center mt-4">
                {step === "register" ? (
                    <p>
                        Already have an account?{" "}
                        <button
                            onClick={() => goToStep("getOtp")}
                            className="text-deepPurple underline hover:no-underline"
                        >
                            Login
                        </button>
                    </p>
                ) : (
                    <p>
                        Don't have an account?{" "}
                        <button
                            onClick={() => goToStep("register")}
                            className="text-deepPurple underline hover:no-underline"
                        >
                            Register
                        </button>
                    </p>
                )}
            </div>

            <div className=" flex items-center justify-center my-5">
                <div className="flex-grow border-t border-gray-300 mr-2"></div>
                <span className="mx-2 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300 ml-2"></div>
            </div>


            <LoginwithGoogle createUser={createUser} />
        </>

    )
}

export default LoginModal;


interface LoginStepsProps {
    createUser?: (data: any) => void;
    goToStep: (step: LoginStep) => void;
    setEmail?: (email: string) => void;
}

const RegisterUser = ({ createUser }: LoginStepsProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchemaType>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
        console.log(data);
        createUser?.(data);
    }

    return (<>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-4 py-4 w-[80vw] max-w-[550px]  " // Wider form
        >


            <h2 className="text-2xl font-bold mb-4 text-deepPurple text-center">Register</h2>

            <div className="mb-4 w-[100%]" >
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Name goes here..."
                    {...register('fullName')}
                    className={`shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''
                        }`}
                />
                {errors.fullName && (
                    <span className="text-red-500 text-xs italic">{errors.fullName.message}</span>
                )}
            </div>

            <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Email goes here..."
                    {...register('email')}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''
                        }`}
                />
                {errors.email && (
                    <span className="text-red-500 text-xs italic">{errors.email.message}</span>
                )}
            </div>

            <div className="mb-6 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                    Phone Number
                </label>
                <input
                    type="text"
                    placeholder="Phone Number goes here..."
                    {...register('phoneNumber')}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNumber ? 'border-red-500' : ''
                        }`}
                />
                {errors.phoneNumber && (
                    <span className="text-red-500 text-xs italic">{errors.phoneNumber.message}</span>
                )}
            </div>

            <div className="flex justify-center w-full">
                <button
                    className="bg-deepPurple hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-3xl w-full sm:px-8" // Full width on mobile and padding on desktop
                    type="submit"
                >
                    Submit
                </button>
            </div>

            {/* or */}
        </form >
    </>);
}

const LoginwithGoogle = ({ createUser }: LoginModalProps) => {

    const responseMessage = async (response: CredentialResponse) => {
        const decodedData = jwtDecode(response?.credential as string) as any;
        console.log("decoded", decodedData);
        createUser?.({ fullName: decodedData?.name as string, email: decodedData?.email as string, phoneNumber: '' });
    };
    const errorMessage = () => {
        console.log("FAILURE ");
    };

    return (
        <GoogleLogin width={'100%'} onSuccess={responseMessage} onError={errorMessage} />
    )

}

const GetOtp = ({ getOtp, loading }: any) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(z.object({
            email: z.string().email("Invalid email").nonempty("Email is required"),
        })),
    });


    const onSubmit = async (data: { email: string }) => {
        await getOtp(data); // Call the OTP function
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-4 w-[80vw] max-w-[550px]">
            <h2 className="text-2xl font-bold mb-4 text-deepPurple text-center">Login</h2>

            <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Enter your email..."
                    {...register('email')}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''
                        }`}
                />
                {errors.email && (
                    <span className="text-red-500 text-xs italic">{errors?.email?.message as string}</span>
                )}
            </div>

            <div className="flex justify-center w-full mt-10">
                <button
                    type="submit"
                    className="bg-deepPurple hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-3xl w-full sm:px-8 disabled:opacity-50"
                >
                    {loading ? "Loading..." : "Get OTP "}
                </button>
            </div>
        </form>
    );
};


const EnterOtp = ({ handleClose, email, resentOTP }: { handleClose: () => void, email: string, resentOTP: () => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(z.object({
            otp: z.string().length(6, "OTP must be 6 digits").regex(/^\d+$/, "OTP must be numeric")
        })),
    });

    // Timer state
    const [timeLeft, setTimeLeft] = useState<number>(150); // 2 minutes 30 seconds (150 seconds)

    const { updateUser } = useUserStore();


    // Resend OTP function (this will reset the timer)
    const handleResendOtp = () => {
        setTimeLeft(150); // Reset the timer to the initial value (150 seconds)
        resentOTP(); // Call the resentOTP function passed via props
    };

    const handleValidateOtp = (data: { email: string, otp: number }) => {
        validateOTP(data)
            .then((response: any) => {
                console.log("OTP validated successfully!", response);
                updateUser(response);
                handleClose();
            })
            .catch((error) => {
                console.error("Failed to validate OTP", error);
            });
    };

    const onSubmit = (data: { otp: string }) => {
        const otpNumber = Number(data.otp); // Convert OTP to number
        if (isNaN(otpNumber)) {
            console.error("OTP is not a valid number");
            return;
        }
        handleValidateOtp({ otp: otpNumber, email: email });
    };

    useEffect(() => {
        if (timeLeft === 0) return; // Stop when timer reaches 0

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId); // Clear interval on component unmount
    }, [timeLeft]);

    // Format time as MM:SS
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-4 w-[80vw] max-w-[550px]">
            <h2 className="text-2xl font-bold mb-4 text-deepPurple text-center">Login</h2>

            <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                    Enter OTP
                </label>
                <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit OTP"
                    {...register('otp')}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.otp ? 'border-red-500' : ''}`}
                />
                {errors.otp && (
                    <span className="text-red-500 text-xs italic">{errors?.otp?.message}</span>
                )}
            </div>

            <div className="flex justify-center w-full mt-10">
                <button
                    type="submit"
                    className="bg-deepPurple hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-3xl w-full sm:px-8"
                >
                    Submit OTP
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-5">
                {/* Didn't receive OTP? */}
                <div className="text-sm text-deepPurple cursor-pointer hover:underline" onClick={handleResendOtp}>
                    Didn't receive OTP? Resend
                </div>

                <div className="text-sm text-gray-500 mb-2">
                    OTP expires in <strong>{formatTime(timeLeft)}</strong> minutes.
                </div>
            </div>
        </form>
    );
};







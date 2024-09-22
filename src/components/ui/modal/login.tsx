import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useUserStore } from '../../../store/user-store';
import { createUserApi } from '../../../data/query';
import { useState } from 'react';

const schema = z.object({
    fullName: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    email: z.string().min(1, { message: 'Email is required' }).email('Invalid email address'),
    phoneNumber: z.string()
        .min(10, { message: 'Phone Number must be at least 10 digits' })
        .regex(/^\d+$/, 'Phone Number must contain only digits'),
});

type ValidationSchemaType = z.infer<typeof schema>;

const LoginModal = ({ handleClose }: { handleClose: () => void }) => {

    const { updateUser, user } = useUserStore();



    const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchemaType>({
        resolver: zodResolver(schema),
    });


    const [loading, setLoading] = useState(false);

    const createUser = async (data: ValidationSchemaType) => {
        setLoading(true);
        await createUserApi(data).then((response: any) => {
            if (response) {
                updateUser(response);
                handleClose();
            }
        }).catch((error) => {
            console.log("ERROR", error);

        }).finally(() => {
            setLoading(false);
        });
    }

    const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
        console.log(data);
        createUser(data);
    }
    const responseMessage = async (response: CredentialResponse) => {
        const decodedData = jwtDecode(response?.credential as string) as any;
        console.log("DECODED_ATAT+", decodedData);
        await createUser({ fullName: decodedData?.name as string, email: decodedData?.email as string, phoneNumber: '' });
    };
    const errorMessage = () => {
        console.log("FAILURE ");
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-4 py-4 w-[80vw] max-w-[550px]  " // Wider form
        >
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

            <div className="mt-4 flex items-center justify-center">
                <div className="flex-grow border-t border-gray-300 mr-2"></div>
                <span className="mx-2 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300 ml-2"></div>
            </div>


            <div className='mt-2 '>
                <GoogleLogin width={'100%'} onSuccess={responseMessage} onError={errorMessage} />
            </div>

        </form>
    )
}

export default LoginModal;


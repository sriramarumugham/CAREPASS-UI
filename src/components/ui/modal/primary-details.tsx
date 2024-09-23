import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select, Option } from "@material-tailwind/react";
import Switcher11 from '../inputs/switcher';
import { updateUserApi } from '../../../data/query';
import { useUserStore } from '../../../store/user-store';

const schema = z.object({
    gender: z.string().nonempty({ message: 'Select a gender' }),
    fullName: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    dateOfBirth: z.string().nonempty({ message: 'Date of birth is required' }),
    email: z.string().email('Invalid email address'),
    area: z.string().nonempty({ message: 'Area is required' }),
    city: z.string().nonempty({ message: 'City is required' }),
    pin: z.string().nonempty({ message: 'Pin code is required' }),
    smoking: z.boolean(),
    isSalaried: z.boolean(), // Changed to boolean to match switch logic
    annualIncome: z.string().nonempty({ message: 'Select an income range' }),
});

type ValidationSchemaType = z.infer<typeof schema>;


const PersonalInformationForm = ({ handleClose }: { handleClose: () => void }) => {



    const { getUser, updateUser } = useUserStore();

    const userDetils = getUser();

    const { register, handleSubmit, setValue, formState: { errors }, control } = useForm<ValidationSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            fullName: userDetils?.user?.fullName || '',
            email: userDetils?.user?.email || '',
            phoneNumber: userDetils?.user?.phoneNumber || '',
            area: userDetils?.user?.area || '',
            city: userDetils?.user?.city || '',
            pin: userDetils?.user?.pin || '',
            dateOfBirth: userDetils?.user?.dateOfBirth || '',
            gender: userDetils?.user?.gender || '',
            smoking: userDetils?.user?.smoking || false,
            isSalaried: userDetils?.user?.isSalaried || false,
            annualIncome: userDetils?.user?.annualIncome || '',
        },

    });


    const onSubmit: SubmitHandler<ValidationSchemaType> = async (data) => {
        console.log("data___", data);
        const userId = userDetils?.user?.userId;
        console.log("suserid___", userId)
        updateUserApi(userId, { ...data }).then((
            data) => {
            updateUser(data)
            handleClose();
        }).catch(() => {
            console.log("ERRO__something-went-wrong")
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="h-fit pb-[75px] max-h-[641px] overflow-y-auto p-4 max-w-[532px]">
            <div className="mb-4">
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <Select label="Gender" {...field}>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    )}
                />
                {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    {...register('fullName')}
                    className={`shadow border rounded w-full p-2 ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
            </div>

            <div className="mb-4">
                <input
                    type="date"
                    {...register('dateOfBirth')}
                    className={`shadow border rounded w-full p-2 ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                />
                {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth.message}</span>}
            </div>

            <div className="mb-4 flex space-x-2">
                <input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                    className={`shadow border rounded w-full p-2 ${errors.email ? 'border-red-500' : ''}`}
                />
                <input
                    type="text"
                    placeholder="Area"
                    {...register('area')}
                    className={`shadow border rounded w-full p-2 ${errors.area ? 'border-red-500' : ''}`}
                />
                <input
                    type="text"
                    placeholder="City"
                    {...register('city')}
                    className={`shadow border rounded w-full p-2 ${errors.city ? 'border-red-500' : ''}`}
                />
                <input
                    type="text"
                    placeholder="Pin"
                    {...register('pin')}
                    className={`shadow border rounded w-full p-2 ${errors.pin ? 'border-red-500' : ''}`}
                />
            </div>

            <div className="mb-4">
                <label className="flex flex-col items-start gap-3">
                    <span className="ml-2">Do you smoke or use tobacco?</span>
                    <Switcher11
                        label="Smoking"
                        options={{ yes: "Smoking", no: "No Smoking" }}
                        onChange={(value) => setValue('smoking', value)}
                    />
                </label>
                {errors.smoking && <span className="text-red-500">{errors.smoking.message}</span>}
            </div>


            <div className="mb-4">
                <label className="flex flex-col items-start gap-3">
                    <span className="ml-2">Occupation type: Salaried or Self-employed?</span>
                    <Switcher11
                        label="Occupation"
                        options={{ yes: "Salaried", no: "Self-employed" }}
                        onChange={(value) => setValue('isSalaried', value)}
                    />

                </label>
                {errors.isSalaried && <span className="text-red-500">{errors.isSalaried.message}</span>}
            </div>

            <div className="mb-4">

                <Controller
                    name="annualIncome"
                    control={control}
                    render={({ field }) => (
                        <Select label="Annual Income" {...field}>
                            <Option value="5-10L">5L - 10L</Option>
                            <Option value="10-15L">10L - 15L</Option>
                        </Select>
                    )}
                />

                {errors.annualIncome && <span className="text-red-500">{errors.annualIncome.message}</span>}
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white flex justify-between gap-2">
                <button
                    type="button"
                    onClick={handleClose}
                    className="bg-transparent border border-deepPurple text-deepPurple px-4 py-2 rounded-4xl w-1/2"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-deepPurple text-white px-4 py-2 rounded-4xl w-1/2"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default PersonalInformationForm;

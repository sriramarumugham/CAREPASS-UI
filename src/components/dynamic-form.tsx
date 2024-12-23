import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Disclosure, DisclosureButton, DisclosurePanel, Switch } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import useCartStore, { CartItem } from '../store/cart-store';
import { ProductType, useProductStore } from '../store/product-store';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getProductsApi, postFormDataApi } from '../data/query';
import { useUserStore } from '../store/user-store';
import { Modal } from './ui/modal/modal';
import LoginModal from './ui/modal/login';
import { openPayModal } from '../utils/razorpay';
import { BASE_URL, RAZORPAY_ID } from '../data/api-endpoints';
import toast from 'react-hot-toast';


interface Field {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    options?: { label: string; value: string }[];
    fields?: Field[];
}
interface DynamicFormProps {
    product: ProductType;
    register: any;
    control: any;
    formIndex: any;
    setValue: any

}

const renderField = (field: Field, fieldName: string, register: any, control: any, isSelf?: boolean, setIsSelf?: any) => {
    switch (field.type) {
        case 'text':
        case 'email':
        case 'number':
            return (
                <div key={field.name} className="mb-4">
                    <label>{field.label}</label>
                    <input
                        {...register(fieldName, {
                            required: field.required && `${field.label} is required`,
                            min: field.type === 'number' ? 1 : undefined // Example for number validation
                        })}
                        type={field.type}
                        className="w-full p-2 border"
                    />
                    <span className="text-red-500">{field?.errors?.[fieldName]?.message}</span>
                </div>
            );
        case 'select':
            return (
                <div key={field.name} className="mb-4">
                    <label>{field.label}</label>
                    <select
                        {...register(fieldName, { required: field.required && `${field.label} is required` })}
                        className="w-full p-2 border"
                    >
                        <option value="">Select {field.label}</option>
                        {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <span className="text-red-500">{field.errors?.[fieldName]?.message}</span>
                </div>
            );
        case 'array':
            return (
                <FieldArraySection
                    key={field.name}
                    field={field}
                    control={control}
                    register={register}
                    fieldName={fieldName}
                />
            );
        case 'switch':
            return (
                <div className="mb-4 flex flex-col gap-3">

                    <label className="mr-4">Are you applying for yourself?</label>
                    <div className='flex items-center gap-3'>

                        <span className="text-sm">{"Other"}</span>
                        <div
                            onClick={() => setIsSelf(!isSelf)}
                            className={`flex h-6 w-14 cursor-pointer rounded-full transition-colors    items-center   duration-200 ${isSelf ? "bg-deep-purple-500" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ${isSelf ? "translate-x-7" : "translate-x-0"
                                    }`}
                            />
                        </div>
                        <span className="text-sm">{"Self"}</span>
                    </div>
                </div>
            );
        default:
            return null;
    }
};


const DynamicForm: React.FC<DynamicFormProps> = ({ product, register, control, formIndex, setValue }) => {



    const [isSelf, setIsSelf] = useState(true);


    const { getUser } = useUserStore();

    const userDetails = getUser() as { user?: { fullName: string, email: string, phoneNumber: string } };

    console.log("userDetails___", userDetails)

    useEffect(() => {
        if (isSelf) {
            setValue(`${product.productId}.${formIndex}.fullName`, userDetails?.user?.fullName);
            setValue(`${product.productId}.${formIndex}.primaryEmail`, userDetails?.user?.email);
            setValue(`${product.productId}.${formIndex}.primaryMobile`, userDetails?.user?.phoneNumber);
        } else {
            setValue(`${product.productId}.${formIndex}.fullName`, "");
            setValue(`${product.productId}.${formIndex}.primaryEmail`, "");
            setValue(`${product.productId}.${formIndex}.primaryMobile`, "");
        }
    }, [isSelf, product.productId, formIndex, setValue]);

    return (
        <>
            <h2>{product.productName}</h2>
            {product.formSchema.map((section) => (
                <div key={section.sectionTitle} className='flex flex-col gap-2  '>
                    <h3 className=''>{section.sectionTitle}</h3>
                    {section.fields.map((field) =>
                        renderField(field, `${product.productId}.${formIndex}.${field.name}`, register, control, isSelf, setIsSelf) // Updated field name
                    )}
                </div>
            ))}
        </>
    );
};

const FieldArraySection: React.FC<{
    field: Field;
    control: any;
    register: any;
    fieldName: string;
}> = ({ field, control, register, fieldName }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: fieldName,
    });

    const appendBeneficiary = () => {
        append({});
    };

    return (
        <div className='flex flex-col gap-4'>
            <label>{field.label}</label>
            {fields.map((item, index) => (
                <div key={item.id} className="border p-2 mb-2">
                    {field.fields?.map((subField) =>
                        renderField(subField, `${fieldName}[${index}].${subField.name}`, register, control)
                    )}
                    <button
                        type="button"
                        onClick={() => remove(index)}
                        className="p-2 bg-deepPurple text-white rounded hover:bg-purple-700 transition"
                    >
                        Remove Beneficiary
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={appendBeneficiary}
                className={`p-2 border rounded px-4 transition 
    ${fields.length >= field?.maxCount ?
                        'bg-gray-300 text-gray-500 cursor-not-allowed' :
                        'border-deepPurple text-deepPurple bg-white hover:bg-deepPurple hover:text-white'}`}
                disabled={fields.length >= field?.maxCount}
            >
                + Add Beneficiary
            </button>

        </div>
    );
};


export const Checkout = () => {
    const { control, register, handleSubmit, watch, setValue } = useForm();
    const formData = watch();
    const { cart } = useCartStore();
    // const { products } = useProductStore();

    const { data, isLoading: productLoading } = useQuery<{ products: ProductType[] }>(
        {
            queryKey: ['products'],
            queryFn: async () => {
                const data = await getProductsApi();
                console.log("data___", data);
                return data?.products; // Return the products directly
            },
        }
    );


    const products = data;




    const { getUser } = useUserStore();

    const userDetails = getUser() as { user?: { fullName: string, email: string, phoneNumber: string } };


    const { mutate, } = useMutation({
        mutationFn: async (formData: any) => {
            return await postFormDataApi(formData);
        },
        onSuccess: (response: any) => {
            const razorpayOrderDetails = response.data;
            console.log("razorpay_order_detilas---", razorpayOrderDetails);
            console.log("razorPay_id", RAZORPAY_ID)
            const options = {
                key: "rzp_test_wyq9rnIM0s8LOR",
                amount: 100,
                name: 'Carepass',
                order_id: razorpayOrderDetails.order_id,
                description: 'complete your order',
                image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
                callback_url: `${BASE_URL}/payment-callback`,
                handler: function () {

                },
                prefill: {
                    name: userDetails.user?.fullName,
                    contact: userDetails.user?.phoneNumber ?? "",
                    email: userDetails.user?.email,
                },
                notes: {
                    address: 'some address',
                },
                theme: {
                    color: 'blue',
                    hide_topbar: false,
                },
                redirect: true
            };
            openPayModal(options)
        },
        onError: (error) => {
            console.error("Error submitting form:", error);
        },
    });

    const { getAuth } = useUserStore();

    const [open, setOpen] = useState(false)

    const onSubmit = (data: any) => {
        if (!getAuth()) {
            setOpen(true);
            return;
        }
        console.log('Current Form Data:', formData, data);
        console.log("cart__", cart);
        let isValid = true;
        const alerts: string[] = []; // Collect alerts

        cart.forEach(item => {
            const productFormData = formData[item.productId] || [];

            // Check if productFormData is empty
            if (productFormData.length === 0) {
                alerts.push(`Please fill in the form for ${item.productName}.`);
                isValid = false;
            } else {
                productFormData?.forEach?.((formEntry) => {
                    const requiredFields = formEntry?.fields?.filter(field => field.required);
                    requiredFields?.forEach?.(field => {
                        if (!formEntry[field.name]) {
                            alerts.push(`${field.label} is required for ${item.productName}.`);
                            isValid = false;
                        }
                    });
                });
            }
        });

        if (!isValid) {
            alert(alerts.join('\n')); // Show all alerts at once
            return; // Exit if validation fails
        }

        console.log('Combined Form Data:', data);
        const result = transformFormData(formData, products, cart);
        console.log("Transformed Data:", result);
        mutate(result);
    };


    return (
        <>
            {open ? (
                <Modal open={open} setOpen={() => setOpen(false)}>
                    <LoginModal handleClose={() => setOpen(false)} />
                </Modal>
            ) : null}


            <div className="h-fit w-full px-4">
                <div className="mx-auto w-full max-w-2xl lg:max-w-4xl divide-y divide-gray-200 rounded-xl bg-white">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row py-4 mb-28 md:mb-2 ">
                        <div className="flex-grow pb-28 lg:pb-9 md:max-h-svh  md:overflow-y-auto scrollbar scrollbar-thumb-deepPurple scrollbar-track-gray-200 ">
                            {products?.length && cart?.map((item) => {
                                const filteredProd = products?.find(prod => prod.productId === item.productId);
                                return (
                                    <Disclosure as="div" className="p-6 shadow-md my-4" key={item.productId} defaultOpen={true} >
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="group flex w-full items-center justify-between">
                                                    <span className={`text-sm font-medium ${open ? 'text-gray-800' : 'text-gray-600'}`}>
                                                        {filteredProd?.productName} (x{item.quantity})
                                                    </span>
                                                    <ChevronDownIcon className={`size-5 fill-gray-600 transition-transform ${open ? 'rotate-180' : ''}`} />
                                                </DisclosureButton>
                                                <DisclosurePanel className="mt-2 text-sm text-gray-700 bg-gray-100 p-4 rounded-md">
                                                    {[...Array(item.quantity)].map((_, index) => (
                                                        <DynamicForm
                                                            key={`${item.productId}-${index}`} // Unique key
                                                            product={filteredProd!}
                                                            register={register}
                                                            control={control}
                                                            formIndex={index} // Pass the index
                                                            setValue={setValue}
                                                        />
                                                    ))}
                                                </DisclosurePanel>
                                            </>
                                        )}
                                    </Disclosure>
                                );
                            })}
                        </div>

                        <div className=" lg:flex flex-col lg:justify-start fixed lg:relative bottom-0 left-0 w-full lg:w-[300px]  p-4 m-0  ">
                            <TotalPrice products={cart} formData={formData} productData={products} />
                            <button type="submit" className="p-2 bg-deepPurple text-white w-full rounded hover:bg-purple-700 transition mt-2">
                                Proceed to Pay
                            </button>
                        </div>
                    </form>


                    {/* Fixed Submit Button for Mobile */}
                    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white ">
                        <TotalPrice products={cart} formData={formData} productData={products} />
                        <button onClick={handleSubmit(onSubmit)} className="p-2 bg-deepPurple text-white w-full rounded hover:bg-purple-700 transition">
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const calculateTotalPrice = (products, formData, productData) => {
    return products.reduce((total, product) => {
        const productDetails = productData?.find(p => p.productId === product.productId) || {};
        const quantity = product.quantity || 1;

        // Get the form data for the current product (array of beneficiaries)
        // const productFormData = formData[product.productId] || [];

        const beneficiariesCount = formData && Array.isArray(formData[product?.productId])
            ? formData[product.productId].reduce((count, item) => {
                return count + (Array.isArray(item.criticalIllnessBeneficiary) ? item.criticalIllnessBeneficiary.length : 0);
            }, 0)
            : 0;


        // Base product price
        const price = Number(productDetails.price) || 0;

        // Price per beneficiary
        const pricePerBeneficiary = Number(productDetails.pricePerCriticalIllnessBeneficiary) || 0;

        // Calculate the total cost for this product
        const productTotal = (price * quantity) + (beneficiariesCount * pricePerBeneficiary);


        return total + productTotal;
    }, 0);
};

const TotalPrice: React.FC<{
    products: CartItem[];
    formData: any;
    productData: ProductType[];
}> = ({ products, formData, productData }) => {

    const cartTotalPrice = useCartStore((state) => state.totalPrice); // Cart store total price

    const [totalPrice, setTotalPrice] = useState(cartTotalPrice);

    const priceChangeRef = useRef<number>(cartTotalPrice); // Ref to store the last known price
    useEffect(() => {
        const total = calculateTotalPrice(products, formData, productData);


        if (total > priceChangeRef.current) {
            const difference = total - priceChangeRef.current;
            toast.success(`Price raised by ${difference}, and total price is ${total}`, { id: total })
            priceChangeRef.current = total;
        }

        setTotalPrice(total);

    }, [products, formData, productData]);

    return (
        <div className="p-4 bg-gray-200 rounded-md">
            <Disclosure as="div" className="block     lg:hidden  " key={1} defaultOpen={false}>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="group flex w-full items-center justify-between">
                            <span className={`text-sm font-medium ${open ? 'text-gray-800' : 'text-gray-600'}`}>
                                <h3 className="font-light">Total: ₹{totalPrice}</h3>
                            </span>
                            <ChevronDownIcon className={`size-5 fill-gray-600 transition-transform ${open ? 'rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 text-sm text-gray-700 bg-gray-100 p-4 rounded-md" >
                            {products.map((product) => {
                                const productTotal = calculateTotalPrice([product], formData, productData);
                                return (
                                    <div key={product.productId} className="flex justify-between my-2">
                                        <span>{product.productName} (x{product.quantity}):</span>
                                        <span>₹{productTotal}</span>
                                    </div>
                                );
                            })}
                            <h3 className="text-lg font-bold mt-4">Total: ₹{totalPrice}</h3>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* For larger screens */}
            <div className="hidden lg:block">
                <h3 className="text-lg font-bold mt-4 text-deepPurple">Total Price Breakdown:</h3>
                {products.map((product) => {
                    const productTotal = calculateTotalPrice([product], formData, productData);
                    return (
                        <div key={product.productId} className="flex justify-between my-2">
                            <span>{product.productName} (x{product.quantity}):</span>
                            <span>₹{productTotal}</span>
                        </div>
                    );
                })}
                <h3 className="text-lg font-bold mt-4">Total: ₹{totalPrice}</h3>
            </div>
        </div>
    );
};

const transformFormData = (formData, productData, cart) => {
    const priceDetails = [];
    let totalPrice = 0;

    cart.forEach(product => {
        const productInfo = productData.find(p => p.productId === product.productId) || {};

        const quantity = product.quantity || 1;
        const price = Number(productInfo.price) || 0;

        const pricePerBeneficiary = Number(productInfo.pricePerCriticalIllnessBeneficiary) || 0;

        // Calculate total price for the current product
        const productTotal = price * quantity; // Base product total

        // Push to priceDetails for each user in formData
        const productFormData = formData[product.productId] || [];

        productFormData.forEach(item => {
            const beneficiariesCount = Array.isArray(item.criticalIllnessBeneficiary) ? item.criticalIllnessBeneficiary.length : 0;
            const totalBeneficiaryCost = beneficiariesCount * pricePerBeneficiary; // Only add for this user

            // Add price details for each user
            priceDetails.push({
                priceDetails: { price: price + totalBeneficiaryCost }, // Include total product price and beneficiary costs
                userDetails: {
                    productId: product.productId,
                    ...item
                }
            });
        });

        // Accumulate total price
        totalPrice += productTotal + (productFormData.reduce((sum, item) => {
            return sum + (Array.isArray(item.criticalIllnessBeneficiary) ? item.criticalIllnessBeneficiary.length * pricePerBeneficiary : 0);
        }, 0));
    });

    return {
        formDetails: priceDetails,
        totalPrice: totalPrice
    };
};

import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import useCartStore from '../store/cart-store';
import { ProductType, useProductStore } from '../store/product-store';

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
}

const renderField = (field: Field, fieldName: string, register: any, control: any) => {
    switch (field.type) {
        case 'text':
        case 'email':
        case 'number':
            return (
                <div key={field.name} className="mb-4">
                    <label>{field.label}</label>
                    <input
                        {...register(fieldName, { required: field.required })}
                        type={field.type}
                        className="w-full p-2 border"
                    />
                </div>
            );
        case 'select':
            return (
                <div key={field.name} className="mb-4">
                    <label>{field.label}</label>
                    <select
                        {...register(fieldName, { required: field.required })}
                        className="w-full p-2 border"
                    >
                        {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
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
        default:
            return null;
    }
};

const DynamicForm: React.FC<DynamicFormProps> = ({ product, register, control }) => {
    return (
        <>
            <h2>{product.productName}</h2>
            {product.formSchema.map((section) => (
                <div key={section.sectionTitle}>
                    <h3>{section.sectionTitle}</h3>
                    {section.fields.map((field) =>
                        renderField(field, `${product.productId}.${field.name}`, register, control)
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

    return (
        <div>
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
                onClick={() => append({})}
                className="p-2 bg-deepPurple text-white rounded hover:bg-purple-700 transition"
            >
                Add Beneficiary
            </button>
        </div>
    );
};

export const Checkout = () => {
    const { control, register, handleSubmit, watch } = useForm();
    const formData = watch();
    const { cart } = useCartStore();
    const { products } = useProductStore();

    const onSubmit = (data: any) => {
        console.log('Combined Form Data:', data);
    };

    return (
        <div className="h-fit w-full px-4">
            <div className="mx-auto w-full max-w-2xl lg:max-w-4xl divide-y divide-gray-200 rounded-xl bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row py-4 mb-28 md:mb-2">
                    <div className="flex-grow">
                        {cart.map((item) => {
                            const filteredProd = products?.find(prod => prod.productId === item.productId);
                            return (
                                <Disclosure as="div" className="p-6 shadow-md my-4" key={item.productId}>
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
                                                        key={`${item.productId}-${index}`}
                                                        product={filteredProd!}
                                                        register={register}
                                                        control={control}
                                                    />
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            );
                        })}
                    </div>

                    <div className="lg:w-1/3 lg:ml-4 lg:flex lg:flex-col lg:justify-start">
                        <TotalPrice products={cart} formData={formData} productData={products} />
                        <button type="submit" className="p-2 bg-deepPurple text-white w-full rounded hover:bg-purple-700 transition">
                            Submit
                        </button>
                    </div>
                </form>

                {/* Fixed Submit Button for Mobile */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white">
                    <TotalPrice products={cart} formData={formData} productData={products} />
                    <button type="submit" className="p-2 bg-deepPurple text-white w-full rounded hover:bg-purple-700 transition">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};





const TotalPrice: React.FC<{
    products: CartItem[]; // Cart data
    formData: any; // Form data for beneficiaries
    productData: ProductType[]; // Product details (price, pricePerBeneficiary)
}> = ({ products, formData, productData }) => {

    const calculateTotal = () => {
        return products.reduce((total, product) => {
            const productDetails = productData.find(p => p.productId === product.productId) || {};
            const quantity = product.quantity || 1; // Assuming quantity property

            // Get form data for the product
            const productFormData = formData?.[product.productId] || {};
            const beneficiaries = productFormData?.beneficiaries?.length || 0;

            const price = Number(productDetails.price) || 0;
            const pricePerBeneficiary = Number(productDetails.pricePerBeneficiary) || 0;

            // Total for this product considering quantity
            const productTotal = (price * quantity) + (beneficiaries * pricePerBeneficiary);
            return total + productTotal;
        }, 0);
    };

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = calculateTotal();
        setTotalPrice(total);
    }, [products, formData, productData]);

    return (
        <div className="p-4 bg-gray-200 rounded-md">
            <Disclosure as="div" className="block md:hidden" key={1} defaultOpen={false}>
                {({ open }) => (
                    <>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                            <span className={`text-sm font-medium ${open ? 'text-gray-800' : 'text-gray-600'}`}>
                                <h3 className="font-light">Total: ₹{totalPrice}</h3>
                            </span>
                            <ChevronDownIcon className={`size-5 fill-gray-600 transition-transform ${open ? 'rotate-180' : ''}`} />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-sm text-gray-700 bg-gray-100 p-4 rounded-md">
                            {products.map((product) => {
                                const productDetails = productData.find(p => p.productId === product.productId) || {};
                                const quantity = product.quantity || 1; // Get quantity
                                const beneficiaries = formData?.[product.productId]?.beneficiaries?.length || 0;

                                // Total calculation
                                const productTotal = (Number(productDetails.price) || 0) * quantity + (beneficiaries * (Number(productDetails.pricePerBeneficiary) || 0));

                                return (
                                    <div key={product.productId} className="flex justify-between my-2">
                                        <span>{productDetails.name || product.productId} (x{quantity}):</span>
                                        <span>₹{productTotal}</span>
                                    </div>
                                );
                            })}
                            <h3 className="text-lg font-bold mt-4">Total: ₹{totalPrice}</h3>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>

            {/* For larger screens */}
            <div className='hidden md:block'>
                <h3 className="text-lg font-bold mt-4 text-deepPurple">Total Price Breakdown:</h3>
                {products.map((product) => {
                    const productDetails = productData.find(p => p.productId === product.productId) || {};
                    const quantity = product.quantity || 1; // Get quantity
                    const beneficiaries = formData?.[product.productId]?.beneficiaries?.length || 0;

                    // Total calculation
                    const productTotal = (Number(productDetails.price) || 0) * quantity + (beneficiaries * (Number(productDetails.pricePerBeneficiary) || 0));

                    return (
                        <div key={product.productId} className="flex justify-between my-2">
                            <span>{productDetails.name || product.productId} (x{quantity}):</span>
                            <span>₹{productTotal}</span>
                        </div>
                    );
                })}
                <h3 className="text-lg font-bold mt-4">Total: ₹{totalPrice}</h3>
            </div>
        </div>
    );
};


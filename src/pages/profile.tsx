import FooterSection from "../components/footer"
import Navbar from "../components/nav-bar"
import React, { useState } from 'react';
import { fetchActivePlans, fetchPurchaseHistory } from "../data/query";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../store/user-store";

interface Tab {
    title: string;
    count?: number;
}

interface TabsComponentProps {
    tabs: Tab[];
    activeTab: number;
    setActiveTab: (index: number) => void;
}

const Tabs: React.FC<TabsComponentProps> = ({
    tabs,
    activeTab,
    setActiveTab,
}) => {
    return (
        <div className="w-full">
            <div className="flex border-b border-line-10 lg:w-[300px] max-[lg] mt-6 ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex-1 py-2 text-center ${activeTab === index
                            ? 'border-b-2 border-deepPurple text-deepPurple font-bold'
                            : 'text-gray-10 hover:text-deepPurple'
                            }`}
                    >
                        {tab.title} {tab?.count}
                    </button>
                ))}
            </div>
        </div>
    );
};


type Beneficiary = {
    fullName: string;
    age: string;
    relation: string;
    city?: string;
};

type Plan = {
    planId: string;
    purchasedDate: string;
    userDetails: {
        productId: string;
        fullName: string;
        age: string;
        primaryEmail: string;
        primaryMobile: string;
        beneficiaries: Beneficiary[];
    };
    productName: string;
    priceDetails: { price: number }[];
};

type ActivePlansProps = {
    plans: Plan[];
};

const ActivePlans: React.FC<ActivePlansProps> = ({ plans }) => {
    return (
        <div className="w-full p-4  min-h-svh  bg-gray-100">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                {plans?.map((plan) => (
                    <div
                        key={plan.planId}
                        className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-3"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-deepPurple w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold">
                                {plan.userDetails.fullName[0]}
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">{plan.userDetails.fullName}</h2>
                                <p className="text-sm text-gray-700">{plan.userDetails.primaryEmail}</p>
                                <p className="text-sm text-gray-700">{plan.userDetails.primaryMobile}</p>
                            </div>
                        </div>

                        <div className="p-3 rounded-md">
                            <p className="font-semibold">Plan ID:</p>
                            <p>{plan.planId}</p>
                        </div>

                        <div className="p-3 rounded-md">
                            <p className="font-semibold">Product Name:</p>
                            <p>{plan.productName}</p> {/* Display product name */}
                        </div>

                        <div className="bg-lightBlue-200 p-3 rounded-md">
                            <p className="font-semibold">Purchased Date:</p>
                            <p>{new Date(plan.purchasedDate).toLocaleDateString()}</p>
                        </div>

                        {plan.priceDetails.map((priceDetail, index) => (
                            <div key={index} className="bg-teal-200 p-3 rounded-md">
                                <p className="font-semibold">Price:</p>
                                <p>{`₹${priceDetail.price}`}</p>
                            </div>
                        ))}

                        {plan.userDetails.beneficiaries.length > 0 && (
                            <div className="bg-lightBlue-100 p-3 rounded-md">
                                <p className="font-semibold">Beneficiaries:</p>
                                {plan.userDetails.beneficiaries.map((beneficiary, idx) => (
                                    <div key={idx} className="mt-1">
                                        <p className="text-sm text-gray-700">{`Name: ${beneficiary.fullName}, Age: ${beneficiary.age}, Relation: ${beneficiary.relation}`}</p>
                                        {beneficiary.city && <p className="text-sm text-gray-700">City: {beneficiary.city}</p>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


const OrderHistory: React.FC<ActivePlansProps> = ({ plans }) => {
    return (
        <div className="w-full p-4 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {plans?.map((plan) => (
                    <div
                        key={plan.transactionId}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
                    >
                        <div className="flex justify-between gap-4">
                            <div className="flex-1">
                                <p className="font-semibold text-sm text-gray-600">Purchase Date:</p>
                                <p className="text-gray-800">{new Date(plan.purchasedDate).toLocaleDateString()}</p>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-sm text-gray-600">Transaction ID:</p>
                                <p className="text-gray-800">{plan.transactionId}</p>
                            </div>
                        </div>

                        <div className="flex justify-between gap-4">
                            <div className="flex-1">
                                <p className="font-semibold text-sm text-gray-600">Primary User:</p>
                                <p className="text-gray-800">{plan.userDetails.fullName}</p>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-sm text-gray-600">Plan ID:</p>
                                <p className="text-gray-800">{plan.planId}</p>
                            </div>
                        </div>

                        <div className="pt-4  border-t border-gray-300 mt-4">
                            <p className="font-semibold text-sm text-gray-600">Product Name:</p>
                            <p className="text-gray-800">{plan.productName}</p>
                        </div>

                        <div className="flex flex-col gap-4 mt-4  border-t border-gray-300">
                            <p className="font-semibold text-sm mt-4  text-gray-600">Price Details:</p>
                            {plan.priceDetails.map((priceDetail, index) => (
                                <div key={index} className="bg-teal-100  rounded-md shadow-sm">
                                    <p className="font-semibold text-sm text-gray-600">Price:</p>
                                    <p className="text-gray-800">{`₹${priceDetail.price}`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Add similar changes to other parts of the Profile component


const Profile = () => {
    const [tabs, setTabs] = useState(0);
    const data = [{ title: 'Active Plans' }, { title: 'Order History' }];

    const { data: purchaseHistory } = useQuery<any>({
        queryKey: ['purchaseHistory'],
        queryFn: async () => {
            const data = await fetchPurchaseHistory();
            console.log("purchaseHistory___", data);
            return data.data; // Return the fetched data directly
        },
    });

    const { data: activePlans } = useQuery<any>({
        queryKey: ['activePlans'],
        queryFn: async () => {
            const data = await fetchActivePlans();
            console.log("activePlans___", data);
            return data.data; // Return the fetched data directly
        },
    });

    const { user } = useUserStore();
    console.log("User___", user);

    return (
        <>
            <div className="w-full max-w-6xl mx-auto bg-gray-100"> {/* Added background color */}
                <div className="w-full px-2 py-6 flex flex-col justify-between items-center">
                    {/* Section 1 - Left */}
                    <div className="flex flex-row items-center gap-4 w-full px-4">
                        <div className="rounded-full bg-deepPurple p-5 w-[75px] h-[75px] flex items-center justify-center text-white font-bold">
                            {user?.user?.fullName && user?.user?.fullName[0]} {/* Use initials if full name is missing */}
                        </div>
                        <div>
                            <h1 className="text-deepPurple">{user?.user?.fullName}</h1>
                            <p className="text-gray-800">{user?.user?.email}</p>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse items-center gap-4 w-full px-4">
                        <div>
                            <p>Account created on: {new Date(user?.user?.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-md min-w-full">
                    <div className="p-3 md:p-0 bg-white rounded-lg shadow-md"> {/* Added background, shadow */}
                        <Tabs tabs={data} activeTab={tabs} setActiveTab={setTabs} />
                        <div className="flex flex-cols gap-3 items-center">
                            {tabs === 0 && (
                                <div className="w-full space-y-3 mt-5">
                                    <ActivePlans plans={activePlans} />
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="flex mt-5 md:px-0 space-x-5">
                                <div className="w-full">
                                    {tabs === 1 && (
                                        <div className="w-full space-y-3 mt-5">
                                            <OrderHistory plans={purchaseHistory} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const ProfilePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow flex w-full">
                    <Profile />
                </div>
                <FooterSection />
            </div>
        </>)
}
export default ProfilePage
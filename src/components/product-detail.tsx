import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cart-store";
import { ProductType, useProductStore } from "../store/product-store";
import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "../data/query";
import { ReactNode } from "react";
import Navbar from "./nav-bar";
import TrustedPartnersSection from "./trusted-partners";
import ContactUsSection from "./contact-us";
import FooterSection from "./footer";
import Gradient from '../assets/gradient.png'
import { ROUTES } from "../utils/routes";

export const ProductDetail = ({ productId }: { productId: string }) => {
    const navigate = useNavigate()
    const { addToCart } = useCartStore();
    const { setProducts, products } = useProductStore();
    const { data, error, isLoading } = useQuery<{ products: ProductType[] }>(
        {
            queryKey: ['products'],
            queryFn: async () => {
                const data = await getProductsApi();
                return data.products; // Return the products directly
            },
        }
    );
    if (isLoading) {
        console.log("Loading...");
        return <div>Loading...</div>;
    }
    if (error) {
        console.error("Error fetching products:", error);
        return <div>Error fetching products</div>;
    }
    if (data && products.length == 0) {
        setProducts(data);
    };
    const getProductById = (productId: string, products: ProductType[]) => {
        return products.find(product => product.productId === productId);
    };
    const product = getProductById(productId, products);

    const { productName, productDescription, price } = product as ProductType;

    const handleBuyNow = () => {
        addToCart({ productId, productName, price });
        navigate(ROUTES.CART, { relative: 'path' })
    };
    const handleAddToCart = () => {
        addToCart({ productId, productName, price });
    }

    return (
        <div className="bg-white p-5 rounded-3xl  shadow-lg min-w-96">
            <h2 className="text-xl font-semibold mb-4">{productName}</h2>
            <p className="text-gray-600 mb-4">{productDescription}</p>
            <p className="text-lg font-bold text-deepPurple">Price: ₹{price}</p>
            <div className="flex  items-center justify-between mt-4 " >



                <a role="button" className="underline text-deepPurple"
                    onClick={handleAddToCart}
                >Add to cart</a>
                <button
                    onClick={handleBuyNow}
                    className=" p-3 px-4  bg-deepPurple text-white rounded-md  hover:bg-purple-700 transition"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};


interface PlanLayoutProps {
    children: ReactNode; // Define the type for children
}

export const PlanLayout: React.FC<PlanLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />

            <div
                className="w-full px-[5px] py-[16px]  min-h-[450px] h-auto bg-cover bg-center flex flex-col lg:flex-row items-center justify-evenly gap-5 mg:gap-0 "
                style={{ backgroundImage: `url(${Gradient})` }}
            >
                {children}
            </div>

            <TrustedPartnersSection />
            <ContactUsSection />
            <FooterSection />
        </>
    );
};
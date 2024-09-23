
import useCartStore from "../store/cart-store";
import { getProductsApi } from "../data/query";
import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "../store/product-store";
import { ProductType } from '../../../backend/dist/types/product.type';



const Product1 = () => {

    const { setProducts, products } = useProductStore();

    const { data, error, isLoading } = useQuery<{ products: ProductType[] }>(
        {
            queryKey: ['products'],
            queryFn: async () => {
                const data = await getProductsApi();
                console.log("data___", data);
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
    console.log("PRODUCT___FROM_STROR__", products)
    if (data && products.length == 0) {
        setProducts(data);
    }


    return (
        <div>
            {products?.map(product => (
                <Product key={product.productId} productId={product.productId} productName={product.productName} price={product.price} />
            ))}
            <Cart />
        </div>
    );
}

export default Product1


interface ProductProps {
    productId: string;
    productName: string;
    price: number;
}
const Product: React.FC<ProductProps> = ({ productId, productName, price }) => {
    const { addToCart, increaseQuantity, decreaseQuantity, getQuantity, removeFromCart, totalPrice } = useCartStore();

    const quantity = getQuantity(productId);

    return (
        <div className="border rounded-lg p-4 shadow-md m-4">
            <h2 className="text-xl font-bold">{productName}</h2>
            <p className="text-lg text-gray-700">Price: ${price}</p>
            <p className="text-md">Quantity: {quantity}</p>
            <div className="flex space-x-2 mt-2">
                {quantity === 0 && (
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => addToCart({ productId, productName, price })}
                    >
                        Add to Cart
                    </button>
                )}
                {quantity === 1 && (
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => removeFromCart(productId)}
                    >
                        Delete
                    </button>
                )}
                {quantity > 0 && (
                    <>
                        <button
                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                            onClick={() => increaseQuantity(productId)}
                        >
                            +
                        </button>
                        {quantity > 1 && (
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                onClick={() => decreaseQuantity(productId)}
                            >
                                -
                            </button>
                        )}
                    </>
                )}
            </div>
            {quantity > 0 && (
                <>
                    <h3 className="mt-4 text-lg">Total Price for this Product: ${quantity * price}</h3>
                </>
            )}
            <h4 className="mt-4 text-md">Total Price in Cart: ${totalPrice}</h4>
        </div>
    );
}

const Cart = () => {
    const { totalItems, totalPrice } = useCartStore();

    return (
        <div className="border rounded-lg p-4 shadow-md m-4">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <p className="text-lg">Total Items in Cart: {totalItems}</p>
            <h3 className="text-lg">Total Price in Cart: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}

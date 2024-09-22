import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface CartItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
}

interface CartStore {
    cart: CartItem[];
    totalItems: number;
    totalPrice: number;
    addToCart: (product: {
        productId: string;
        productName: string;
        price: number;
    }) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    getQuantity: (productId: string) => number;
    getTotalPriceForProduct: (productId: string) => number;
}

const useCartStore = create(
    persist<CartStore>(
        (set, get) => ({
            cart: [],
            totalItems: 0,
            totalPrice: 0,
            addToCart: (product) => {
                const { cart } = get();
                const existingProduct = cart.find(
                    (item) => item.productId === product.productId
                );

                if (existingProduct) {
                    set({
                        cart: cart.map((item) =>
                            item.productId === product.productId
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({
                        cart: [...cart, { ...product, quantity: 1 }],
                    });
                }
                updateCartTotals(set);
            },
            increaseQuantity: (productId) => {
                set({
                    cart: get().cart.map((item) =>
                        item.productId === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                });
                updateCartTotals(set);
            },
            decreaseQuantity: (productId) => {
                const { cart } = get();
                const existingProduct = cart.find(
                    (item) => item.productId === productId
                );

                if (existingProduct) {
                    if (existingProduct.quantity === 1) {
                        get().removeFromCart(productId);
                    } else {
                        set({
                            cart: cart.map((item) =>
                                item.productId === productId
                                    ? { ...item, quantity: item.quantity - 1 }
                                    : item
                            ),
                        });
                        updateCartTotals(set);
                    }
                }
            },
            getQuantity: (productId) => {
                const item = get().cart.find(
                    (item) => item.productId === productId
                );
                return item ? item.quantity : 0;
            },
            getTotalPriceForProduct: (productId) => {
                const item = get().cart.find(
                    (item) => item.productId === productId
                );
                return item ? item.quantity * item.price : 0;
            },
            removeFromCart: (productId) => {
                set({
                    cart: get().cart.filter(
                        (item) => item.productId !== productId
                    ),
                });
                updateCartTotals(set);
            },
        }),
        {
            name: 'cart-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

const updateCartTotals = (set: any) => {
    set((state: CartStore) => ({
        totalItems: state.cart.reduce(
            (total, item) => total + item.quantity,
            0
        ),
        totalPrice: state.cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        ),
    }));
};

export default useCartStore;

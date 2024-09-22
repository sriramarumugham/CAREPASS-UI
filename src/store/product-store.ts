import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Static, Type } from '@sinclair/typebox';

// Define the product schema
export const ProductSchema = Type.Object({
    productId: Type.String(),
    productName: Type.String(),
    productDescription: Type.String(),
    price: Type.Number(),
    pricePerBeneficiary: Type.Number(),
    productStatus: Type.String(),
    noOfDependent: Type.Number(),
    subProducts: Type.Array(Type.String()),
    formSchema: Type.Array(
        Type.Object({
            sectionTitle: Type.String(),
            fields: Type.Array(
                Type.Object({
                    name: Type.String(),
                    label: Type.String(),
                    type: Type.String(),
                    required: Type.Boolean(),
                    options: Type.Optional(
                        Type.Array(
                            Type.Object({
                                label: Type.String(),
                                value: Type.String(),
                            })
                        )
                    ),
                    maxCount: Type.Optional(Type.Number()),
                    fields: Type.Optional(
                        Type.Array(
                            Type.Object({
                                name: Type.String(),
                                label: Type.String(),
                                type: Type.String(),
                                required: Type.Boolean(),
                                options: Type.Optional(
                                    Type.Array(
                                        Type.Object({
                                            label: Type.String(),
                                            value: Type.String(),
                                        })
                                    )
                                ),
                            })
                        )
                    ),
                })
            ),
        })
    ),
});

// Type definition for the product
export type ProductType = Static<typeof ProductSchema>;

// Define the store
type Store = {
    products: ProductType[]; // Change to non-nullable array
    setProducts: (products: ProductType[]) => void;
    getProducts: () => ProductType[]; // Change to non-nullable array
};

// Create the Zustand store
export const useProductStore = create<Store>()(
    persist(
        (set, get) => ({
            products: [], // Initialize with an empty array
            setProducts: (products) => set({ products }),
            getProducts: () => get().products,
        }),
        {
            name: 'product-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

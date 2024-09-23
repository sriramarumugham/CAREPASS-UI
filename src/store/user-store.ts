import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Static, Type } from '@sinclair/typebox';

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

const userSchema = Type.Object({
    userId: Type.String(),
    fullName: Type.String(),
    pin: Type.Optional(Type.String()),
    email: Type.String(),
    phoneNumber: Type.Optional(Type.String()),
    createdAt: Type.String({ format: 'date-time' }),
    modifiedAt: Type.String({ format: 'date-time' }),
    status: Type.Enum(UserStatus),
    token: Type.Union([Type.String(), Type.Null()]),
    annualIncome: Type.Optional(Type.String()), // Optional
    area: Type.Optional(Type.String()), // Optional
    city: Type.Optional(Type.String()), // Optional
    dateOfBirth: Type.Optional(Type.String()), // Optional
    gender: Type.Optional(Type.String()), // Optional with specific values
    isSalaried: Type.Optional(Type.Boolean()), // Optional
    smoking: Type.Optional(Type.Boolean()), // Optional
});

type UserType = Static<typeof userSchema>;

type Store = {
    user: UserType | null;
    updateUser(user: Partial<UserType>): void;
    clearStore: () => void;
    getUser: () => UserType | null;
    setAuth(auth: string): void;
    getAuth: () => string | null;
};

export const useUserStore = create<Store>()(
    persist(
        (set, get) => ({
            user: null,
            clearStore: () => {
                set(() => ({ user: null }));
            },
            getUser: () => get().user,
            updateUser: (user) =>
                set((state) => ({
                    user: { ...state.user, ...user } as UserType,
                })),
            setAuth: (newAuth: string) => {
                set((state) => ({
                    user: { ...state.user, token: newAuth } as UserType,
                }));
            },
            getAuth: () => get().user?.token || null,
        }),
        {
            name: 'user-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

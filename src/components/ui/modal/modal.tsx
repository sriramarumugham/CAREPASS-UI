import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React from 'react'

export const Modal = ({ children, open, setOpen }: { children: React.ReactNode, open: boolean, setOpen: () => void }) => {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8  w-fit data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className='px-4 py-7'>
                            {children}
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>

    )
}
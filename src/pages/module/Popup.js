import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";

export const Popup = (props) => {
    return (
        <div>
            <Transition.Root show={props?.open} as={Fragment}>
                <Dialog as="div" className="relative z-[99999] " initialFocus={props?.cancelButtonRef} onClose={props?.setOpen} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl custom-bottom-mobile">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-center">

                                            <div className="mt-3 text-center sm:mt-0 sm:text-left flex gap-[10px]">
                                                <div className="w-[80px] h-[50px] rounded-full bg-primary bg-opacity-10 flex items-center justify-center cursor-pointer">
                                                    <Icon
                                                        path={mdiRefresh}
                                                        className="btn-animation"
                                                        size={"26px"}
                                                        wobble={props.wobble}
                                                        color={"#124ee8"}
                                                    />
                                                </div>
                                                <p className="text-xl text-gray-500">
                                                    Your request is being processed. This may take a few moments. Thank you for your patience.....
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

import React from "react";
import { Close } from "./Icons";

export default function Drawer({ children, isOpen, setIsOpen }) {
    return (
        <main
            className={
                " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out h-full" +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-5/6 max-w-lg right-0 absolute bg-zinc-700 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative ml-3 mr-3 max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                    <header className="p-4 flex items-center justify-between" >
                        <span className="font-bold text-lg">Menu</span>
                        <div onClick={() => setIsOpen(false)}>
                            <Close />
                        </div>
                    </header>
                    {children}
                </article>
            </section>
        </main>
    );
}

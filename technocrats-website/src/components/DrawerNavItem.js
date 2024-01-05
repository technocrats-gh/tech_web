import React from "react";

//yCoord is the y-coordinate for the component to enable scrolling to that component
export default function DrawerNavItem({ path, label, icon: Icon, setIsOpen }) {
    const handleClickScroll = () => {
        const element = document.getElementById(path);
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <div className="border border-amber-500 shadow rounded-md p-4 max-w-sm w-full mx-auto items-center cursor-pointer">
            <div className="flex space-x-4">
                <Icon className="h-6 w-6 text-gray-500" />
                <div className="h-4 rounded w-3/4"
                    onClick={() => { setIsOpen(false); handleClickScroll() }}
                >
                    {label}
                </div>
            </div>
        </div>
    );
}
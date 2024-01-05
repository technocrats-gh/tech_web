import React from "react";
import { handleClickScroll } from "./CommonFuns";

//yCoord is the y-coordinate for the component to enable scrolling to that component
export default function DrawerNavItem({ path, label, icon: Icon, setIsOpen }) {

    return (
        <div className="border border-amber-500 shadow rounded-md p-4 max-w-sm w-full mx-auto items-center cursor-pointer">
            <div className="flex space-x-4">
                <Icon className="h-6 w-6 text-gray-500" />
                <div className="h-4 rounded w-3/4"
                    onClick={() => { setIsOpen(false); handleClickScroll(path, 100) }}
                >
                    {label}
                </div>
            </div>
        </div>
    );
}
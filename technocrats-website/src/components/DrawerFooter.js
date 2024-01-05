import React from "react";
import { LinkedIn, Facebook, GitHub } from "./Icons";

//yCoord is the y-coordinate for the component to enable scrolling to that component
export default function DrawerFooter() {
    return (
        <div className="p-4 max-w-sm mx-auto items-center pt-20">
            <div className="flex space-x-10">
                <a className="h-4" href="/">
                    <LinkedIn className="h-6 w-6" />
                </a>
                <a className="h-4" href="/">
                    <Facebook className="h-6 w-6" />
                </a>
                <a className="h-4" href="/">
                    <GitHub className="h-6 w-6" />
                </a>
            </div>
        </div>
    );
}
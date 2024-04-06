"use client";
import { siteConfig } from "@/config/site-config";
import { Home } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";
import Typewriter from "typewriter-effect";
const nNotFound = () => {
    return (
        <div
    key="left-panel"
    className="flex flex-col py-6 xl:max-w-sm xl:py-10 xl:h-full"
>
    {/* Top Container */}
    <div className="text-center xl:text-left">
        

        {/* Text Container */}
        <div className="mt-4">          
            <p className="text-center w-11/12 text-4xl font-light text-neutral-300 xl:text-center w-11/12 text-6xl font-light text-neutral-300">
            404
            </p>
            <p className="text-center w-11/12 text-4xl font-light text-neutral-300 xl:text-center w-11/12 text-6xl font-light text-neutral-300">
            Page Not Found
            </p>
        </div>
    </div>
    {/* Buttons Container */}
    <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-3">
        <a
            href={`/`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800  bg-neutral-100 dark:bg-neutral-800"
        >
            <Home size="14" />
            Go Home Page
        </a>
    </div>
</div>

    );
};

export default nNotFound;
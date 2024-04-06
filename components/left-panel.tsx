"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";
import Typewriter from "typewriter-effect";
const LeftPanel = () => {
    return (
        <div
    key="left-panel"
    className="flex flex-col py-6 xl:max-w-sm xl:py-10 xl:h-full"
>
    {/* Top Container */}
    <div className="text-center xl:text-left">
        <div className="flex justify-center xl:justify-start">
            <Image
                priority
                loading="eager"
                alt="avatar"
                src="https://elefante.is-pretty.cool/sRkS7mF.png"
                width={220}
                height={220}
            />
        </div>

        {/* Text Container */}
        <div className="mt-6">
            <div className="text-xl font-medium text-primary">
                {siteConfig.title}
            </div>
            <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
            <p className="text-xl font-light text-neutral-500 xl:text-2xl font-light text-neutral-500 mt-2">
                {siteConfig.bio}
            </p>

            <p className="w-11/12 text-md font-light text-neutral-500 xl:w-11/12 text-sm font-light text-neutral-500 mt-2">
                Find all of my useful Links and Get to know more about my projects & experience.
            </p>
        </div>
    </div>
    {/* Buttons Container */}
    <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-3">
        <a
            href={`${siteConfig.locationLink}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800  bg-neutral-100 dark:bg-neutral-800"
        >
            <MapPin size="14" />
            {siteConfig.location}
        </a>
        <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center w-full  gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800"
        >
            <Mail size="14" />
            Contact Me
        </a>
    </div>
</div>

    );
};

export default LeftPanel;
// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button.tsx";
import Lottie from "lottie-react";
import brokenHeart from "../../public/assets/lottie/brokenHeart.json";

export default function Page() {
    const [states, setState] = useState({
        first: true,
        buttons: true,
        second: false,
        secondText: false,
        buttonPosition: { x: 0, y: 0 },
        elapsedTime: {},
    });

    useEffect(() => {
        const startDate = new Date("2024-01-10T18:50:00");

        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const elapsed = currentDate - startDate;
            const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
            setState((prevState) => ({
                ...prevState,
                elapsedTime: {
                    days,
                    hours,
                    minutes,
                    seconds,
                },
            }));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const updateState = (newState: any) => {
        if (newState.second === true) {
            setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    ...{ secondText: true },
                }));
            });
        }
        setState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    };

    const handleNoButtonClick = () => {
        const randomX = Math.random() * (window.innerWidth - 200);
        const randomY = Math.random() * (window.innerHeight - 200);
        updateState({ buttonPosition: { x: randomX, y: randomY } });
    };

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-5 overflow-hidden">
            <AnimatePresence onExitComplete={() => updateState({ second: true })}>
                {states.first && (
                    <motion.div
                        key="first"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 50,
                        }}
                        className="flex flex-col items-center gap-5 text-center"
                    >
                       <span className="text-4xl">kaç gün oldu</span>
                       <span className="text-lg">öğrenmek istiyor musun?</span>
                        <AnimatePresence
                            onExitComplete={() => updateState({ first: false })}
                        >
                            {states.buttons && (
                                <motion.div
                                    key="buttons"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 50,
                                    }}
                                    className={"flex flex-row gap-5"}
                                >
                                    <Button onClick={() => updateState({ buttons: false })} >
                                        Evet
                                    </Button>
                                    {/* <Button
                                        className={
                                            states.buttonPosition.x !== 0 &&
                                            states.buttonPosition.y !== 0
                                                ? "absolute z-10"
                                                : ""
                                        }
                                        style={{
                                            left: states.buttonPosition.x,
                                            top: states.buttonPosition.y,
                                        }}
                                        onClick={handleNoButtonClick}
                                        onMouseEnter={handleNoButtonClick}
                                    >
                                        Hayır
                                    </Button> */}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {states.second && (
                    <motion.div
                        key="second"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 50,
                        }}
                        className="flex flex-col items-center gap-5 text-center"
                    >
                        {/* <Lottie
                            animationData={brokenHeart}
                            className="flex items-center justify-center"
                            loop={false}
                        /> */}
                        <AnimatePresence>
                            {states.secondText && (
                                <motion.span
                                    key="secondText"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 50,
                                    }}
                                    className="text-lg"
                                >
                                    {states.elapsedTime ? (
                                        <span>
                      Her şeyi batırdığımdan beri {states.elapsedTime.days} gün,{" "}
                                            {states.elapsedTime.hours} saat,{" "}
                                            {states.elapsedTime.minutes} dakika,{" "}
                                            {states.elapsedTime.seconds} saniye olmuş.
                    </span>
                                    ) : (
                                        "Loading..."
                                    )}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
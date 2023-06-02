"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Button = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const onClick = (mode: string) => () => {
        setTheme(mode);
    };

    return (
        <>
            {currentTheme === "dark" ? (
                <BsFillMoonFill onClick={onClick("light")} />
            ) : (
                <BsFillSunFill onClick={onClick("dark")} />
            )}
        </>
    );
};

export default Button;

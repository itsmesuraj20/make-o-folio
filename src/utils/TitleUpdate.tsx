"use client"

import { useMakeofolio } from "@/components/Makeofolio"
import { useEffect } from "react";

export const TitleUpdate = () => {
    const { isMakeofolioOn } = useMakeofolio();
    
    useEffect(() => {
       document.title = isMakeofolioOn ? "Shining Suraj" : "Suraj Singh";
    }, [isMakeofolioOn]);
    
    return null; // This component does not render anything
    }
"use client"

import React,{ createContext , useContext , useEffect, useState} from "react";


type MakeofolioContextType = {
  isMakeofolioOn: boolean;
  toggleMakeofolio: () => void
}

const MakeofolioContext = createContext<MakeofolioContextType | undefined>(undefined);

export const MakeofolioProvider: React.FC<{ children: React.ReactNode }> = ({
     children ,
     }) => {
  const [isMakeofolioOn, setIsMakeofolioOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check if the Makeofolio is already enabled in localStorage
        const storedValue = localStorage.getItem("isMakeofolioOn");
        if (storedValue !== null) {
        setIsMakeofolioOn(JSON.parse(storedValue));
        }
        setIsLoaded(true);
    }, []);

  const toggleMakeofolio = () => {
    setIsMakeofolioOn((prev) => {
      const newValue = !prev;
      // Save the new value to localStorage
      localStorage.setItem("isMakeofolioOn", JSON.stringify(newValue))
      return newValue
  })
}

  return (
    <MakeofolioContext.Provider value={{ isMakeofolioOn, toggleMakeofolio }}>
      {isLoaded ? children : null} {" "}
      {/*Ensure children are rendered only after the state is loaded*/}
    </MakeofolioContext.Provider>
  )
}

export const useMakeofolio = () => {
  const context = useContext(MakeofolioContext);
  if (!context) {
    throw new Error("useMakeofolio must be used within a MakeofolioProvider");
  }
  return context;
}
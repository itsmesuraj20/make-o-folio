"use client"

import Screen from "@/layout/Screen";
import { useMakeofolio } from "../Context/Makeofolio";
import AboutMe from "@/PageComponent/AboutMe";

const IndexPage = () => {
  const { isMakeofolioOn } = useMakeofolio();

  return (
    <Screen>
      <div className="flex flex-col gap-4">
        <AboutMe />
        {/* Add more components or sections as needed */}
      </div>
    </Screen>
  );
};

"use client"
import SectionTitle from "@/components/SectionTitle"
import { useMakeofolio } from "@/components/Context/Makeofolio"
import { surajBio } from "@/data/SurajSinghData/data"

const AboutMe = () => {
  const { isMakeofolioOn } = useMakeofolio()

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="About Me" />
      <div className="flex flex-col gap-2">
        <div
          dangerouslySetInnerHTML={{
            __html: isMakeofolioOn ? surajBio : surajBio,
          }}
          className="flex flex-col gap-1"
        />
      </div>
    </section>
  )
}

export default AboutMe
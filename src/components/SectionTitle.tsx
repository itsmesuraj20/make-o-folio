import React from "react"

const SectionTitle = ({ title }: { title: string }) => {
  return <h1 className=" text-lg font-semibold">{title}.</h1>
}

export default SectionTitle
// This component is used to display section titles in a consistent style across the application.
// It accepts a `title` prop and renders it inside an `<h1>` element with specific styling.
// The styling includes a larger font size and a semi-bold font weight to make the title stand out.
// This component can be reused in different sections of the application to maintain a uniform look and
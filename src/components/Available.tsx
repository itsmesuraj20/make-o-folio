import { GoDotFill } from "react-icons/go";

const Available = ({text} : {text: string}) => {
    return (
    <div className="select-none font-medium text-xs w-fit  border px-1.5 py-0.5 rounded-md flex gap-0.5 items-center border-green-400 text-green-400">
      <span className="animate-pulse">
        <GoDotFill />
      </span>

      {text}
    </div>
  )
}

export default Available;
// This component is used to show the availability status of the user, such as "Available",
// "Online", or "Available for work". It uses the GoDotFill icon from react     
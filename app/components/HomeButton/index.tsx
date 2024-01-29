import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const HomeButton = () => {
  return (
    <Link href={"#"}>
      <button
        type="button"
        className="w-12 h-12 bg-transparent border-2 border-white transition cursor-pointer text-white focus:outline-none font-medium rounded-full text-xl flex justify-center items-center fixed z-20 top-[90%] left-[90%] hover:bg-white hover:text-blue-950"
      >
        <FaArrowUp />
      </button>
    </Link>
  );
};

export default HomeButton;

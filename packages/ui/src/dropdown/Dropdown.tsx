import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

interface LinksDropdownProps {
  Title: string;
  links: { title: string; link: string }[];
}
const Dropdown = ({ Title, links }: LinksDropdownProps) => {
  const { theme } = useTheme();
  const [Dropdown, setDropdown] = useState(false);
  return (
    <div className="flex flex-col items-center  group cursor-pointer text-black dark:text-white w-full  ">
      <div
        className="flex items-center gap-2 text-white bg-transparent text-[20px]   mt-2 ml-4"
        onClick={() => setDropdown(!Dropdown)}
      >
        <p className="text-black dark:text-white">{Title}</p>
        {Dropdown ? (
          <ChevronUp widths={30} height={30} color={theme=="dark"? "white":"black"} />
        ) : (
          <ChevronDown widths={30} height={30} color={theme=="dark"? "white":"black"}/>
        )}
      </div>
      <div className="flex flex-col text-white bg-[#c567ff] dark:bg-richblue-500 w-[100%] items-center">
        {Dropdown && links.length ? (
          links.map((sublink, index) => (
            <Link
              href={sublink.link || "/"}
              className="rounded-lg bg-transparent py-4 pl-4 focus:ring-2 w-full flex flex-col items-center hover:ring-2 "
              key={index}
            >
              <p>{sublink.title}</p>
            </Link>
          ))
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

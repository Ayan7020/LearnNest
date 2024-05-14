import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface LinksDropdownProps {
  Title: string;
  links: { title: string; link: string }[];
}
const Dropdown = ({ Title, links }: LinksDropdownProps) => {
  const [Dropdown, setDropdown] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer text-white w-full">
      <div
        className="flex  justify-center gap-2 text-white bg-transparent text-[20px]"
        onClick={() => setDropdown(!Dropdown)}
      >
        <p>{Title}</p>
        {Dropdown ? (
          <ChevronUp widths={30} height={30} />
        ) : (
          <ChevronDown widths={30} height={30} />
        )}
      </div>
      <div className="flex flex-col bg-slate-900 w-[100%] items-center">
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

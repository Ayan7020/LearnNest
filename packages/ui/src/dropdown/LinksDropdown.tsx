"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface LinksDropdownProps {
  Title: string;
  links: { title: string; link: string }[];
}
const LinksDropdown = ({ Title, links }: LinksDropdownProps) => {
  return (
    <div className="relative flex items-center gap-2 group cursor-pointer text-black dark:text-white ">
      <p>{Title}</p>
      <ChevronDown />
      <div
        className={`invisible absolute left-[50%] translate-x-[-49%] ${links.length ? "translate-y-[15%]" : "translate-y-[40%]"}  top-[50%] z-50 flex flex-col items-center rounded-md bg-slate-900 p-4 text-white opacity-0 transition-all duration-200 group-hover:visible  group-hover:opacity-100 w-[200px] lg:w-[300px] `}
      >
        <div className="absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-slate-900"></div>
        {links.length ? (
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

export default LinksDropdown;

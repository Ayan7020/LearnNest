"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./shad/ui/button";
import Sidebar from "./Sidebar";
import LinksDropdown from "./dropdown/LinksDropdown";

import { NavbarLinks } from "../../data/Navbar-links";

const subLinks = [
  {
    title: "Python",
    link: "/catalog/python",
  },
  {
    title: "Web Dev",
    link: "/catalog/web-development",
  },
];

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const router = usePathname();

  const token = null;

  return (
    <div>
      <div className="flex h-20 items-center justify-center shadow-lg shadow-indigo-500/50">
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-semibold">LearnNest</h1>
          </Link>
          <nav>
            <ul className="hidden md:flex gap-x-6 text-lg text-[#7C7575]">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <LinksDropdown Title={link.title} links={subLinks} />
                  ) : (
                    <Link href={link.path || "/"}>
                      <p
                        className={
                          router === link.path
                            ? "text-[#9C49CF]"
                            : "text-white hover:text-[#9C49CF]"
                        }
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:flex gap-3">
            {token === null && (
              <Button className="bg-transparent h-12 text-white rounded-lg hover:bg-transparent focus:ring-2">
                Login
              </Button>
            )}
            {token === null && (
              <Button className="bg-[#9C49CF] h-12 text-white rounded-lg hover:bg-[#671997] focus:ring-2">
                Signup
              </Button>
            )}
          </div>
          <div className="block sm:hidden">
            <Button
              onClick={() => setToggle(!toggle)}
              className="h-12 bg-black text-white rounded-lg focus:bg-black"
            >
              {toggle ? <X color="white" /> : <AlignJustify color="white" />}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative">
        {toggle && <Sidebar onClick={() => {
          setToggle(!toggle)
        }} />}
        {children}
      </div>
    </div>
  );
};

export default Navbar;

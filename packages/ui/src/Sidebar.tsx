import { motion } from 'framer-motion';
import { NavbarLinks } from "../../data/Navbar-links";
import Dropdown from "./dropdown/Dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./shad/ui/button";

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

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-10%" },
};

const Sidebar = ({onClick}:{
  onClick: () => void
}) => {
  const router = usePathname();
  const isOpen = true; 

  return (
    <motion.div
      className="fixed bg-black w-[50%] h-[100%] text-white flex flex-col gap-4 pt-20 top-0"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <ul className="flex flex-col gap-4 text-[20px] w-full">
        {NavbarLinks.map((link, index) => (
          <li key={index} className="w-full">
            {link.title === "Catalog" ? (
              <Dropdown Title={link.title} links={subLinks} />
            ) : (
              <Link href={link?.path || "/"} onClick={onClick}>
                {/* Use <p> tag for clickable text */}
                <p
                  className={`cursor-pointer ${router === link?.path ? "text-[#9C49CF]" : "text-white hover:text-[#9C49CF]"} flex flex-col items-center`}
                >
                  {link.title}
                </p>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 pt-4 border-t-2 border-white items-center">
        <Button className="bg-transparent border border-white text-white rounded-[15px] px-6 py-3 hover:bg-transparent hover:text-white  transition-colors duration-300 ease-in-out focus:ring-2">
          Login
        </Button>
        <Button className="bg-[#9C49CF] text-white rounded-[15px] px-6 py-3 hover:bg-[#671997] transition-colors duration-300 ease-in-out">
          Signup
        </Button>
      </div>
    </motion.div>
  );
};

export default Sidebar;

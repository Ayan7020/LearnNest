import { Button } from "./shad/ui/button";
import { ModeToggle } from "./Toggle/ToggleTheme";

const Navbar = () => {
  return (
    <div className="flex justify-around font-poppins mt-4 items-center shadow-lg shadow-indigo-500/50 pb-3 ">
      <div className="text-[30px] font-semibold cursor-pointer">
        <h1>LearnNest</h1>
      </div>
      <div>
        <ul className="flex gap-5 text-[20px] text-[#7C7575] cursor-pointer">
          <li className="text-black dark:text-white">Home</li>
          <li className="hover:text-white">Catalog</li>
          <li className="hover:text-white">About us</li>
          <li className="hover:text-white">Contact us</li>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <Button className="bg-white text-black shadow-none border-none rounded-[15px] p-5 pt-3 h-[43px] hover:bg-slate-100 text-[20px] dark:bg-black dark:text-white dark:hover:bg-slate-800">
          Login
        </Button>
        <Button className="bg-[#9C49CF] text-[20px] shadow-none border-none rounded-[15px] p-4 pt-3 h-[43px] hover:bg-[#671997] dark:text-white ">
          Signup
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

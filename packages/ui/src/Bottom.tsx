import { UserSideBar } from "@repo/data/Usersidebarconfig";
import { UserSideBarItem } from "@repo/types/Usersidebar";
import Bottombarlinks from "./Bottombarlinks";

const Bottom = () => {
    return (
        <div className="w-full  bg-white dark:bg-[#000000]  shadow-2xl shadow-black fixed bottom-0 block xl:hidden">
            <ul className="flex justify-around">
                {UserSideBar.map((element: UserSideBarItem, index): any => {
                    return (
                        <li key={index} className="flex-1">
                            <Bottombarlinks links={element.path} iconName={element.icon} name={element.name} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Bottom;

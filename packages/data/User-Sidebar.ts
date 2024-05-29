import { UserSideBarItem } from "@repo/types/Usersidebar"
export const UserSideBar: UserSideBarItem[] =  [
    {
    id: 1,
    name: "My Profile",
    path: "/myprofile",
    icon: "User",
    },
    {
        id: 2,
        name: "Dashboard",
        path: "/dashboard",
        icon: "LayoutDashboard"
    },
    {
        id: 3,
        name: "My Courses",
        path: "/mycourses",
        icon: "Monitor"
    },
    {
        id: 4,
        name: "Add Courses",
        path: "/addcourses",
        icon: "Plus"
    }
]
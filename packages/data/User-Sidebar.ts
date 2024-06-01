import { UserSideBarItem } from "@repo/types/Usersidebar"
export const UserSideBar: UserSideBarItem[] =  [
    {
    id: 1,
    name: "My Profile",
    path: "/dash/myprofile",
    icon: "User",
    },
    {
        id: 2,
        name: "Dashboard",
        path: "/dash/dashboard",
        icon: "LayoutDashboard"
    },
    {
        id: 3,
        name: "My Courses",
        path: "/dash/mycourses",
        icon: "Monitor"
    },
    {
        id: 4,
        name: "Add Courses",
        path: "/dash/addcourses",
        icon: "Plus"
    }
]
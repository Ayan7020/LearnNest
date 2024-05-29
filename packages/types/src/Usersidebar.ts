import * as Icons from "lucide-react"

type IconNames = keyof typeof Icons;

export interface UserSideBarItem {
    id: number;
    name: string;
    path: string;
    icon: IconNames;
}
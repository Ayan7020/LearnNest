import { Button } from "../shad/ui/button"; 
interface Buttonprops {
    children: React.ReactNode;
    onClick: () => void;
    className?: string; 
}
const NormalButton = ({children,onClick,className}:Buttonprops) => {
    return (
        <div> 
            <Button onClick={onClick} className={className}>{children}</Button>
        </div>
    )
}  

export default NormalButton
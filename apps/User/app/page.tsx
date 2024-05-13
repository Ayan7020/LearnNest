 
import { Button } from "@repo/ui/button"; 
import { ModeToggle } from "@repo/ui/ToggleTheme";
export default function Page(): JSX.Element {
  return (
     <div>
      <Button/> 
      <ModeToggle/>
      <div className="bg-red-500">Button</div>
      User-App
     </div>
  );
}

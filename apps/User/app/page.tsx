 
import { Button } from "@repo/ui/button"; 
import { ModeToggle } from "@repo/ui/ToggleTheme";
import {BackgroundGradientDemo} from "@repo/ui/GradCard"
export default function Page(): JSX.Element {
  return (
     <div>
      <Button/> 
      <ModeToggle/>
      <div className="bg-red-500">Button</div>
      User-App
      <BackgroundGradientDemo />

     </div>
  );
}

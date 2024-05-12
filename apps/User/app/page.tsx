 
import { Button } from "@repo/ui/button"; 
export default function Page(): JSX.Element {
  return (
     <div>
      <Button appName="User">User-app</Button>
      <div className="bg-red-500">Button</div>
      User-App
     </div>
  );
}

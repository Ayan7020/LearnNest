import type { Metadata } from "next"; 
export const metadata: Metadata = {
  title: "LearnNest-Signup", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {   
  return ( 
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center"> 
        {children} 
    </div>
  );
}

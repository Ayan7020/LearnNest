import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Providers } from "./provider";
import Navbar from "@repo/ui/Navbar";  
import { Toaster } from "react-hot-toast"; 

 
export const metadata: Metadata = {
  title: "LearnNest",
  description: "Next.js Course Website",
  keywords: ["Next.js", "React", "Course", "Turborepo"],  
  authors: [{name: "Ayan Shaikh" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="h-full">
        <Providers> 
        <Toaster />  
          <Navbar children={children} />  
        </Providers>
      </body>
    </html>
  );
}

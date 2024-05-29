import * as React from 'react';
import SidebarUser from "@repo/ui/Sidebaruser";
import BottomBar from "@repo/ui/BottomBar"

import type { Metadata } from "next"; 
export const metadata: Metadata = {
  title: "LearnNest-Dashboard", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {   
  return ( 
    <div className='flex flex-col h-[calc(100vh-5rem)] w-full'>
      <div className='flex h-screen'>
        <SidebarUser/>
        <div className='w-full flex justify-center'>
          {children}
        </div> 
      </div>
      <BottomBar/>
    </div>
  );
}

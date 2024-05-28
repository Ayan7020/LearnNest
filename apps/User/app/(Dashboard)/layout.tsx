import * as React from 'react';
import SidebarUser from "@repo/ui/Sidebaruser";

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
     <div className='flex h-[calc(100vh-5.0rem)] w-full '>
      <SidebarUser/>
      <div className='w-full flex justify-center'>
      {children}
      </div> 
     </div>
  );
}

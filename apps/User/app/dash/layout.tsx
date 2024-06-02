import * as React from 'react';
import SidebarUser from "@repo/ui/Sidebaruser";
import BottomBar from "@repo/ui/BottomBar";

import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';
export const metadata: Metadata = {
  title: "LearnNest-Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-screen'> 
      <div className='flex flex-1'>
        <SidebarUser />
        <div className='mx-auto w-11/12 max-w-[1000px] py-10'> 
          {children}
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

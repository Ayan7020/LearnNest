import * as React from 'react';
import SidebarUser from "@repo/ui/Sidebaruser";
import BottomBar from "@repo/ui/BottomBar"
import { getServerSession } from 'next-auth';

import type { Metadata } from "next"; 
import { authOptions } from '../../lib/auth';
import { redirect } from 'next/navigation';
export const metadata: Metadata = {
  title: "LearnNest-Dashboard", 
};

export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
    const session = await getServerSession(authOptions); 
    const data = JSON.stringify(session)

    if(!session || !session?.user.Authenticated){
        redirect('/login') 
    }
    
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

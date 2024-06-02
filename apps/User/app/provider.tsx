"use client"
import { ThemeProvider } from "@repo/ui/Themeprovider"; 
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    > 
      <SessionProvider> 
      <RecoilRoot> 
        {children}
      </RecoilRoot>
      </SessionProvider>
    </ThemeProvider>
  );
}

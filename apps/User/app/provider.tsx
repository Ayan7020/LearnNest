"use client"
import { ThemeProvider } from "@repo/ui/Themeprovider";
import { RecoilRoot } from "recoil";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RecoilRoot>
      {children}
      </RecoilRoot>
    </ThemeProvider>
  );
}

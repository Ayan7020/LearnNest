import "@repo/ui/globals.css";
import type { Metadata } from "next"; 
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
          <Providers>
             {children}
          </Providers>
        </body>
    </html>
  );
}

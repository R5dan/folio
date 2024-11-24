import "~/styles/globals.css";


import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";
import { GeistSans } from "geist/font/sans";


export const metadata: Metadata = {
  title: "Folio",
  description: "Folio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
        <html lang="en" className={`dark text-white font-bold ${GeistSans.variable}`}>
            <body className="m-0 bg-black overflow-hidden">
              <div className="flex ">
                <TopNav/>
              </div>
              <div>
                {children}
              </div>
            </body>
        </html>
    </ClerkProvider>
  );
}

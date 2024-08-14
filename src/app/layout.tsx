import type { Metadata } from "next";
import { Inter,Life_Savers,Baskervville } from "next/font/google";
import "./globals.css";
import Nav from "@/shared/Navbar";
import Footer from "@/shared/Footer"
import { NextUIProvider } from "@nextui-org/system";
import ScrollToTop from "@/shared/ScrollToTop";


export const inter = Inter({ subsets: ["latin"] });

export const subFont = Life_Savers({ 
    weight: "400",
    subsets: ["latin"],
    style: ["normal"]
    });
export const mainFont = Baskervville({ 
    weight:"400",
    subsets: ["latin"],
    style: ["normal"]
    });

  
const metadata: Metadata = {
  title: "Corbins",
  description: "Corbins",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0d0d0d]">
      <body className={`${inter.className}` } >
        <NextUIProvider>
          {/* <SectionWrapper> */}
            <Nav/>
            <ScrollToTop/>   
            {children}
            <Footer/>
          {/* </SectionWrapper> */}
        </NextUIProvider>
      </body>
    </html>
  );
}

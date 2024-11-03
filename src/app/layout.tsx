// "use server"
import { Inter, Life_Savers, Baskervville } from "next/font/google";
import "./globals.css";
import Footer from "@/shared/Footer/Footer";
import ScrollToTop from "@/shared/ScrollToTop";
import NProgressClient from "@/shared/NProgressClient";
import { Suspense } from "react";
import { NextProvider } from "@/Providers/NextUiProvider";
import Nav from "@/shared/Navbar/Nav";
import Loading from "@/shared/Loading";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const subFont = Life_Savers({ 
    weight: "400",
    subsets: ["latin"],
    style: ["normal"]
});

export const mainFont = Baskervville({ 
    weight: "400",
    subsets: ["latin"],
    style: ["normal"]
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0d0d0d]">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Corbins - Fine dine and bar" />
        <title>Corbins - Fine dine and bar</title>
      </Head>
      <body className={inter.className}>
        <NextProvider>
            <Nav />
            <Suspense fallback={<Loading />}>
              <NProgressClient />
            </Suspense>
            <ScrollToTop />
            {children}
            <Footer />
        </NextProvider>
      </body>
    </html>
  );
}
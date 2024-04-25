import type { Metadata } from "next";
import { Inter,Cantarell } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { NavBar } from "@/components/Shared/Navbar";
import EcommerceBanner from "@/components/home/Banner";
import Footer from "@/components/Shared/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shopLater | Home",
  description: "Welcome to shopLater you can do your shopping with time with shopLater",
};


const cantarell = Cantarell({subsets:["latin"],weight:[
  '400'
]})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cantarell.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}

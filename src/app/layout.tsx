import type { Metadata } from "next";
import { Inter,Cantarell,Chathura,Lora } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { NavBar } from "@/components/Shared/Navbar";
import EcommerceBanner from "@/components/home/Banner";
import Footer from "@/components/Shared/Footer";
import Providers from "@/lib/Providers";


const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const cantarell = Cantarell({
  subsets: ["latin"], weight: [
    '400'
  ]
});
const chathura = Chathura({subsets:["latin"],weight:[
  '100',
  '300',
  '400'
]})

export const metadata: Metadata = {
  title: "shopLater | Home",
  description: "Welcome to shopLater you can do your shopping with time with shopLater",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={cantarell.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

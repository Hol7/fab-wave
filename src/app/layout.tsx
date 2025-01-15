import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const myFont2 = localFont({
  weight: '400',
  variable: '--font-ProximaNova-Regular',
   src: '../../fonts/GT-Walsheim-Pro-Black.ttf'
 })

 const myFont1 = localFont({
  weight: '300',
  variable: '--font-ProximaNova-Regular',
   src: '../../fonts/GT-Walsheim-Pro-Condensed-Black.ttf'
 })
 

export const metadata: Metadata = {
  title: "Wave Clone",
  description: "Kivua digital Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont2.variable} ${myFont2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

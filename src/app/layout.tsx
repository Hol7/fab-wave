import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";


const myFont2 = localFont({
  weight: '400',
  variable: '--font-ProximaNova-Regular',
   src: '../../fonts/GT-Walsheim-Pro-Black.ttf'
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

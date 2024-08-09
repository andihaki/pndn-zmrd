import type { Metadata } from "next";
import { Inter, Unbounded, Albert_Sans } from "next/font/google";
import Head from "next/head";
import localFont from "next/font/local";

import "./globals.css";
import ReactQueryProvider from "./utils/providers/ReactQueryProvider";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unbounded",
});
const albertsans = Albert_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-albertsans",
});
const thesignature = localFont({
  src: "../fonts/Thesignature-OVx16.otf",
  variable: "--font-thesignature",
});

export const metadata: Metadata = {
  title: "Zamrood by Pandooin | Premium Travel Experiences in Indonesia",
  description:
    "Experience the finest that Indonesia has to offer with Zamrood's curated selection of premium trips, ensuring comfort every step of the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth !important" as "smooth" }}>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/thesignature?display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ReactQueryProvider>
        <body
          className={clsx(
            albertsans.className,
            thesignature.variable,
            unbounded.variable
          )}
        >
          {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}

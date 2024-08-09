import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./utils/providers/ReactQueryProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/thesignature?display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ReactQueryProvider>
        <body className={inter.className}>{children}</body>
      </ReactQueryProvider>
    </html>
  );
}

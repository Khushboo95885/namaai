import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./globals.module.scss";
import Navbar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Kumar",
  description: "Aman Kumar Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "white" }}>
        <div className={styles.wrapper}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

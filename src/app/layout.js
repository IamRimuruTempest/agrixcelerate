import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AgriXcelerate",
  description: "Accelerating Digital Innovation for Agriculture",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karma Jyoti",
  description: "Karma Jyoti is an NGO founded and managed by Students and Scholars of Indian Institute of Technology (ISM), Dhanbad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

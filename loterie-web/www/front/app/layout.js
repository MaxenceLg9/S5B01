import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/app/wagmi/wagmi";
import {useConnectWallet} from "@/app/contract/contract";
import {AutoConnectProvider} from "@/app/components/autoconnect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Page Web Application",
  description: "By Maxence Lagourgue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Provider>{children}</Provider>
      </body>
    </html>
  );
}

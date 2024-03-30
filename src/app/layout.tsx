import type { Metadata } from "next";
import { Press_Start_2P, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/TwIndicatior";
import { cn } from "@/lib/utils";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scoreboard",
  description: "Scoreboard for the CTF",
  icons: {
    shortcut:  ["/favicon.ico"],
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={pressStart2P.className}
      >
        <div className="flex h-screen bg-black text-red-500">
          <div className="flex-1">{children}</div>
        </div>
        {/* <TailwindIndicator /> */}
      </body>
    </html>
  );
}

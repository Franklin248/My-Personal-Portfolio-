
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franklin Saludes | Personal Portfolio",
  description:
    "The personal portfolio of John Franklin R. Saludes, a Bachelor of Science in Computer Science student.",
  icons: {
    icon: [
      {
        url: "/images/Logo.gif?v=7",
        type: "image/gif",
      },
    ],
    shortcut: "/images/Logo.gif?v=7",
    apple: "/images/Logo.gif?v=7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import { getCssText } from "$/stitches.config";
import { Inter } from "next/font/google";
import "./globals.css";
import { globalCss } from "@stitches/react";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
const inter = Inter({ subsets: ["vietnamese"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

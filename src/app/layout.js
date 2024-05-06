import { Inter } from "next/font/google";
import "./globals.css";
import FireFliesBackground from "@/Components/FireFliesBackground";
import Sound from "@/Components/Sound";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | NaymHossen",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS by NaymHossen",
  },
  description:
    "A unique creative portfolio designed by NaymHossen with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}>
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}

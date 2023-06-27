import "./globals.css";
import { Alegreya } from "next/font/google";

const font = Alegreya({ subsets: ["latin"] });

export const metadata = {
  title: "Rasmus Eliasson",
  description: "Porfolio page for my project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

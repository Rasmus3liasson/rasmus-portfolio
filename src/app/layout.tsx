import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header/page";
import "./globals.css";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rasmus Eliasson",
  description: "Porfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>
      <body
        className={`${font.className} m-0 p-0 box-border bg-colors-white dark:bg-colors-purlpe scroll-smooth`}
      >
        <>
          <Header />
        </>
        {children}
        <>
          <Footer />
        </>
      </body>
    </html>
  );
}

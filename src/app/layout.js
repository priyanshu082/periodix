import Navabr from "@/components/Navabr";
import "./globals.css";
import { TableProvider } from "@/useContext/UseContext";
import Footer from "@/components/Footer";
import Head from "next/head";


export const metadata = {
  title: "Periodix",
  description: "Universe of Elements",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
    <Head>
      <meta property="og:title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta rel="icon" href="/p.png" />
    </Head>
    <body className="">
      <TableProvider>
        <Navabr />
        {children}
        <Footer/>
      </TableProvider>
    </body>
  </html>
  );
}

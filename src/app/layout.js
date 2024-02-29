import Navabr from "@/components/Navabr";
import "./globals.css";
import { TableProvider } from "@/useContext/UseContext";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Periodix",
  description: "Universe of Elements",
  logo:""
};




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body  className="background fix">
  <TableProvider>
      <Navabr/>
       {children}
       <Footer/>
</TableProvider>
        </body>
    </html>
  );
}

import Navabr from "@/components/Navabr";
import "./globals.css";
import { TableProvider } from "@/useContext/UseContext";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body  className="body">
  <TableProvider>
      <Navabr/>
       {children}
</TableProvider>
        </body>
    </html>
  );
}

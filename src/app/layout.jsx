import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import img from "../../public/enzo-y-yp.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prueba",
  description: "Prueba tecnica Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header name="Jorge Osterrielt" profileImage={img} />
        <Navigation />
        {children}
      </body>
    </html>
  );
}

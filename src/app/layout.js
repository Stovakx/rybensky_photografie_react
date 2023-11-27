
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/app/components/header/navbar";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomáš Rybenský Fotograf",
  description:
    "Tomáš Rybenský Photography - Profesionální fotograf v Skutči a okolí. Specializace na focení svateb, portrétů, mazlíčků a dalších životních okamžiků. Oslovte mě pro kvalitní a jedinečné fotografie.",
  description: "Focení v Skutči, Chrudimi, Pardubicích a okolí",
  description: "Chrudim, Skuteč, Pardubice a okolí",
  description: "Portrét, páry, mazlíčci, zvířata, příroda",
  description: "Fotografie, fotky, portréty, profesionální fotografie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icon.png"/>
      </Head>
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}

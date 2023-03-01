import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@/styles/scrollbar.css";
import "@/styles/slick-slider/slick.min.css";
import "@/styles/slick-slider/slick-theme.min.css";
import "@/styles/scrollbar.css";
import { SSRProvider } from "react-bootstrap";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/orm5mxt.css"
        ></link>
      </Head>
      <NavBar></NavBar>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      <Footer></Footer>
    </>
  );
}

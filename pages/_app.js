import GlobalStyles from "../constants/globalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Facundo Brahim</title>
        <meta
          name="description"
          content="Freelance Designer based in Buenos Aires"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Adobe Typekit Web Fonts */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/afb0dme.css"
        ></link>
        {/* Animated CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        {/* AOS Scroll */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        {/* Themes Colors */}
        <meta
          name="theme-color"
          content="#6A615A"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#6A615A"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Component {...pageProps} />
      {/* Global CSS */}
      <GlobalStyles />
    </>
  );
}

export default MyApp;

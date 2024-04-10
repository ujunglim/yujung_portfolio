import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <AnimatePresence>
      <div className=" bg-white dark:bg-primary-dark transition duration-300 overflow-hidden">
        <DefaultLayout>
          <Head>
            <link rel="icon" href="/logo.png" />
            <title>임유정</title>
          </Head>
          <Component {...pageProps} />
        </DefaultLayout>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;

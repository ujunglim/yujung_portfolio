import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "./components/layout/DefaultLayout";

function MyApp({ Component, pageProps }: any) {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;

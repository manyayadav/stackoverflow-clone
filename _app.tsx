import { AppProps } from "next/app";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import "../config/i18n.config"; // Ensure this import initializes i18n

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);

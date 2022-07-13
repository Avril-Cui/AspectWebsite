import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/UI/Layout"
import no_ssr from "./components/UI/no_ssr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

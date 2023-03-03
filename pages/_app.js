import { SessionProvider } from "next-auth/react";
import Layout from "@/components/layout.jsx";
import "@/styles/globals.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

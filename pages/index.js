import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // temp auth true
  useEffect(() => {
    router.push("/home");
  });
  return (
    <>
      <Head>
        <title>Invoice Maker</title>
        <meta name="description" content="invoice maker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Landing page</div>
    </>
  );
}

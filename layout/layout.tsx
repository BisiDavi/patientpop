import { Header, Footer, Notify } from "@components/.";
import Head from "next/head";
import { PropsWithChildren } from "react";

export default function Layout({
  title,
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <div className="Layout">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <Notify />
    </div>
  );
}

interface LayoutProps {
  title: string;
}

import Head from "next/head";
import React from "react";
import PublicFooter from "./PublicFooter";
import PublicNavbar from "./PublicNavbar";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const PublicLayout = ({ children = <></>, title = "" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <PublicNavbar />
        {children}
        <PublicFooter />
      </main>
    </>
  );
};

export default PublicLayout;

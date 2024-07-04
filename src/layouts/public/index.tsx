import Head from "next/head";
import React from "react";
import AdminNavbar from "./AdminNavbar";
import Drawer from "./Drawer";

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
      <main className="relative max-w-[1920px] w-full flex items-start justify-between gap-5 mx-auto p-5 bg-[url('/home/tutor_panel_bg.png')] bg-center bg-cover bg-no-repeat">
        <Drawer />

        <section className="w-full">
          <AdminNavbar />
          <article className="h-[calc(100vh-124px)] overflow-y-scroll">
            {children}
          </article>
        </section>
      </main>
    </>
  );
};

export default PublicLayout;

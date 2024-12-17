import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Main from "@/components/Main";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <Navbar locale={""} />
      <Main locale={""} />
      <Footer locale={""} />
    </>
  );
}
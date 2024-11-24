import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EkoForge OY",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string }; // Explicitly declare params as a plain object
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const locale = await Promise.resolve(params.locale); // Ensure params.locale resolves synchronously
  const messages = await getMessages({ locale }); // Fetch translations based on locale

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="w-full sm:max-w-4xl mx-0 h-screen">
            <Navbar locale={locale} />
            {children}
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-black text-white w-screen py-10">
      <div className="w-full px-6 lg:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center md:text-left">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href={`/${locale}/`}>
              <Image
                src="/CopyForge-3-removebg-preview.png"
                alt="Logo"
                width={220}
                height={80}
                className="h-10 mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm text-gray-400">
              {t("aboutText")}
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold">{t("navigation")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://calendly.com/ekoforge" className="hover:underline">{t("book a call")}</a>
              </li>
              <li>
                <a href={`/${locale}/#clients`} className="hover:underline">{t("fix my business")}</a>
              </li>
              <li>
                <a href={`/${locale}/#testimonials`} className="hover:underline">{t("case studies")}</a>
              </li>
              <li>
                <a href={`/${locale}/#testimonials`} className="hover:underline">{t("testimonials")}</a>
              </li>
              <li>
                <a href={`/${locale}/#contactsec`} className="hover:underline">{t("contact")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">{t("socialmedia")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://www.instagram.com/eko_.forge/" className="hover:underline">{t("instagram")}</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61559792997632" className="hover:underline">{t("facebook")}</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ekoforge" className="hover:underline">{t("linkedin")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">{t("company")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline">{t("about")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">{t("legal")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline">{t("terms")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("privacy")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("license")}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} EkoForge Oy. {t("rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
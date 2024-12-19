"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, ChangeEvent } from "react";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Local state for managing the active locale
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    // Sync the local state with the passed-in locale prop
    setCurrentLocale(locale);
  }, [locale]);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setCurrentLocale(newLocale); // Update the local state
    const path = pathname.split("/").slice(2).join("/"); // Strip current locale from the path
    router.push(`/${newLocale}/${path || ""}`); // Redirect to the new locale
  };

  return (
    <nav className="bg-black text-white w-screen">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${currentLocale}/`}>
          <Image
            src="/CopyForge-3-removebg-preview.png"
            width={172}
            height={35}
            alt="Results-Driven Business Solutions And Digital Marketing"
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden text-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link
            href={`/${currentLocale}/#testimonials`}
            className="text-lg mt-1 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-500 to-white transition-transform transform hover:scale-110"
          >
            {t("nav2")}
          </Link>
          <Link
            href={`/${currentLocale}/#contactsec`}
            className="text-lg mt-1 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-500 to-white transition-transform transform hover:scale-110"
          >
            {t("nav3")}
          </Link>
          <Link
            href={`https://calendly.com/ekoforge`}
            className="text-lg mt-1 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-500 to-white transition-transform transform hover:scale-110"
          >
            {t("nav4")}
          </Link>
          <select
            value={currentLocale}
            onChange={handleLanguageChange}
            className="rounded-md px-4 py-2 bg-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="en">EN</option>
            <option value="fi">FI</option>
          </select>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <Link
            href={`/${currentLocale}/#clients`}
            className="block text-lg font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-500 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav1")}
          </Link>
          <Link
            href={`/${currentLocale}/#testimonials`}
            className="block text-lg font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-500 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav2")}
          </Link>
          <Link
            href={`/${currentLocale}/#contactsec`}
            className="block text-lg font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-500 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav3")}
          </Link>
          <Link
            href={`https://calendly.com/ekoforge`}
            className="block text-lg font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-500 to-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav4")}
          </Link>
          {/* Language Selector */}
          <select
            value={currentLocale}
            onChange={handleLanguageChange}
            className="block rounded-md px-4 py-2 bg-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="en">EN</option>
            <option value="fi">FI</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

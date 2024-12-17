/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  // Path to your i18n request configuration file
  localePrefix: "as-needed", // Add locale prefixes only when needed
  messagesDir: "./messages", // Path where your translation files are stored
});

const nextConfig = {
  // Add your Next.js configuration here
  i18n: {
    locales: ["en", "fi"], // Supported locales
    defaultLocale: "en",   // Default locale
  },
  experimental: {
    appDir: true, // Ensure app directory is enabled for the App Router
  },
};

export default withNextIntl(nextConfig);

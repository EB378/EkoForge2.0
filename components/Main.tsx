"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

const Main = ({ locale }: { locale: string }) => {
  const t = useTranslations("HomePage");

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rotateScale = {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
        <main className="w-full bg-black/80 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative text-center h-[45vh] flex items-center justify-center overflow-hidden"
          >
            <Image
              src="/backgroundmain.png"
              alt="Hero Background"
              fill
              className="absolute top-0 left-0 object-cover blur-sm brightness-50"
            />
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative z-10 text-[8vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold text-white"
            >
              {t("Unleash Your Business Potential")}
            </motion.h1>
          </motion.div>

          {/* Diagonal CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="-skew-y-3 bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden">
              <div className="skew-y-3 p-6 sm:p-8 flex flex-col sm:flex-row justify-center items-center gap-4 min-h-[100px]">
                {/* Book Your Call */}
                <Link href="https://calendly.com/ekoforge">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-black font-bold text-lg rounded-full shadow-lg transition-transform"
                  >
                    {t("Book Your Call")}
                  </motion.button>
                </Link>

                {/* Contact Us */}
                <Link href="#contactsec">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-transparent border border-white text-white font-bold text-lg rounded-full shadow-lg transition-transform"
                  >
                    {t("Contact Us")}
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Problem-Solution Section */}
          <div className="relative px-6 sm:px-12 lg:px-24 mt-16 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-white mb-12"
            >
              {t("What's Holding")}
              <span className="bg-blue-900 px-3 py-2 rounded-lg inline-block ml-2 shadow-md">
                {t("You Back?")}
              </span>
            </motion.h2>

            {/* Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
            >
              {[
                { title: t("Challenge1"), detail: t("ChallengeDetail1") },
                { title: t("Challenge2"), detail: t("ChallengeDetail2") },
                { title: t("Challenge3"), detail: t("ChallengeDetail3") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                  }}
                  className={`relative w-full max-w-[350px] p-6 ${
                    index === 0
                      ? "bg-gradient-to-b from-yellow-600 to-orange-700"
                      : index === 1
                      ? "bg-gradient-to-b from-teal-600 to-blue-700"
                      : "bg-gradient-to-b from-purple-600 to-pink-700"
                  } rounded-2xl shadow-2xl transition-transform duration-300`}
                >
                  <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-200 text-base leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call-to-Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="my-16 text-center px-6 sm:px-12 lg:px-24"
          >
            <h2 className="text-2xl sm:text-4xl font-bold">{t("Your Journey Starts Here")}</h2>
            <p className="my-4 text-lg sm:text-xl">{t("CTASUB")}</p>
            <Link href="https://calendly.com/ekoforge">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xl rounded-full shadow-lg transition-transform"
              >
                {t("Book a Free Consultation")}
              </motion.button>
            </Link>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16"
          >
            <Testimonials />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Contact />
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Main;
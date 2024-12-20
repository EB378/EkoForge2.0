"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Hero from "@/components/Hero"
import React from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

const Main = () => {
  const t = useTranslations("HomePage");

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
        <main className="w-full bg-black/80 relative">
          {/* Hero Section */}
          <Hero />


          {/* Problem-Solution Section */}
          <div className="relative px-6 sm:px-12 lg:px-24 mt-16 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
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
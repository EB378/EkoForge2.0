"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";




export default function Testimonials() {
  const t = useTranslations("Testimonials");


  const testimonials = [
    {
      id: 1,
      name: "Kimmo",
      title: "CEO, GNN ry",
      feedback: t("testimonial1"),
      rating: 5,
      image: "./ekotestimonial1.png"
    },
    {
      id: 2,
      name: "James Miller",
      title: "Marketing Director, BrightTech",
      feedback: t("testimonial2"),
      rating: 4.5,
      image: "./ekotestimonial1.png"
    }
  ];



  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-gray-900 text-white" id="testimonials">
      <h2 className="text-4xl text-center mb-12">{t("title")}</h2>
      <div className="relative w-4/5 mx-auto overflow-hidden">
        {/* Testimonial Slide */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full text-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={96}
                height={96}
                className="mx-auto rounded-full border-4 border-yellow-400 mb-4"
              />
              <p className="italic content-center mx-16">{testimonial.feedback}</p>
              <h3 className="mt-4 font-bold">{testimonial.name}</h3>
              <p>{testimonial.title}</p>
              <div className="mt-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`inline-block text-yellow-400 ${
                      index < Math.floor(testimonial.rating) ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
// components/Hero.tsx
import { FC } from "react";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to URL Shortener
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Shorten your URLs quickly and easily.
        </p>
        <Link href="/get-started">
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

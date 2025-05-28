import React from "react";
import { ArrowRight, Leaf } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <Leaf className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Sustainable Future
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Turn Your{" "}
                <span className="text-green-600 dark:text-green-400">
                  Recyclables
                </span>{" "}
                Into Cash
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Join the circular economy revolution. Sell your recyclable
                materials, earn money, and help create a sustainable future for
                our planet.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-md transition"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("why-recycle")}
                className="flex items-center justify-center border border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-gray-800 px-8 py-3 text-lg rounded-md transition"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">
                  50K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Items Recycled
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">
                  $2M+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Earned by Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">
                  95%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/3.jpg"
                alt="Recycling and sustainability concept"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Upload, Search, DollarSign, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "List Your Items",
      description:
        "Upload photos and details of your recyclable materials. Our smart categorization helps you get the best price.",
      image: "/1.jpg",
    },
    {
      icon: Search,
      title: "Get Matched",
      description:
        "Our platform connects you with verified buyers who are looking for your specific recyclable materials.",
      image: "/2.jpg",
    },
    {
      icon: DollarSign,
      title: "Negotiate & Sell",
      description:
        "Communicate directly with buyers, negotiate fair prices, and complete your transactions securely.",
      image: "/1.jpg",
    },
    {
      icon: Truck,
      title: "Arrange Pickup",
      description:
        "Schedule convenient pickup times or arrange drop-off locations. Get paid instantly upon completion.",
      image: "/2.jpg",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Recycle Market Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our simple 4-step process makes it easy to turn your recyclables
            into cash while contributing to a sustainable future.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">
                    Step {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

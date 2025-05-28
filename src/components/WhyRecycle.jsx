import React from "react";
import { Leaf, DollarSign, Users, Globe, Award, Zap } from "lucide-react";

export default function WhyRecycle() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description:
        "Turn waste into wealth. Our platform helps you get the best prices for your recyclable materials.",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description:
        "Reduce landfill waste and carbon footprint. Every item recycled makes a difference for our planet.",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "Join a community of eco-conscious individuals working together for a sustainable future.",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connect with buyers worldwide. Our platform operates in multiple countries and regions.",
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "All buyers are verified and rated. Secure transactions with guaranteed payment protection.",
      color: "text-red-600 dark:text-red-400",
    },
    {
      icon: Zap,
      title: "Quick & Easy",
      description:
        "Fast listing process, instant matching, and quick payments. Start earning in minutes.",
      color: "text-yellow-600 dark:text-yellow-400",
    },
  ];

  return (
    <section id="why-recycle" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Oriented Solution?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're more than just a marketplace. We're building a sustainable
            future where everyone benefits from the circular economy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${benefit.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Recycling Journey?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already earning money while
              helping the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Selling Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

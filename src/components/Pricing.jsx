export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Transparent & Fair Pricing
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Whether you're selling recyclables or need brokering services, choose
          the plan that fits your needs.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-gray-50 dark:bg-gray-800 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Starter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ideal for small sellers getting started with recycling.
            </p>
            <div className="text-4xl font-bold text-green-600 mb-6">$0</div>
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300 mb-6">
              <li>✔ Sell up to 100 lbs/month</li>
              <li>✔ Basic materials: OCC, HDPE</li>
              <li>✔ Email support</li>
            </ul>
            <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border border-green-600 dark:border-green-400 rounded-xl p-8 bg-white dark:bg-gray-900 shadow-lg scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Best for consistent sellers and recycling partners.
            </p>
            <div className="text-4xl font-bold text-green-600 mb-6">
              $49<span className="text-xl font-medium">/mo</span>
            </div>
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300 mb-6">
              <li>✔ Up to 1,000 lbs/month</li>
              <li>✔ Access to all material categories</li>
              <li>✔ Dedicated broker support</li>
            </ul>
            <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition">
              Subscribe
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-gray-50 dark:bg-gray-800 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Enterprise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Tailored for large-volume sellers and businesses.
            </p>
            <div className="text-4xl font-bold text-green-600 mb-6">Custom</div>
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300 mb-6">
              <li>✔ Unlimited volume</li>
              <li>✔ Priority brokerage access</li>
              <li>✔ API integration & reporting</li>
            </ul>
            <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

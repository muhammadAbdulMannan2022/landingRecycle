import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "orientedsoutions@hotmail.com",
      description: "Get in touch for any questions or support",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM to 6 PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Green Street, Eco City, EC 12345",
      description: "Our headquarters and main office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9 AM - 6 PM EST",
      description: "Weekend support via email only",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about our platform? Need help getting started? Our
            team is here to support you every step of the way.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <info.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                {info.details}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  How do I get started?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Simply create an account, list your recyclable items with
                  photos and descriptions, and start connecting with verified
                  buyers in your area.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What materials can I sell?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We accept a wide range of recyclable materials including
                  metals, plastics, paper, electronics, and more. Check our
                  guidelines for specific details.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  How do I get paid?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Payments are processed securely through our platform. You can
                  receive payments via bank transfer, PayPal, or other supported
                  methods.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Is there a fee to use the platform?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Basic listing is free! We only charge a small commission on
                  successful transactions to maintain and improve our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

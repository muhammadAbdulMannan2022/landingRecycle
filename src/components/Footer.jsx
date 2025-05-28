import {
  Recycle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top: Brand + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold text-white">
                Oriented Solution
              </span>
            </div>
            <p className="text-gray-400">
              Helping with sustainable needs. We buy and sell recyclable
              materials and act as trusted brokers in the recycling industry.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Materials We Handle</h3>
            <ul className="space-y-2 text-gray-400">
              <li>OCC (Old Corrugated Containers)</li>
              <li>HDPE (High-Density Polyethylene)</li>
              <li>LDPE (Low-Density Polyethylene)</li>
              <li>And more...</li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-5 w-5" />
              <span>orientedsoutions@hotmail.com</span>
            </div>
            <div className="flex space-x-4 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Oriented Solution. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with 💚 for sustainability
          </p>
        </div>
      </div>
    </footer>
  );
}

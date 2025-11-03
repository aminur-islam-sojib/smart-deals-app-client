import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
    // In your actual app, you'll replace this with your router navigation
  };

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Smart Deals
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Discover amazing deals and exclusive offers. Your trusted partner
              for smart shopping experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-800 p-2 rounded-lg hover:bg-blue-500 transition-all transform hover:scale-110">
                  <Facebook size={20} />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-sky-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-800 p-2 rounded-lg hover:bg-sky-500 transition-all transform hover:scale-110">
                  <Twitter size={20} />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-pink-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-800 p-2 rounded-lg hover:bg-pink-500 transition-all transform hover:scale-110">
                  <Instagram size={20} />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-blue-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-110">
                  <Linkedin size={20} />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-blue-400 to-purple-400"></span>
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Deals", "Categories", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        handleNavigation(
                          `/${item.toLowerCase().replace(" ", "-")}`
                        )
                      }
                      className="text-sm hover:text-blue-400 transition-colors hover:translate-x-1 inline-block transform duration-200"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Customer Service
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-blue-400 to-purple-400"></span>
            </h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Track Order",
                "Returns",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      handleNavigation(
                        `/${item.toLowerCase().replace(/\s+/g, "-")}`
                      )
                    }
                    className="text-sm hover:text-blue-400 transition-colors hover:translate-x-1 inline-block transform duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-blue-400 to-purple-400"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm text-gray-400">
                  123 Smart Street, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone
                  size={18}
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail
                  size={18}
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                />
                <a
                  href="mailto:info@smartdeals.com"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  info@smartdeals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-3">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-6">
              Get exclusive deals and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400 flex items-center">
            © {currentYear} Smart Deals. Made with
            <Heart
              size={16}
              className="mx-1 text-red-500 fill-current animate-pulse"
            />
            by Smart Team
          </p>
          <div className="flex space-x-6">
            <button
              onClick={() => handleNavigation("/privacy")}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy
            </button>
            <button
              onClick={() => handleNavigation("/terms")}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms
            </button>
            <button
              onClick={() => handleNavigation("/cookies")}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

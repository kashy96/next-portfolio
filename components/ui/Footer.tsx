import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm leading-6">
            I am very dedicated to providing exceptional services tailored to your
            needs. Feel free to connect with me for any inquiries or assistance.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61563124620707"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              Facebook
            </a>
            <a
              href="https://github.com/kashy96"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-kashif-928655142/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} developed by Muhammad Kashif. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

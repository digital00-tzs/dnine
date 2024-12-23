import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A23] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <img
              src="./logo2.png"
              alt="logo"
              className="h-10 mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0 lg:pr-36">
              Lorem ipsum dolor sit amet consectetur. Ultrices amet aenean
              velit leo placerat nunc congue ultrices hendrerit. Fusce et
              phasellus massa iaculis commodo. Dolor erat ut.
            </p>
            <p className="text-white font-medium mb-4">Follow us on</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-xl text-gray-400 hover:text-white"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram text-xl text-gray-400 hover:text-white"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook text-xl text-gray-400 hover:text-white"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter text-xl text-gray-400 hover:text-white"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube text-xl text-gray-400 hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Pages</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Lorem Ipsum
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Shop</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Lorem Ipsum
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="tel:+919910945004"
                    className="hover:text-white flex items-center"
                  >
                    <i className="fas fa-phone-alt mr-2"></i> +91 9910945004
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mail@gmial"
                    className="hover:text-white flex items-center"
                  >
                    <i className="fas fa-envelope mr-2"></i> mail@gmial
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="hover:text-white flex items-center"
                  >
                    <i className="fas fa-map-marker-alt mr-2"></i> Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-5 text-sm text-gray-400 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Designed and Maintained by TZS Digital | © 2024. All rights reserved.</p>
            <p>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


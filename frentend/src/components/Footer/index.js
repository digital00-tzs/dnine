"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A23] text-white py-8">
      <div className="container mx-auto px-4  lg:px-20 grid grid-cols-1 sm:grid-cols-[30%_70%] gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center pt-10 sm:items-start">
          <img src="/logo2.png" alt="logo" className="h-14 mb-4" />
          <div className="text-center pt-10 sm:text-left">
            <h1 className="font-bold text-2xl mb-4">Follow us on</h1>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram text-4xl"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook text-4xl"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-x-twitter text-4xl"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-youtube text-4xl"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-linkedin text-4xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <div className=" mb-10">
            <p className="mb-4 sm:font- font-medium">
              Sign up to our newsletter to receive the latest news and exclusive
              offers
            </p>
            <div className="flex ">
              <input
                type="email"
                placeholder="Email address"
                className="w-full max-w-sm px-4 py-4 rounded-l-sm text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#DC2626]  px-4 rounded-r-lg text-white  hover:bg-red-700 border-2 border-white"
              >
                SUBSCRIBE →
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
            {/* Contact Section */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="tel:+916395563735" className="flex">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-1"
                    >
                      <path
                        d="M15.1689 11.8598V13.8598C15.1697 14.0455 15.1316 14.2293 15.0572 14.3994C14.9829 14.5695 14.8738 14.7222 14.737 14.8477C14.6001 14.9732 14.4386 15.0688 14.2627 15.1283C14.0869 15.1878 13.9005 15.2099 13.7156 15.1932C11.6641 14.9702 9.69357 14.2692 7.96223 13.1465C6.35145 12.1229 4.98579 10.7573 3.96223 9.14648C2.83555 7.40729 2.1344 5.42715 1.91557 3.36648C1.89891 3.18213 1.92082 2.99632 1.9799 2.8209C2.03898 2.64548 2.13395 2.48428 2.25874 2.34756C2.38354 2.21085 2.53544 2.10162 2.70476 2.02683C2.87409 1.95204 3.05713 1.91332 3.24223 1.91315H5.24223C5.56577 1.90997 5.87943 2.02454 6.12474 2.23551C6.37006 2.44648 6.53029 2.73945 6.57557 3.05982C6.65998 3.69986 6.81653 4.3283 7.04223 4.93315C7.13193 5.17177 7.15134 5.43109 7.09817 5.6804C7.045 5.92971 6.92148 6.15856 6.74223 6.33982L5.89557 7.18648C6.8446 8.85551 8.22654 10.2374 9.89557 11.1865L10.7422 10.3398C10.9235 10.1606 11.1523 10.0371 11.4016 9.98388C11.651 9.93071 11.9103 9.95012 12.1489 10.0398C12.7537 10.2655 13.3822 10.4221 14.0222 10.5065C14.3461 10.5522 14.6418 10.7153 14.8533 10.9648C15.0647 11.2143 15.177 11.5329 15.1689 11.8598Z"
                        stroke="#C3C3C3"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    +91 6395 563 735
                  </a>
                </li>
                <li>
                  <a href="mailto:admin@dninesports.com" className="flex">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-1"
                    >
                      <path
                        d="M15.1693 4.57943C15.1693 3.84609 14.5693 3.24609 13.8359 3.24609H3.16927C2.43594 3.24609 1.83594 3.84609 1.83594 4.57943M15.1693 4.57943V12.5794C15.1693 13.3128 14.5693 13.9128 13.8359 13.9128H3.16927C2.43594 13.9128 1.83594 13.3128 1.83594 12.5794V4.57943M15.1693 4.57943L8.5026 9.24609L1.83594 4.57943"
                        stroke="#C3C3C3"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    admin@dninesports.com
                  </a>
                </li>
                <li>
                  <a href="mailto:admin@dninesports.com" className="flex">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-1"
                    >
                      <path
                        d="M16.7643 10.7579C16.5281 10.7579 16.3368 10.9493 16.3368 11.1854V14.9811C16.3359 15.6891 15.7623 16.2629 15.0543 16.2635H3.05933C2.3513 16.2629 1.77769 15.6891 1.77686 14.9811V3.84107C1.77769 3.1332 2.3513 2.55943 3.05933 2.5586H6.85498C7.0911 2.5586 7.28247 2.36723 7.28247 2.1311C7.28247 1.89515 7.0911 1.70361 6.85498 1.70361H3.05933C1.87939 1.70495 0.923211 2.66113 0.921875 3.84107V14.9812C0.923211 16.1612 1.87939 17.1173 3.05933 17.1187H15.0543C16.2342 17.1173 17.1904 16.1612 17.1917 14.9812V11.1854C17.1917 10.9493 17.0004 10.7579 16.7643 10.7579Z"
                        fill="#C3C3C3"
                      />
                      <path
                        d="M17.0224 0.603989C16.2711 -0.147293 15.0531 -0.147293 14.3018 0.603989L6.67512 8.2307C6.62285 8.28296 6.58511 8.34776 6.56541 8.41889L5.56247 12.0397C5.52123 12.1882 5.56314 12.3471 5.67202 12.4562C5.78106 12.5651 5.94004 12.607 6.08849 12.5659L9.7093 11.5628C9.78044 11.5431 9.84523 11.5053 9.8975 11.4531L17.524 3.8262C18.2742 3.07442 18.2742 1.85741 17.524 1.10562L17.0224 0.603989ZM7.60658 8.50857L13.8485 2.26653L15.8615 4.27958L9.61946 10.5216L7.60658 8.50857ZM7.20447 9.31546L8.81274 10.9239L6.58812 11.5402L7.20447 9.31546ZM16.9195 3.2217L16.4662 3.67508L14.453 1.66186L14.9065 1.20849C15.3238 0.791183 16.0004 0.791183 16.4177 1.20849L16.9195 1.71012C17.3362 2.12793 17.3362 2.80406 16.9195 3.2217Z"
                        fill="#C3C3C3"
                      />
                    </svg>
                    Write to Us
                  </a>
                </li>
                <li>
                  <a href="#" className="flex">
                    <svg
                      width="15"
                      height="19"
                      viewBox="0 0 15 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-1"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.11113 5.7833H5.90841C6.23928 5.7833 6.50782 5.51477 6.50782 5.18389C6.50782 4.85301 6.23928 4.58447 5.90841 4.58447H3.11113C2.78026 4.58447 2.51172 4.85301 2.51172 5.18389C2.51172 5.51477 2.78026 5.7833 3.11113 5.7833Z"
                        fill="#C3C3C3"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.11113 8.57969H8.30607C8.63695 8.57969 8.90549 8.31115 8.90549 7.98027C8.90549 7.6494 8.63695 7.38086 8.30607 7.38086H3.11113C2.78026 7.38086 2.51172 7.6494 2.51172 7.98027C2.51172 8.31115 2.78026 8.57969 3.11113 8.57969Z"
                        fill="#C3C3C3"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.11113 11.378H6.30802C6.6389 11.378 6.90743 11.1095 6.90743 10.7786C6.90743 10.4477 6.6389 10.1792 6.30802 10.1792H3.11113C2.78026 10.1792 2.51172 10.4477 2.51172 10.7786C2.51172 11.1095 2.78026 11.378 3.11113 11.378Z"
                        fill="#C3C3C3"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.90568 16.9722H2.31114C2.0458 16.9722 1.79244 16.8667 1.60463 16.6797C1.41761 16.4919 1.31211 16.2385 1.31211 15.9732V3.18565C1.31211 2.92031 1.41761 2.66696 1.60463 2.47914C1.79244 2.29212 2.0458 2.18662 2.31114 2.18662H7.996C8.04635 2.18662 8.0943 2.20501 8.13106 2.23857L12.0361 5.78871C12.0776 5.82708 12.1016 5.88062 12.1016 5.93657V9.57942C12.1016 9.91029 12.3701 10.1788 12.701 10.1788C13.0319 10.1788 13.3004 9.91029 13.3004 9.57942C13.3004 9.57942 13.3004 6.91402 13.3004 5.93657C13.3004 5.54255 13.1342 5.16692 12.8425 4.90158C12.0504 4.18148 9.68395 2.03078 8.93748 1.35144C8.67933 1.11727 8.34446 0.987793 7.996 0.987793C7.05132 0.987793 4.15414 0.987793 2.31114 0.987793C1.72851 0.987793 1.16905 1.21957 0.756654 1.63117C0.345055 2.04356 0.113281 2.60302 0.113281 3.18565V15.9732C0.113281 16.5558 0.345055 17.1153 0.756654 17.5277C1.16905 17.9393 1.72851 18.171 2.31114 18.171H7.90568C8.23656 18.171 8.5051 17.9025 8.5051 17.5716C8.5051 17.2407 8.23656 16.9722 7.90568 16.9722Z"
                        fill="#C3C3C3"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.90586 4.9837V1.98662C8.90586 1.65575 8.63732 1.38721 8.30645 1.38721C7.97557 1.38721 7.70703 1.65575 7.70703 1.98662V5.18351C7.70703 5.44885 7.81253 5.7022 7.99955 5.89002C8.18736 6.07703 8.44152 6.18253 8.70606 6.18253H12.3026C12.6334 6.18253 12.902 5.91399 12.902 5.58312C12.902 5.25224 12.6334 4.9837 12.3026 4.9837H8.90586Z"
                        fill="#C3C3C3"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.82812 13.4958C6.82812 15.3708 8.34984 16.8925 10.2248 16.8925C12.0998 16.8925 13.6215 15.3708 13.6215 13.4958C13.6215 11.6208 12.0998 10.0991 10.2248 10.0991C8.34984 10.0991 6.82812 11.6208 6.82812 13.4958ZM8.02696 13.4958C8.02696 12.2826 9.0116 11.298 10.2248 11.298C11.438 11.298 12.4227 12.2826 12.4227 13.4958C12.4227 14.709 11.438 15.6937 10.2248 15.6937C9.0116 15.6937 8.02696 14.709 8.02696 13.4958Z"
                        fill="#C3C3C3"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.8788 15.9969L13.8768 17.995C14.1102 18.2291 14.4906 18.2291 14.724 17.995C14.9582 17.7616 14.9582 17.3812 14.724 17.1478L12.7259 15.1497C12.4926 14.9156 12.1121 14.9156 11.8788 15.1497C11.6446 15.3831 11.6446 15.7636 11.8788 15.9969Z"
                        fill="#C3C3C3"
                      />
                    </svg>
                    Business Enquiry
                  </a>
                </li>
              </ul>
            </div>

            {/* Collections Section */}
            <div>
              <h3 className="font-semibold mb-4">Collections</h3>
              <ul className="space-y-2 flex flex-col text-gray-400">
                <Link href="/Products/Shoes" >Shoes</Link>
                <Link href="/Products/Nutrition" >Nutrition</Link>
                <Link href="/Products/Accessories" >Accessories</Link>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/About-Us">About Us</Link>
                </li>
                <li>
                  <Link href="/Blog">Blog</Link>
                </li>
                <li>
                  <Link href="/Careers">Careers</Link>
                </li>
                <li>
                  <Link href="/Press">Press</Link>
                </li>
              </ul>
            </div>

            {/* Customer Servies */}
            <div>
              <h3 className="font-semibold mb-4">Customer Servies </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/Shipping"> Shipping policy</Link>
                </li>
                <li>
                  <Link href="/Returns"> Returns policy</Link>
                </li>
                <li>
                  <Link href="/Privacy"> Privacy policy</Link>
                </li>
                <li>
                  <Link href="/T&C"> Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400 w-11/12 mx-auto">
        © 2025. LCDC Athletics Pvt. Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

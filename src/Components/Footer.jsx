import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-signup-gradient text-white py-8 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-[80px]">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold">KashmiGo</h1>
          <img
            alt="Local Visit"
            className="relative w-auto h-auto ml-8 p-0 bottom-[10px]"
            height={23}
            src={"https://kashmigo-tours.s3.ap-south-1.amazonaws.com/Arrow.png"}
            width={63}
          />
          <p className="mt-1">
            Your Journey, Our Priority <br /> Book, Explore, Discover!
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-16 text-black">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold">Company</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink href="/about">About us</NavLink>
              </li>
              <li>
                <NavLink href="/blog">Blogs</NavLink>
              </li>
              <li>Press Room</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold">Help</h2>
            <ul className="mt-2 space-y-2">
              <li>Contact us</li>
              <li>
                <NavLink to="/FAQ">FAQs</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy Policy</NavLink>
              </li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold">Payment methods possible</h2>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <img
                alt="Local Visit"
                className="relative w-auto h-auto ml-8"
                height={26}
                src={
                  "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/mastercard.png"
                }
                width={39}
              />
              <img
                alt="Local Visit"
                className="relative w-auto h-auto ml-8"
                height={26}
                src={
                  "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/visa.png"
                }
                width={39}
              />

              <img
                alt="Local Visit"
                className="relative w-auto h-auto ml-8"
                height={26}
                src={
                  "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/americanexpress.png"
                }
                width={39}
              />
              <img
                alt="Local Visit"
                className="relative w-auto h-auto ml-8"
                height={26}
                src={
                  "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/Gpay.png"
                }
                width={39}
              />
              <img
                alt="Local Visit"
                className="relative w-auto h-auto ml-8"
                height={26}
                src={
                  "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/applePay.png"
                }
                width={39}
              />
              <img
                alt="Local Visit"
                className="relative w-auto h-auto ml-8"
                height={26}
                src={
                  "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/applePay.png"
                }
                width={39}
              />
            </div>
            <h2 className="font-bold mt-4">Company</h2>
            <ul className="mt-2 space-y-2">
              <li>Become a Tour guide for Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative top-8 w-full bg-green-600 py-4 px-[80px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-sm">
            Copyright 2024 KashmiGo. All Rights Reserved
          </p>
          <div className="flex space-x-2 mt-4 md:mt-0 ">
            <a className="text-white cursor-pointer ">
              <i className="fab fa-facebook-f">
                <FaFacebook className="w-[30px] h-[30px] text-blue-600 bg-white rounded-full" />
              </i>
            </a>
            <a className="text-white cursor-pointer ">
              <i className="fab fa-twitter">
                <FaXTwitter className="w-[30px] h-[30px] text-white bg-black rounded-lg" />
              </i>
            </a>
            <a className="text-white cursor-pointer ">
              <i className="">
                <FaInstagram className="w-[30px] h-[30px] text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500 rounded-full " />
              </i>
            </a>

            <a className="text-white">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { TiWeatherPartlySunny } from "react-icons/ti";

import ContactForm from "../Components/ContactForm";

const AboutUs = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src={"https://kashmigo-tours.s3.ap-south-1.amazonaws.com/about.png"}
          alt="About Us"
          height={500}
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row p-4 lg:mx-[160px] my-10 space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="relative">
          <div className="mb-12">
            <h2 className="text-[28px] lg:text-[36px] font-medium leading-[38px] lg:leading-[43.2px]">
              Who <span className="text-[#56C2C3]">We Are?</span>
            </h2>
            <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px]">
              We’re all about creating unforgettable experiences for our
              <br className="hidden lg:block" /> guests. Our journey began with
              a simple passion for
              <br className="hidden lg:block" /> exploring the beauty of the
              World.
            </p>
          </div>
          <div className="">
            <h2 className="text-[28px] lg:text-[36px] font-medium leading-[38px] lg:leading-[43.2px]">
              Our <span className="text-[#56C2C3]">Mission</span>
            </h2>
            <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px]">
              We believe that travel is not just about visiting new places,
              <br className="hidden lg:block" /> but about immersing yourself in
              new cultures, connecting
              <br className="hidden lg:block" /> with nature, and making
              memories that last a lifetime.
            </p>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-12 flex justify-center">
          <img
            src={
              "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/shikara.png"
            }
            alt="Shikara"
            width={544}
            height={385}
            className="max-w-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mx-4 lg:mx-auto">
        <div className="text-start lg:text-left text-[#228B22] font-medium text-[28px] lg:text-[36px] mb-8 lg:mb-[100px]">
          <h2 className="">What we serve</h2>
          <h2 className="text-[#000000] text-[18px] lg:text-[20px]">
            We offer our best
            <br className="hidden lg:block" /> services
          </h2>
        </div>
        <div className="border border-[#228B22] rounded-2xl min-w-[200px] lg:min-w-[262px] min-h-[182px] p-4 lg:p-6">
          <TiWeatherPartlySunny className="w-[45px] lg:w-[55px] h-[45px] lg:h-[55px] bg-[#228B22] text-white rounded-full p-2" />
          <h3 className="font-medium text-[16px] lg:text-[18px] mt-4">
            Calculate Weather
          </h3>
          <p className="font-normal text-[12px] lg:text-[14px] text-[#808080]">
            Lorem ipsum dolor sit amet,
            <br /> adipisicing elit.
          </p>
        </div>
        <div className="border border-[#228B22] rounded-2xl min-w-[200px] lg:min-w-[262px] min-h-[182px] p-4 lg:p-6">
          <img
            src={
              "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/tour-guide.png"
            }
            alt="Tour-Guide"
            height={50}
            width={50}
          />
          <h3 className="font-medium text-[16px] lg:text-[18px] mt-4">
            Best Tour Guide
          </h3>
          <p className="font-normal text-[12px] lg:text-[14px] text-[#808080]">
            Lorem ipsum dolor sit amet,
            <br /> adipisicing elit.
          </p>
        </div>
        <div className="border border-[#228B22] rounded-2xl min-w-[200px] lg:min-w-[262px] min-h-[182px] p-4 lg:p-6">
          <img
            src={
              "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/customization.png"
            }
            alt="Tour-Guide"
            height={50}
            width={50}
          />
          <h3 className="font-medium text-[16px] lg:text-[18px] mt-4">
            Customization
          </h3>
          <p className="font-normal text-[12px] lg:text-[14px] text-[#808080]">
            Lorem ipsum dolor sit amet,
            <br /> adipisicing elit.
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default AboutUs;

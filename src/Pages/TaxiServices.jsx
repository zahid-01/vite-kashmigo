/* eslint-disable no-irregular-whitespace */
import { NavLink } from "react-router-dom";
import TaxiServiceTable from "../Components/TaxiServiceTable";

const TaxiServices = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="relative">
        <img
          src={
            "https://kashmigo-tours.s3.ap-south-1.amazonaws.com/text-services.png"
          }
          alt="About Us"
          height={500}
          className="w-full object-cover"
        />
      </div>

      <div className="text-center mx-auto my-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.05em] leading-tight">
          Ride in Comfort, Reach Your Destination, <br /> and Experience the
          <span className="text-[#228B22]"> Journey.</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center my-10 space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#56C2C3] font-medium mb-5">
            Kashmir Taxi Service
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-[700px]">
            With a wide range of vehicles, including sedans, SUVs, minibuses,
            hatchbacks, and more, KashmiGo offers the premier taxi service in
            the Kashmir region to cater to the diverse transportation needs of
            our clients. Whether you prefer a professional driver or want the
            freedom to drive yourself, we provide self-drive car options for a
            personalized experience. Our cars are in top-notch condition and are
            regularly maintained to ensure your comfort and safety. For instant
            taxi bookings or self-drive car options in Kashmir, KashmiGo is your
            trusted choice.
          </p>
          <NavLink
            href="https://wa.me/916006354443"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-signup-gradient rounded-lg text-white text-sm md:text-base font-bold mt-5 px-4 py-2">
              Reserve a Ride Now!
            </button>
          </NavLink>
        </div>
        <div className="md:flex-1">
          <img
            src={"https://kashmigo-tours.s3.ap-south-1.amazonaws.com/Frame.png"}
            alt="About Us"
            width={400}
            height={381}
            className="w-full"
          />
        </div>
      </div>

      <div className="my-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#56C2C3] font-medium leading-tight mb-5">
          How to Book a Taxi Service in Kashmir?
        </h2>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          Booking a taxi with KashmiGo is simple and hassle-free. Just follow
          these easy steps and enjoy the convenience of online payment.
          <br /> You can reserve your taxi in Kashmir by calling or sending a
          WhatsApp message to +919999999999. KashmiGo is proud to be the most
          trusted and highly-rated taxi service provider in the region, with
          over 1,00 positive reviews on Google.
        </p>
      </div>

      <div className="relative my-5">
        <img
          src={"https://kashmigo-tours.s3.ap-south-1.amazonaws.com/taxis.png"}
          alt="About Us"
          height={517}
          className="w-full"
        />
      </div>

      <TaxiServiceTable />

      <div className="my-12">
        <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed mb-12">
          If you’re looking to travel off the beaten path and visit destinations
          like Baba Reshi Shrine, Shrunz Fall, and Drung Waterfall from Gulmarg,
          you’ll need to book a local taxi for transportation. To find out the
          taxi fares for these off-route journeys, as well as for Gulmarg Cable
          Car bookings, Gulmarg Cable Car fares, Gulmarg Skiing rates, and
          Gulmarg sightseeing rates, simply call +91 9999999999 for an instant
          quote.
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center">
          Self Drive Car in <span className="text-[#228B22]">Kashmir</span>
        </h2>
        <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed my-12">
          Absolutely! Now, for your Kashmir trip, you can rent a self-drive car
          without a driver for a truly private and flexible experience. In
          addition to offering vehicles for your leisure and privacy, we also
          provide driverless car rentals, ensuring complete independence during
          your journey. Our cars are thoroughly cleaned and sanitized after
          every rental, prioritizing your safety and comfort for a worry-free
          travel experience in Kashmir.
        </p>
      </div>

      <div className="my-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-8">
          Pre Book Your{" "}
          <span className="text-[#228B22]">
            Kashmir Tour Package, Cab Service, Self Drive
          </span>
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
          With <span className="text-[#56C2C3]">KashmiGo,</span> reservations
          for taxi services in Kashmir can be made in advance. You can simply
          make a reservation for your Kashmir cab by calling our reservation
          team at <span className="text-[#56C2C3]">+91 6006354443</span>.
        </h2>
      </div>
    </div>
  );
};

export default TaxiServices;

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      name,
      email,
      serviceType,
      budget,
      message,
    });
  };
  return (
    <div className="container p-8 mx-auto max-w-screen-xl bg-[#FEFCFB]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[135px] items-start mx-auto">
        {/* Left Column: Heading and Subheading */}
        <div className="ml-[24px] flex flex-col gap-[54px]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-4xl font-bold mb-4 text-green-500">
              Let's Talk
            </h1>
            <p className="text-lg">
              Planning Your Next Adventure? Let's Make It Unforgettable! Have a
              travel dream or destination in mind? Reach out to us—we'd love to
              bring your journey to life with seamless planning and bookings.
            </p>
          </div>
          <div className="flex flex-col h-[85px]">
            <p className="text-[36px] font-[500]">EMAIL</p>
            <a
              href="mailto:KashmiGo@gmail.com"
              className="text-blue-500 text-[18px]"
            >
              KashmiGo@gmail.com
            </a>
          </div>
          <div className="flex flex-col h-[85px] w-[185px]">
            <p className="text-[36px] font-[500]">Phone No</p>
            <a href="tel:+1234567890" className="text-blue-500 text-[18px]">
              +91 6006354443
            </a>
          </div>
        </div>
        {/* Right Column: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg p-6 rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ServiceType"
              className="block text-lg font-medium mb-2"
            >
              What service are you interested in?
            </label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="">Select Service type</option>
              <option value="package">Package</option>
              <option value="gondola">Gondolla Ride</option>
              <option value="skking">Skking</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="budget" className="block text-lg font-medium mb-2">
              Budget
            </label>
            <input
              type="text"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Your budget"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Your message"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;

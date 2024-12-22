import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URI from "../api";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    date,
    numberOfPeople: people,
    tourId: id,
    type,
  } = useLocation().state;

  const [error] = useState("");
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [whatsAppNo, setWhatsAppNo] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${BASE_URI}/${type}/single/${id}`,
    }).then(
      (res) => {
        console.log(res);
        res.data.data.totalPrice = res.data.data.price * +people;
        res.data.data.payable = res.data.data.totalPrice * 0.3;
        setData(res.data.data);
        // setActivity(res.data.data);
        // setLoading(false);
      },
      (err) => {
        console.error("Error fetching activity data:", err);
        // setLoading(false);
      }
    );
  }, [error, id, people, type]);
  // const total = `${people}*${data.price}`;
  const handleCheckout = (e) => {
    e.preventDefault();

    const JWT = localStorage.getItem("JWT");
    axios({
      method: "POST",
      url: `${BASE_URI}/booking`,
      data: {
        startDate: date,
        numberOfPeople: people,
        travelPackageId: id,
        email: email,
        fullname: fullName,
        whatsAppNo,
        transactionId: "trxId",
      },
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    }).then(() => {
      navigate("/success");
    });
  };

  if (!data) return <p>Loading...</p>;
  return (
    <div className="bg-[#FEFCFB] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Form Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Full Name"
                  required
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="whatsapp-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp-number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter WhatsApp Number"
                  required
                  value={whatsAppNo}
                  onChange={(e) => {
                    setWhatsAppNo(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="mt-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-500"
                    required
                  />
                  <span className="ml-2 text-sm">
                    I have read and accept{" "}
                    <a href="#" className="text-blue-500 underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="text-xl mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                onClick={handleCheckout}
              >
                Confirm Booking
              </button>
            </form>
          </div>

          {/* Right Summary Section */}
          <div className="bg-white shadow-md rounded-lg p-6 md:h-[500px]">
            <h2 className="text-3xl font-bold mb-4">Your Booking</h2>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-3xl font-[300]">{data.packageName}</p>
              <div className="text-xl mt-2">
                <p className="flex justify-between">
                  Departure Date: <span className="font-semibold">{date}</span>
                </p>
                <p className="flex justify-between">
                  Duration:{" "}
                  <span className="font-semibold">{data.duration}</span>
                </p>
                <p className="flex justify-between">
                  Adults: <span className="font-semibold">{people}</span>
                </p>
                {/* <p className="flex justify-between">
                  Children: <span className="font-semibold">3</span>
                </p> */}
              </div>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between text-2xl font-medium">
                <p>Sub Total:</p>
                <p>{data.totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

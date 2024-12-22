/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ tour }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [error, setError] = useState("");

  const handleChangeNoOfPeople = (operator) => {
    setError(""); // Clear previous error message
    if (operator === "+") {
      if (numberOfPeople >= 20) {
        return setError("A group can only have up to 20 members.");
      }
      setNumberOfPeople((state) => state + 1);
    }
    if (operator === "-") {
      if (numberOfPeople <= 1) {
        return setError("A group must have at least 1 member.");
      }
      setNumberOfPeople((state) => state - 1);
    }
  };

  const handleBooking = async () => {
    if (!startDate || !numberOfPeople) {
      return setError("Provide all the required details");
    }

    // const payload = {
    //   tourId: tour.id,
    //   date: startDate,
    //   numberOfPeople,
    // };
    // router.push(
    //   `/checkout?date=${startDate}&people=${numberOfPeople}&id=${tour.id}&type=tours`
    // );
    navigate("/checkout", {
      state: {
        tourId: tour.id,
        date: startDate,
        numberOfPeople,
        type: "tours",
      },
    });
  };

  const totalPrice = numberOfPeople * tour.price;

  return (
    <div className="w-[470px] lg:pl-4 ">
      <div className="bg-[white] p-6 rounded-lg shadow-md">
        <h2 className="text-[36px] font-medium text-[#1C2B38] border-b mb-4">
          Booking
        </h2>
        <div className="mb-4">
          <label className="block text-black mb-2">Select Date</label>
          <input
            type="date"
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              error && !startDate
                ? "border-red-500 focus:ring-red-500"
                : "bg-[#D6D6D6] focus:ring-[#808080]"
            } cursor-pointer`}
            onChange={(e) => {
              if (new Date() > new Date(e.target.value)) {
                return setError(
                  "The selected date cannot be earlier than today."
                );
              }
              setStartDate(e.target.value);
              setError(""); // Clear previous error
            }}
          />
          {!startDate && error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </div>
        {["Adults (3 yrs onwards)"].map((label, idx) => (
          <div key={idx} className="mb-4">
            <label className="block text-black  mb-2">{label}</label>
            <div className="flex items-center">
              <button
                className="px-3 py-2 border bg-[#D6D6D6] rounded-r-lg"
                onClick={() => {
                  handleChangeNoOfPeople("-");
                }}
              >
                <FiMinus />
              </button>
              <input
                type="number"
                className="w-12 text-center border-t border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                value={numberOfPeople}
                onChange={(e) => {
                  setNumberOfPeople(e.target.value);
                }}
              />
              <button
                className="px-3 py-2 border bg-[#D6D6D6] rounded-r-lg"
                onClick={() => {
                  handleChangeNoOfPeople("+");
                }}
              >
                <FiPlus />
              </button>
            </div>
          </div>
        ))}

        <div className="text-2xl font-bold text-[#56C2C3] mb-4">
          {/* &#8377; {tour.price} */}
          Total: &#8377; {totalPrice}
        </div>
        <button
          onClick={handleBooking}
          className="w-full h-[50px] bg-gradient-to-r from-green-400 to-green-600 text-white py-2 text-[18px] font-bold rounded-lg tracking-[0.04em] hover:opacity-90"
        >
          Confirm Booking
        </button>
        {error && (
          <p className="text-red-500 text-center mt-4 text-sm">{error}</p>
        )}
      </div>
    </div>
  );
};

export default BookingForm;

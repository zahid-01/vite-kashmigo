import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SuccessBooking = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to the homepage or any other relevant page
  };

  return (
    <div className="bg-[#FEFCFB] min-h-screen flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-md rounded-lg max-w-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <FiCheckCircle className="text-green-500 text-6xl" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Booking Successful!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your booking has been successfully confirmed. Further details will be
          shared via WhatsApp shortly. Please keep your phone available.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4 text-left">
          <p className="text-lg font-medium text-gray-800">What’s Next?</p>
          <ul className="list-disc ml-5 mt-2 text-gray-600 text-md">
            <li>You will receive a confirmation message on your WhatsApp.</li>
            <li>
              Your itinerary and travel details will be shared soon via WhatsApp
              or email.
            </li>
            <li>
              For any queries, feel free to contact us at{" "}
              <span className="text-blue-500">+91 6006354443</span>.
            </li>
          </ul>
        </div>
        <button
          onClick={handleGoHome}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 text-xl font-bold mt-4"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default SuccessBooking;

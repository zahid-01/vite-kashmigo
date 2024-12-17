import { useEffect, useState } from "react";
import { IoIosClock } from "react-icons/io";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import BASE_URI from "../api";

function Activity() {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to render stars based on averageRating
  const renderStars = (averageRating) => {
    const maxStars = 5;
    const filledStars = Math.floor(averageRating);
    const hasHalfStar = averageRating % 1 !== 0;
    const totalStars = hasHalfStar ? filledStars + 1 : filledStars;

    return (
      <span className="flex items-center text-[#FFA432]">
        {Array.from({ length: filledStars }, (_, i) => (
          <FaStar key={`filled-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {Array.from({ length: maxStars - totalStars }, (_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </span>
    );
  };

  // Fetch packages on component mount
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`${BASE_URI}/activities/package`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch packages");
        }

        setPackages(data.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Loading and Error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {packages.length > 0 &&
        packages.map((activity, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() =>
                (window.location.href = `/tour-activity/${activity.id}`)
              }
            >
              <div className="relative group">
                <img
                  src={activity.pictures[0]}
                  width={500}
                  height={300}
                  alt={activity.activityName || "Activity Image"}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {activity.activityName}
                </h3>
                <ul className="mt-2 text-sm sm:text-base font-normal leading-[21.6px] text-[#2D2D2D] space-y-2">
                  <li className="flex items-center gap-2">
                    <IoIosClock className="justify-center" />
                    Duration: {activity.duration}
                  </li>
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  {activity.averageRating
                    ? renderStars(activity.averageRating)
                    : "No Ratings"}
                  <span className="text-[#7BBCB0] font-bold mr-7">
                    &#8377; {activity.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#778088]">
                    {activity.numberOfReviews} reviews
                  </span>
                  <span className="text-[#778088] font-bold">per person</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Activity;

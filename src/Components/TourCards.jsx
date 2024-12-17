/* eslint-disable react/prop-types */
const TourCards = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative group">
        <img
          src={tour.pictures[0]}
          width={500}
          height={300}
          alt="Kashmir_travels"
          className="w-full h-40 object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {tour.packageName}
        </h3>
        <ul className="mt-2 text-sm text-gray-600 space-y-1">
          <li>{tour.duration}</li>
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-[#FFA432]">★★★★☆</span>
            <span className="text-sm text-gray-500 ml-2">
              {tour.numberOfReviews}
            </span>
          </div>

          <span className="text-[#56C2C3] font-bold">
            from &#8377; {tour.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TourCards;

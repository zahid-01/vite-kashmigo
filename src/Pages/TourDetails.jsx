"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Map from "../../../../public/assets/map.png";
import { IoLocationOutline } from "react-icons/io5";

import axios from "axios";
import { BASE_URI } from "../../web/beConfig";
import { useParams } from "next/navigation";
import BookingForm from "@/app/components/BookingForm";

const TourDetails = () => {
  const params = useParams();

  const [tour, setTour] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${BASE_URI}/tours/single/${params.id}`,
    }).then(
      (res) => {
        setTour(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [params.id]);

  if (!tour) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  return (
    <div className="flex py-5 md:flex-row flex-col">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-medium mb-2">{tour.packageName}</h1>
          <div className="flex items-center mb-4 gap-2">
            <i className="fas fa-map-marker-alt text-gray-500 "></i>
            <span className="flex items-center gap-2 text-[#778088]">
              <IoLocationOutline />
              Srinagar
            </span>
            <div className=" h-3 border-l-2 border-gray-400"></div>

            <span className=" text--[#778088]">
              <span className=" text-[#FFA432] mx-2">★★★★★</span>
              <i className="fas fa-star-half-alt"></i> ({tour.numberOfReviews})
            </span>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="">
              <Image
                src={tour.pictures[0]}
                alt="dal"
                width={770}
                height={460}
              />
              <div className="flex space-x-3 mt-4">
                {tour.pictures.map((picture, idx) => (
                  <Image
                    key={idx}
                    src={picture}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full "
                    width={120}
                    height={100}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-[3px] border border-[#16527D14] shadow-md mt-6 mr-[63px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "fa-check-circle",
                  title: " Free cancellation",
                  // title: {`${<TbCancel />}Free cancellation`},
                  description:
                    "Cancel up to 24 hours in advance to  receive a full refund",
                },
                {
                  icon: "fa-shield-alt",
                  title: "Health precautions",
                  description:
                    "Special health and safety measures apply. Learn more",
                },
                {
                  icon: "fa-mobile-alt",
                  title: "Mobile ticketing",
                  description: "Use your phone or print your voucher",
                },
                {
                  icon: "fa-clock",
                  title: "Duration 3.5 hours",
                  description: "Check availability to see starting times",
                },
                {
                  icon: "fa-bolt",
                  title: "Instant confirmation",
                  description: "Don't wait for the confirmation!",
                },
                {
                  icon: "fa-language",
                  title: "Live tour guide in English",
                  description: "English",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <i
                    className={`fas ${item.icon} text-green-500 text-xl mr-2`}
                  ></i>
                  <div>
                    <h3 className="font-bold">
                      {/* {idx === 0 && (
                        <TbCancel className="text-red-500 text-lg mr-2" />
                      )} */}
                      {item.title}
                    </h3>
                    <p className="px-5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Description Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p>{tour.description}</p>
          </div>
          <hr className="border-gray-300 my-4" />

          {/* Activity, Includes, Safety, Details, and Map Sections */}
          <div className="description-section">
            <div className=" text-black">
              <div className="max-w-4xl mt-8 mx-auto ">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Activity</h2>
                  <div>
                    <h3 className="font-semibold text-xl">What You Will Do</h3>
                    <ul className="list-disc list-inside text-lg">
                      {tour?.itinerary?.map((itinerary, index) => {
                        return (
                          <li key={index}>
                            <strong className="mr-4">
                              {Object.keys(itinerary)[0]}
                            </strong>
                            {Object.values(itinerary)[0]}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
                <hr className="border-[#CEDADF] my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    What Is Included / Not Included
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold">Includes</h3>
                      <ul className="list-disc list-inside">
                        {tour.included.map((el, index) => (
                          <li key={index}>{el}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Not Includes</h3>
                      <ul className="list-disc list-inside">
                        {tour.excluded.map((el, index) => (
                          <li key={index}>{el}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
                <hr className="border-[#CEDADF] my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Safety</h2>
                  <div>
                    <h3 className="font-semibold">Health precautions</h3>
                    <ul className="list-disc list-inside">
                      <li>All required protective equipment is provided</li>
                      <li>
                        All areas that customers touch are frequently cleaned
                      </li>
                      <li>You must keep social distance while in vehicles</li>
                      <li>
                        The number of visitors is limited to reduce crowds
                      </li>
                    </ul>
                  </div>
                </section>
                <hr className="border-[#CEDADF] my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Details</h2>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold">Language</h3>
                      <ul className="list-disc list-inside">
                        <li>English</li>
                        <li>Urdu</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Duration</h3>
                      <ul className="list-disc list-inside">
                        <li>{tour.duration}</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Number of people</h3>
                      <ul className="list-disc list-inside">
                        <li>5 people</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mt-8">
                      Meeting point address
                    </h3>
                    <div className="flex gap-[6px] text-[18px] font-normal leading-[21.6px] mr-12 mt-4 ">
                      {/* <span className="h">
                        <div className="h-[8px] w-[8px] bg-[#495560] rounded-full mt-1"></div>
                      </span> */}
                      Meet your guide inside the west entrance of Altab Ali Park
                      (Whitechapel Road). It's opposite the entrance to Aldgate
                      East Tube Station and the Whitechapel Gallery. Look for a
                      guide wearing SMT attire and holding a red SMT flag.
                    </div>
                    <div className="text-[#56C2C3] text-[18px] font-semibold mt-8">
                      <a
                        className=""
                        href={`https://www.google.com/maps?q=${tour.tourLocation.latitude},${tour.tourLocation.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </section>

                <div className="w-[740px]">
                  <Image
                    alt="Map showing the meeting point location"
                    className="w-auto h-auto p-0 m-0"
                    height={340}
                    src={Map}
                    width={740}
                  />
                </div>
                <hr className="border-[#CEDADF]  my-12 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mt-[127px] mr-[100px] */}
      <div className="mt-[127px] mr-[100px]">
        <BookingForm tour={tour} />
      </div>
    </div>
  );
};

export default TourDetails;

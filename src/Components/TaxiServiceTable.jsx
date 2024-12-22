const TaxiServiceTable = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-center text-2xl font-semibold text-[#56C2C3] mb-6">
        Taxi Service Price in Kashmir
      </h2>

      <div className="overflow-x-auto ">
        <table className="min-w-full border-collapse border ">
          <thead className="">
            <tr className="bg-[#56C2C3] text-white ">
              <th className="px-6 py-4 text-left text-[18px] leading-[21.6px] font-bold">
                Updated Taxi Service Rate in Kashmir 2024
              </th>
              <th className=" py-4 text-left  text-[18px] leading-[21.6px] font-bold">
                Price / Day
              </th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Swift Dzire / Etios / Baleno", "Rs 2500"],
              ["Tavera / Xylo", "Rs 3300"],
              ["Innova / Ertiga", "Rs 3300"],
              ["Innova Crysta", "Rs 4500"],
              ["Fortuner", "Rs 6500"],
              ["Force Traveller 14 Seater", "Rs 6000"],
              ["Force Traveller 17 Seater", "Rs 7500"],
              ["Mini Bus", "Rs 8500"],
            ].map(([vehicle, price], idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-white"}`}
              >
                <td className="px-6 py-4 text-[18px] font-medium leading-[21.6px] text-[#000000] border-b border-[#D6D6D6]">
                  {vehicle}
                </td>
                <td className="py-4 text-[18px] font-medium leading-[21.6px] text-[#000000] border-b border-[#D6D6D6]">
                  {price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxiServiceTable;

import React from "react";

const CityTable = ({ temp, setShowCity }) => {
  console.log(temp);
  return (
    <div className="h-full w-full flex flex-col">
      <div
        onClick={() => {
          window.location.reload();
        }}
        className="text-[25px] hover:scale-110 m-2 transition-all duration-500 ease-in hover:bg-black  px-3 rounded-md w-max hover:text-white cursor-pointer"
      >
        Close
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <table className="text-[25px]">
          <thead>
            <tr className="text-[30px]">
              <th className="px-4 py-2 text-center border border-black">
                City Name
              </th>
              <th className="px-4 py-2 text-center border border-black">
                Temperature
              </th>
              <th className="px-4 py-2 text-center border border-black">
                Economy
              </th>
              <th className="px-4 py-2 text-center border border-black">
                Population
              </th>
            </tr>
          </thead>
          {temp.map((temp, index) => (
            <tbody>
              <tr className="">
                <td className="border px-4 py-2 text-center border-black">
                  {temp.cityName}
                </td>
                <td className="border px-4 py-2 text-center border-black">
                  {temp.temp}°C
                </td>
                <td className="border px-4 py-2 text-center border-black">
                  ₹{temp.economy}
                </td>
                <td className="border px-4 py-2 text-center border-black">
                  {temp.population}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CityTable;

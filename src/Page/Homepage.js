import React, { useState } from "react";
import data from "../Data/Data";
import StateBlock from "../Components/StateBlock";
import CityTable from "../Components/CityTable";

const Homepage = () => {
  const [showCity, setShowCity] = useState(false);
  const [city, setCity] = useState([]);
  return (
    <div
      className={`h-full w-full lg:flex-row flex-col flex justify-center ${
        showCity ? "bg-blue-500" : "bg-blue-900"
      }`}
    >
      <div className="w-full h-full md:flex-row flex-col flex justify-center items-center">
        {!showCity ? (
          <div className="flex flex-wrap gap-1 md:justify-center aspect-video h-[80%] w-[80%]">
            {data.map((temp, index) => (
              <StateBlock
                temp={temp}
                key={index}
                setCity={setCity}
                setShowCity={setShowCity}
              />
            ))}
          </div>
        ) : (
          <div className="w-[65%] h-[70%] rounded-md bg-yellow-200">
            <CityTable temp={city} setShowCity={setShowCity} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;

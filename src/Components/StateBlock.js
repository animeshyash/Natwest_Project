import React, { useState } from "react";

const StateBlock = ({ temp, setCity, setShowCity }) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div
      onClick={() => {
        setShowCity(true);
        setCity(temp.city);
      }}
      // onClick={() => setCity(temp.city)}
      onMouseEnter={() => setShowDialog(true)}
      onMouseLeave={() => setShowDialog(false)}
      className={`aspect-video w-[18%] text-black flex-wrap flex items-center md:flex-row flex-col rounded-md justify-center relative cursor-pointer`}
      style={{ backgroundColor: temp.color }}
    >
      <p className="md:text-[23px] mb-[30px] text-[13px] text-center mx-auto">
        {temp.state}
      </p>
      <div
        className={`text-[14px] ${
          showDialog
            ? " transition-all ease-in duration-700 block bottom-2 opacity-100 text-center"
            : " opacity-0"
        } absolute`}
      >
        <p>Capital: {temp.capital}</p>
        <p>Economy: ₹{temp.economy}</p>
        <p>Temp.: {temp.temp}°C</p>
      </div>
    </div>
  );
};

export default StateBlock;

import React from "react";
import { GiCondorEmblem } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <div className="flex bg-gray-400">
        <div className="flex mx-0 my-5 text-xl ">
          <GiCondorEmblem size={30} className="text-orange-500" />
          <h1 className="mx-2">Tender FMS</h1>
        </div>
        <h1 className="m-auto my-5  text-xl font-bold text-white">
          DIGITALS INDIA SECURITY SERVICES INDIA LIMITED
        </h1>
      </div>
    </div>
  );
};

export default Header;

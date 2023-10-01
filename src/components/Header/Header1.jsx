import React from "react";
import { GiCondorEmblem } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <div>
      <div className="flex shadow-lg mx-auto ">
        <div className="flex  my-5 mx-1 lg:mx-10 text-xl ">
          <GiCondorEmblem size={30} className="text-orange-500" />
          <h1 className="mx-2">Tender FMS</h1>
        </div>
        <div className="sm:flex my-5  mx-auto">
          {/* lg:ml-[800px] */}
          <div className="flex ">
            <div className="mx-2  text-orange-500 cursor-pointer">
              <CgProfile size={25} />
            </div>
            <h1 className="font-bold cursor-pointer">Hello, Bhart</h1>
          </div>
          <div className="flex lg:mx-16 ml-12">
            <Link to="/" className="flex">
              <p className="font-bold cursor-pointer">Logout</p>
              <div className=" m-1 mx-2 cursor-pointer">
                <LuLogOut />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;

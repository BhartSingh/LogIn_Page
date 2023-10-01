import React from "react";
import { RiMastercardLine, RiOrganizationChart } from "react-icons/ri";
import {
  MdOutlineKeyboardArrowDown,
  MdVerified,
  MdDetails,
} from "react-icons/md";
import { BiAddToQueue, BiGitBranch } from "react-icons/bi";
import { GrUserManager } from "react-icons/gr";
import { FaRegLightbulb, FaEnvelopeOpen } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";

const Tender1 = () => {
  return (
    <div className="">
      <div className=" shadow-xl w-full  ">
        <div className="my-5    ">
          <div className="flex mx-3  ">
            <div className="my-1 cursor-pointer">
              <RiMastercardLine />
            </div>
            <h1 className="mx-5  text-green-700 cursor-pointer">Masters</h1>
            <div className="my-1 ml-36  cursor-pointer">
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
          <div>
            <div className="flex mx-12 my-5">
              <div className="my-1 text-gray-500 cursor-pointer">
                <BiAddToQueue />
              </div>
              <h1 className="mx-3 text-slate-500 cursor-pointer">
                Add New Tender Master
              </h1>
            </div>
            <div className="flex mx-12 my-5">
              <div className="my-1 text-gray-500 cursor-pointer">
                <RiOrganizationChart />
              </div>
              <h1 className="mx-3 text-slate-500 cursor-pointer">
                Organization Master
              </h1>
            </div>
            <div className="flex mx-12 my-5">
              <div className="my-1 text-gray-200 cursor-pointer">
                <GrUserManager />
              </div>
              <h1 className="mx-3 text-slate-500 cursor-pointer">
                Employee Master
              </h1>
            </div>
            <div className="flex mx-12 my-5">
              <div className="my-1 text-gray-500 cursor-pointer">
                <BiGitBranch />
              </div>
              <h1 className="mx-3 text-slate-500 cursor-pointer">
                Branch Master
              </h1>
            </div>
            <div className="flex mx-12 my-5">
              <div className="my-1 text-gray-500 cursor-pointer">
                <FaRegLightbulb />
              </div>
              <h1 className="mx-3 text-slate-500 cursor-pointer">
                Product Master
              </h1>
            </div>
          </div>
          <div className="flex m-3">
            <div className="my-1 cursor-pointer">
              <MdVerified />
            </div>
            <h1 className="mx-5 text-green-700 cursor-pointer">
              {" "}
              Verify Tenders
            </h1>
          </div>
          <div className="flex m-3 ">
            <div className="my-1 cursor-pointer">
              <MdDetails />
            </div>
            <h1 className="mx-5 text-green-700 cursor-pointer">
              Dispatch Detail
            </h1>
          </div>
          <div className="flex m-3 ">
            <div className="my-1 cursor-pointer">
              <AiFillBank />
            </div>
            <h1 className="mx-5 text-green-700 cursor-pointer">
              Bank Confirmation
            </h1>
          </div>
          <div className="flex m-3 ">
            <div className="my-1 cursor-pointer">
              <FaEnvelopeOpen />
            </div>
            <h1 className="mx-5 text-green-700 cursor-pointer">
              Tender Opening Details
            </h1>
          </div>
        </div>
        <div className=" ">
          <h1 className="bg-orange-600 text-white h-12 text-center py-3">
            Doritech Consultancy & Software Solution
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tender1;

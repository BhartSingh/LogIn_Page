import React from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const Tender2 = () => {
  return (
    <div className="mx-auto">
      <div>
        <div className="flex my-4 ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/887/887997.png"
            alt=""
            className="h-8 my-2"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/732/732220.png"
            alt=""
            className="h-8 m-2"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/10451/10451688.png"
            alt=""
            className="h-8 m-2"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/3997/3997593.png"
            alt=""
            className="h-8 m-2"
          />
        </div>
        <div className="flex ">
          <h1 className="flex font-bold text-lg my-1">Search:</h1>
          <input
            type="id"
            name="id"
            className="mt-1 w-32 mx-1 sm:mx-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            required
          />
        </div>
        <div>
          <div className="my-3">
            <div className=" border shadow-sm w-[200px] sm:w-[232px] border-orange-500  border-t-2 border-r-2 border-l-2">
              <div className=" flex bg-sky-300 h-12">
                <h1 className="mx-1">Tender id</h1>
                <BiSolidUpArrow size={15} className="m-2 cursor-pointer" />
                <h1 className="mx-2">Tender Name</h1>
                <div className="text-gray-400 m-2 cursor-pointer">
                  <BiSolidUpArrow size={15} />

                  <BiSolidDownArrow size={15} />
                </div>{" "}
              </div>
              <h1 className="flex h-8">
                <h1 className="bg-white/80 w-full cursor-pointer ">0</h1>{" "}
                <span className=" bg-slate-100 w-full cursor-pointer">
                  Doritech
                </span>
              </h1>
              <hr />
              <h1 className="flex h-8">
                <h1 className="bg-gray-50 w-full cursor-pointer ">102</h1>{" "}
                <span className=" bg-white/60 w-full cursor-pointer">
                  Digitals
                </span>
              </h1>
              <hr />
              <h1 className="flex h-8 text-blue-500">
                <h1 className="bg-white/40 w-full cursor-pointer">103</h1>{" "}
                <span className=" bg-slate-100 w-full cursor-pointer">
                  Doritech
                </span>
              </h1>
              <hr />
              <h1 className="flex h-8">
                <h1 className="bg-gray-50 w-full cursor-pointer ">105</h1>{" "}
                <span className=" bg-white/70 w-full cursor-pointer">
                  Doritech
                </span>
              </h1>
              <hr />
            </div>
          </div>
        </div>
        <p>Showing 1 to 4 of 4 entries</p>
        <div className="flex my-16">
          <button>Previous</button>
          <div className="">
            <button className=" border-gray-500 border w-7 h-8 my-2 bg-orange-600 mx-5 text-white rounded-lg">
              1
            </button>
          </div>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Tender2;

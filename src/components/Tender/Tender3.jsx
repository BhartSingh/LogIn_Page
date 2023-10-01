import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Tender3 = () => {
  return (
    <div className="mx-5">
      <div className="mt-10  ">
        <button className="bg-orange-600 w-full sm:w-52 text-white rounded-full lg:mx-72  ">
          Tender Master
        </button>
      </div>
      {/* w-[850px] */}
      <div className="my-5 border border-orange-500 grid grid-cols-2 sm:grid-cols-3 sm:w-[700px] md:w-[750px] lg:w-[850px] md:grid-cols-4 shadow-xl rounded-lg border-t-2 border-r-2 border-b-2 border-l-2">
        <div className="my-6 ">
          <div className="mx-1 ">
            <h1 className="">Organization Name:</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="      Digital    🡻"
                className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
                required
              />

              <AiFillPlusCircle size={25} className="m-2 text-orange-500" />
            </div>
          </div>
          <div className="mx-1 my-4">
            <h1>Date of Submission:</h1>

            <input
              type="text"
              placeholder="dd-mm-yyyy 📅"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>
          <div className="mx-1 my-4">
            <h1>Lead Time:</h1>

            <input
              type="text"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>{" "}
          <div className="mx-1 my-4">
            <h1>Finanicial Bid Opening Date:</h1>
            <input
              type="text"
              placeholder="dd-mm-yyyy 📅"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>
        </div>
        <div className="my-6">
          <h1>Controlling Office:</h1>
          <input
            type="text"
            placeholder="      Delhi    🡻"
            className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
            required
          />
          <div className="my-4">
            <h1>DI Branch:</h1>
            <input
              type="text"
              placeholder="Select Branch 🡻"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>
          <div className="my-5">
            <h1>Due Date of Preparation:</h1>

            <input
              type="text"
              placeholder="dd-mm-yyyy 📅"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>
          <h1>Pre Bid Meeting Remarks:</h1>
          <textarea
            rows="4"
            cols="20"
            name="comment"
            form="usrform "
            className="border border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          ></textarea>
        </div>
        <div className="my-6">
          <h1>Lead Time:</h1>
          <input
            type="text"
            className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
            required
          />
          <div className="my-4">
            <h1>Sales Representatives:</h1>

            <input
              type="text"
              placeholder="      1-ak     🡻"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>
          <div className="my-5">
            <h1>Due Date for Dispatch:</h1>

            <input
              type="text"
              placeholder="dd-mm-yyyy 📅"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>
          <h1>Financial Bid Remarks:</h1>
          <textarea
            rows="4"
            cols="20"
            name="comment"
            form="usrform "
            className="border border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          ></textarea>
        </div>
        <div className="my-6">
          <h1>Product:</h1>
          <input
            type="text"
            placeholder="12-cam 65-camera"
            className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
            required
          />
          <div className="my-5">
            <h1>Due Date for Dispatch:</h1>

            <input
              type="text"
              placeholder="dd-mm-yyyy 📅"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>{" "}
          <div className="my-5">
            <h1>Due Date for Dispatch:</h1>

            <input
              type="text"
              placeholder="dd-mm-yyyy 📅"
              className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-400  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-32 h-8 rounded-md sm:text-sm focus:ring-1"
              required
            />
          </div>
          <div className="mt-28">
            <Link to="/ ">
              <button className="bg-sky-600 text-white w-20 rounded-md">
                Save
              </button>
            </Link>
            <Link to="/ ">
              <button className="bg-orange-600 text-white w-20 sm:mx-2 rounded-md">
                Edit{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tender3;

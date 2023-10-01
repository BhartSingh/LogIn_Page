import React from "react";
import { Radio } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <div className=" my-8">
      <div className=" shadow-sm">
        <div className="mx-auto">
          <button className="bg-orange-500 w-full h-8 text-xl text-white rounded-full">
            Login
          </button>
        </div>
        <div className="flex  my-5 mx-8">
          <h1>User Type :</h1>
          <div className="mx-5">
            <div className="flex ">
              <Radio name="type" className="m-1" />
              Employee
              <div className="flex mx-5 ">
                <Radio name="type" className="m-1" />
                Admin
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow-xl border-slate-300 border-r-4 border-b-4">
          <div className="m-5">
            <div className="flex mx-7 ">
              <h1 className="flex font-bold">
                Employee <span className="text-white">-</span>ID
              </h1>
              <input
                type="id"
                name="id"
                className="mt-1 mx-8 px-3 py-2 bg-white border shadow-sm border-slate-300  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                required
              />
            </div>
            <div className="flex mx-7 m-3 ">
              <h1 className="flex font-bold">
                Password <span className="text-white">-</span>
                <span className="text-white">ID</span>
              </h1>
              <input
                type="id"
                name="id"
                className="mt-1 mx-8 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                required
              />
            </div>
            <p className="m-3">Forgot Password ?</p>
            <Link to="/tender">
              <button className=" bg-sky-500 text-white w-48 h-8 rounded-lg m-3">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

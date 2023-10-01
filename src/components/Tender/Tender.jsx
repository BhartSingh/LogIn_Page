import React from "react";
import Header1 from "../Header/Header1";
import Tender1 from "./Tender1";
import Tender2 from "./Tender2";
import Tender3 from "./Tender3";

const Tender = () => {
  return (
    <div>
      <Header1 />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Tender1 />
        {/* <div className=" "> */}
        <Tender2 />
        <Tender3 />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Tender;
//

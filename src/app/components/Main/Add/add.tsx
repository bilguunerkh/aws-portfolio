import React from "react";

const Add = () => {
  return (
    <div style={{ background: "#3C79F5" }}>
      <div className="container mx-auto flex flex justify-between p-5">
        <div className="flex gap-2 items-center">
          <h2 className="text-white font-bold text-4xl">
            UNEGUI<span className="text-black">.MN</span>
          </h2>
          <p className="text-xs text-white">
            Монголын <br></br>амьтны хэрэгсэлын төв худалдаа
          </p>
        </div>

        <div
          style={{ background: "#FFF6DC" }}
          className="grid items-center px-4 rounded-md"
        >
          <h2 className="text-black lg:text-md md:text-base sm:text-sm max-sm:text-xs font-normal">
            Элс нэмэх
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Add;

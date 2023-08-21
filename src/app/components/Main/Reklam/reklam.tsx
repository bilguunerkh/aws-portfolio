import React from "react";

const Reklam = () => {
  return (
    <div style={{ background: "#383838" }} className="h-40">
      <div className="container mx-auto p-5">
        <div>
          <h1 className="text-white font-bold lg:text-4xl md:text-2xl sm:text-xl max-sm:text-lg">
            Залуу минь таны тэжээвэр амьтан дахин давтагдахгүй цор ганц.
          </h1>
        </div>
        <div className="flex gap-4 pt-5">
          <div
            style={{ background: "#BB2525" }}
            className="px-2 p-1 text-white "
          >
            Баярлалаа, тэгье.
          </div>
          <div style={{ background: "#F0DE36" }} className="px-2 p-1">
            Дахин илгээх
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reklam;

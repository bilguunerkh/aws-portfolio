"use client";
import React, { useState, useEffect } from "react";
import { URL_API } from "@/app/util/variables";
import axios from "axios";

const Main = () => {
  const [litter, setLitter] = useState([]);
  const getAllLitters = async () => {
    try {
      const result = await axios.get(`${URL_API}/litters`);
      console.log(result.data);
      setLitter(result.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getAllLitters();
  }, []);
  return (
    <div className="container mx-auto grid lg:grid-cols-5 gap-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 p-5 ">
      <div style={{ background: "#0079FF" }} className="h-80 rounded-md">
        <div className="flex justify-center">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368234354_5744752915628308_3896885153856703055_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_3n6EYX5hEgAX9FUIiS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS3MP94w53JuA_yVg5yoi2Wa4xy6EDKS6UHJ_CngQxLLQ&oe=650A8B1B"
            alt=""
            width={165}
          />
        </div>
        <div className="text-center pt-3">
          <h3 className="text-black">{litter.Title}</h3>
          <h1 className="text-white font-bold text-2xl">19,900₮</h1>
        </div>
      </div>
      <div style={{ background: "#D71313" }} className="h-80 rounded-md">
        <div className="flex justify-center">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368234354_5744752915628308_3896885153856703055_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_3n6EYX5hEgAX9FUIiS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS3MP94w53JuA_yVg5yoi2Wa4xy6EDKS6UHJ_CngQxLLQ&oe=650A8B1B"
            alt=""
            width={165}
          />
        </div>
        <div className="text-center pt-3">
          <h1 className="text-white font-bold text-2xl">19,900₮</h1>
        </div>
      </div>
      <div style={{ background: "#FFD93D" }} className="h-80 rounded-md">
        <div className="flex justify-center">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368234354_5744752915628308_3896885153856703055_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_3n6EYX5hEgAX9FUIiS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS3MP94w53JuA_yVg5yoi2Wa4xy6EDKS6UHJ_CngQxLLQ&oe=650A8B1B"
            alt=""
            width={165}
          />
        </div>
        <div className="text-center pt-3">
          <h1 className="text-white font-bold text-2xl">19,900₮</h1>
        </div>
      </div>
      <div style={{ background: "#F94C10" }} className="h-80 rounded-md">
        <div className="flex justify-center">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368234354_5744752915628308_3896885153856703055_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_3n6EYX5hEgAX9FUIiS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS3MP94w53JuA_yVg5yoi2Wa4xy6EDKS6UHJ_CngQxLLQ&oe=650A8B1B"
            alt=""
            width={165}
          />
        </div>
        <div className="text-center pt-3">
          <h1 className="text-white font-bold text-2xl">19,900₮</h1>
        </div>
      </div>
      <div style={{ background: "#00DFA2" }} className="h-80 rounded-md">
        <div className="flex justify-center">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368234354_5744752915628308_3896885153856703055_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_3n6EYX5hEgAX9FUIiS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS3MP94w53JuA_yVg5yoi2Wa4xy6EDKS6UHJ_CngQxLLQ&oe=650A8B1B"
            alt=""
            width={165}
          />
        </div>
        <div className="text-center pt-3">
          <h1 className="text-white font-bold text-2xl">19,900₮</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;

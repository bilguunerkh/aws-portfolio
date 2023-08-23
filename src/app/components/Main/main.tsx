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
    <div className="container mx-auto gap-2">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2 gap-3 p-5">
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/5fec586e-04fd-4963-9a1e-2fd3b0c0edc9/346287131_974414310406241_6395030867765271130_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/3233bde3-0817-44e0-9ecd-85601ed4ef46/345928869_253581430667846_4844923425958495381_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/9aebbe43-3c93-413b-8c26-1fdf39e03999/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/9aebbe43-3c93-413b-8c26-1fdf39e03999/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/9aebbe43-3c93-413b-8c26-1fdf39e03999/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/9aebbe43-3c93-413b-8c26-1fdf39e03999/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/5fec586e-04fd-4963-9a1e-2fd3b0c0edc9/346287131_974414310406241_6395030867765271130_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/3233bde3-0817-44e0-9ecd-85601ed4ef46/345928869_253581430667846_4844923425958495381_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/9aebbe43-3c93-413b-8c26-1fdf39e03999/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "2px solid #337CCF" }}
          className="rounded-xl p-3
            drop-shadow-2xl"
        >
          <div className="grid justify-center">
            <img
              src="https://o.remove.bg/downloads/9aebbe43-3c93-413b-8c26-1fdf39e03999/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
              alt=""
              width={250}
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-md truncate">
              Pelleted Paper Cat Litter
            </h1>
            <p className="text-xs opacity-50 tetxt-light">Муурны Элс</p>
            <div className="flex gap-4">
              <h4
                style={{ color: "#2192FF" }}
                className="font-semibold text-base"
              >
                19,900 ₮
              </h4>
              <p className="line-through font-light text-sm flex items-center opacity-50">
                24,900₮
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

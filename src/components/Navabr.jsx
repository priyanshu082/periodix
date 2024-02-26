"use client";
import React, { useEffect, useState } from "react";
import SearchElementCard from "./SearchElementCard";
import { searchInput } from "@/utils/navbar";
import { myDebounce } from "@/utils/debounce";

const Navabr = () => {
  const data = require("../utils/data.json");
  const [display, setDisplay] = useState(false);
  const [active, setActive] = useState("atomicNumber");
  const [filterData, setFilterData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  //   search function
  const functToSetQuery = (value) => {
    setSearchQuery(value);
  };
  const debounceString = myDebounce(functToSetQuery, 1);

  useEffect(() => {
    if (searchQuery !== "") {
      const result = data.filter((item) =>
        item[active].toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterData(result);
    } else {
      setFilterData(data);
    }

    console.log("succesfull");
  });

  return (
    <div className="flex flex-col text-white z-50 w-full fixed bg-zinc-900 shadow-lg shadow-zinc-800 ">
      {/* navbar content  */}
      <div className=" flex flex-row justify-between items-center pr-[40px]">
        {/* logo */}
        <div className="logo">Periodically-2.0</div>

        {/* searchbar */}
        <div className="flex flex-row items-center border-[2px] border-red-600 pr-[10px]">
          <div
            onClick={() => setDisplay(true)}
            className="  rounded-xl px-[10px] flex flex-row items-center"
          >
            <input
              className="bg-transparent h-[40px] w-[30vw] outline-none"
              placeholder="Search Element by name || number || symbol"
              value={searchQuery}
              onChange={(event) => debounceString(event.target.value)}
            />
          </div>

          <div onClick={() => setDisplay(false)}>
            <div
              className={`${
                display ? "opacity-100" : "opacity-0"
              } rounded-full cursor-pointer font-bold  text-[13px] w-[20px] items-center text-center`}
            >
              X
            </div>
          </div>
        </div>

        {/* {history page},explore page */}
        <div className="flex flex-row gap-5">
          <div className=" bg-red-600 text-white px-[20px] py-[6px] rounded-xl">
            Explore
          </div>
          <div className=" bg-red-600 text-white px-[20px] py-[6px] rounded-xl">
            History
          </div>
        </div>
      </div>

      {/* displaying of search by category */}
      <div
        className={`${
          display ? " flex flex-col" : " hidden"
        } bg-transparent w-[33vw] ml-[32.5vw] justify-center items-center`}
      >
        {/* name || symbol || number */}
        <div className="flex flex-row w-full ">
          {searchInput.map((data, key) => (
            <div
              key={key}
              onClick={() => setActive(data.name)}
              className={`${
                active === data.name ? "bg-red-600" : " "
              } cursor-pointer transition-colors duration-500 ease-in-out border-[1px] py-[3px] border-red-600 rounded-md text-center text-[14px] font-bold mr-[2px] w-1/3`}
            >
              {data.name}
            </div>
          ))}
        </div>

        {/* div for displaying searching result */}
        <div className="mt-[20px] w-[100%] h-[420px]">
          <div className="w-[100%] h-[90%] overflow-scroll scrollbar-hide">
            {filterData.map((data, key) => (
              <div key={key} className="">
                <SearchElementCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navabr;

"use client";
import React, { useContext, useEffect, useState } from "react";
import SearchElementCard from "./SearchElementCard";

import { myDebounce } from "@/utils/debounce";
import { usePeriodicTable } from "../useContext/UseContext";
import Link from "next/link";

const Navabr = () => {
  const data = require("../utils/data.json");
  const [display, setDisplay] = useState(false);

  const [tableData,element,setElement,number,setNumber] =usePeriodicTable()

  const [filterData, setFilterData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  //   search function
  const functToSetQuery = (value) => {
    setSearchQuery(value);
  };

  const debounceString = myDebounce(functToSetQuery, 1);

  const updateElement=(number)=>{
    setElement(data[number])
  }

  useEffect(() => {
    if (searchQuery !== "") {
      const result = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.number.toString().includes(searchQuery.toString().toLowerCase())
      );
      setFilterData(result);
    } else {
      setFilterData(data);
    }
  }, [searchQuery, data]);

  return (
    <div className="flex flex-col text-zinc-200 font1 z-50 w-full fixed bg-[#1f2e39] shadow-lg shadow-zinc-800 py-[10px]">
      {/* navbar content  */}
      <div className=" flex flex-row justify-between items-center pr-[40px]">
        {/* logo */}
        <Link 
        href='/'
        >
        <div className="h-[60px] w-fit text-[23px] text-center flex justify-center items-center ml-[50px]">
          PERIODIC-2.0
        </div>
        </Link>
        

        {/* searchbar */}
        <div className="flex flex-row items-center border-[0.5px] border-zinc-500 rounded-xl pr-[10px]">
          <div
            onClick={() => setDisplay(true)}
            className="rounded-xl px-[10px] flex flex-row items-center"
          >
            <input
              className="bg-transparent h-[40px] w-[30vw] outline-none placeholder:text-[15px] placeholder:font-light"
              placeholder="Explore More!"
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
        <div className="flex flex-row gap-5 text-zinc-300 text-[15px]">
          <div className="px-[20px] py-[6px] rounded-xl">EXPLORE</div>
          <div className="px-[20px] py-[6px] rounded-xl">HISTORY</div>
        </div>
      </div>

      {/* displaying of search by category */}
      <div
        className={`${
          display ? " flex flex-col" : " hidden"
        } bg-transparent w-[33vw] ml-[31.75vw] justify-center items-center`}
      >
        {/* div for displaying searching result */}
        <div className="mt-[20px] w-[100%] h-[420px]">
          <div className="w-[100%] h-[90%] overflow-scroll scrollbar-hide">
            {filterData.map((data, key) => (
              <Link
              key={key}
              href='/elementpage'>
                 <div 
              onClick={()=>setNumber(prevNumber=>{
                const newNumber=data.number-1;
                updateElement(newNumber);
                setDisplay(false)
                return newNumber
              })}
               className="">
                <SearchElementCard data={data} />
              </div>
              </Link>
           
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navabr;

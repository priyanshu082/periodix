"use client";
import React, { useEffect, useState } from "react";
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
    <div className="flex flex-col text-zinc-200 font1 z-50 w-[100vw] fixed backgroundNav shadow-lg shadow-zinc-900 p-[10px]  md:py-[10px]">
      {/* navbar content  */}

      <div className="flex flex-row justify-between items-center pr-[20px] md:pr-[40px]">
        {/* logo */}
        <Link 
        href='/'
        >
        <div className="h-[60px] w-fit text-[23px] sm:text-[28px] text-center flex justify-center tracking-widest items-center ml-[10px] sm:ml-[50px]">
          PERIODIX
        </div>
        </Link>
        

        {/* searchbar */}
        <div className=" hidden md:flex flex-row items-center border-[1px] border-zinc-500 rounded-xl pr-[10px]">
          <div
            onClick={() => setDisplay(true)}
            className="rounded-xl px-[10px] flex flex-row items-center"
          >
            <input
              className="bg-transparent h-[40px] w-[30vw] outline-none placeholder:text-center placeholder:text-[15px] placeholder:font-light"
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
        <div className="flex flex-row gap-3 md:gap-5 text-zinc-300 text-[15px]">
          <div className="md:px-[20px] py-[6px] rounded-xl">EXPLORE</div>
          <div className="md:px-[20px] py-[6px] rounded-xl">HISTORY</div>
        </div>
      </div>


      <div className=" md:hidden w-[80%] mx-auto flex flex-row justify-between items-center border-[1px] border-zinc-500 rounded-xl pr-[10px]">
          <div
            onClick={() => setDisplay(true)}
            className="rounded-xl px-[10px] flex flex-row w-[100%] items-center"
          >
            <input
              className="bg-transparent h-[40px] w-[100%] md:w-[30vw] outline-none placeholder:text-center placeholder:text-[15px] placeholder:font-light"
              placeholder="Explore More!"
              value={searchQuery}
              onChange={(event) => debounceString(event.target.value)}
            />
          </div>


            <div
            onClick={() => setDisplay(false)}
              className={`${
                display ? "opacity-100" : "opacity-0"
              } rounded-full cursor-pointer md:mr-[0px] mr-[5px] font-bold text-[13px] w-[20px] items-center text-center`}>
              X
            </div>
        
        </div>

      {/* displaying of search by category */}
      <div
        className={`${
          display ? " flex flex-col" : " hidden"
        } bg-transparent w-[80%] mx-auto md:w-[70%] justify-center items-center`}
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

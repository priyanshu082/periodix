"use client";

import { useEffect, useRef, useState } from "react";
import { colorCode, top,ElementData } from "@/utils/utils";
import { motion } from "framer-motion";
import { slideUp, textVariant } from "@/utils/motion";
import PeriodicElement from "@/components/PeriodicElement";

export default function Home() {
  const data = require("../utils/data.json");

  const [activeElement, setActiveElement] = useState(data[0]);
  const [showDiv, setShowDiv] = useState(false);
  const [cursor, setCursor] = useState(true);



  const main = useRef(null);


  useEffect(() => {
    const crsr = document.querySelector(".cursor");
    const ElementCrsr=document.querySelector(".ElementDetailCursor")

    const handleCrsr2=(event)=>{
      ElementCrsr.style.left=event.x+"px"
      ElementCrsr.style.top=event.y+"px"
    }

    const handleCrsr = (event) => {
      const offSet = 20;
    

      let newLeft = event.x + offSet;
      let newTop = event.y + offSet;
    

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
    
      if (newLeft + crsr.clientWidth > windowWidth-300) {
        newLeft=event.x-350
      }
     
    

      if (newTop + crsr.clientHeight > windowHeight-500) {
        newTop = windowHeight -500;
      }
    
      // Set the updated position
  
      crsr.style.left = newLeft+"px";
      crsr.style.top = newTop + "px";
    };
    

     main.current.addEventListener("mousemove", handleCrsr);
    //  main.current.addEventListener("mousemove", handleCrsr2);

  }, []);

  return (
    <motion.div ref={main} className="bg-[#1f2e39] overflow-x-scroll">

      <motion.div
      variants={slideUp(0.1,0.3)}
      animate={!cursor ? "show" : "hidden"}
        className={`
        ${!cursor ? "w-[200px]":"hidden"}
         fixed cursor h-[30px] z-[20] bg-black rounded-full text-center `}>

       <div 
      className='w-[350px] h-fit rounded-lg bg-black pb-[10px]'>
        
        {/* upper section */}
        <div className='flex flex-row justify-around text-white py-[5px] poppins '>
      {/* element detail */}
            <div 
            style={{
                color:colorCode[activeElement.category]
            }}
            className='text-white text-[14px] text-center flex flex-col justify-center items-center w-[50%]'>
                <div className='w-fit'>
                <p>{activeElement.number}</p>
                <div className='leading-[30px] pt-[10px]'>
                <p className='text-[30px] font-bold'>{activeElement.symbol}</p>
                <p className='font-bold '>{activeElement.name}</p>
                </div>
                </div>
            </div>
        </div>


        {/* lower section */}
        <div
        style={{
            color:colorCode[activeElement.category]
        }} 
        className=' w-[100%] px-[10px] poppins '>

        {ElementData.map((data)=>(
    <div key={data.id} className='flex flex-row justify-between border-b-[0.5px] border-zinc-700 mt-[8.5px] pb-[2px] text-[13px]'>
    <span className='text-zinc-400 '>{data.name}</span>
    <span className='pr-[5px]'>{activeElement[data.detail]}</span>
    </div>
        ))} 

    <div className='flex flex-row justify-between border-b-[0.5px] border-zinc-700 mt-[8.5px] pb-[2px] text-[13px]'>
    <span className='text-zinc-400 '>Melting Point</span>
    <div>
    <span className='pr-[5px]'>{Math.round(activeElement.melt)}°K ,</span>
    <span className='pr-[5px]'>{Math.round(activeElement.melt)-273.15}°C ,</span>
    <span className='pr-[5px]'>{Math.round((activeElement.melt - 273.15) * 1.8) + 32}°F</span>
    </div>
    </div>

    <div className='flex flex-row justify-between border-b-[0.5px] border-zinc-700 mt-[8.5px] pb-[2px] text-[13px]'>
    <span className='text-zinc-400 '>Boiling Point</span>
    <div>
    <span className='pr-[5px]'>{Math.round(activeElement.boil)}°K ,</span>
    <span className='pr-[5px]'>{Math.round(activeElement.boil)}°C ,</span>
    <span className='pr-[5px]'>{Math.round((activeElement.boil - 273.15) * 1.8) + 32}°F</span>
    </div>
    </div>

        </div>

      </div>


          </motion.div>








    {/* <div className={`${cursor ? "hidden" :"flex"} absolute ElementDetailCursor bg-black w-[100px] h-[100px] `}>
          {activeElement.name}
      </div>  */}




      <motion.div className="h-[100vh] mt-[120px] w-[1348px] mx-auto">
        <motion.div className="periodictable ">

          <motion.div
           variants={textVariant()}
           animate={!cursor ? "show" : "hidden"}
            className={`relative w-[680px] h-[190px] z-[10] ml-[100px] font1 flex flex-row justify-around `}
          >
            <motion.div
            
              style={{
                color: "#dadcca",
              }}
              className="flex flex-col pt-[60px] "
            >
              <div className="text-center text-[13px]">
                {activeElement.number}
              </div>
              <div className="text-[40px] text-center font-bold">
                {activeElement.symbol}
              </div>
              <div className="text-center text-[12px]">
                {activeElement.atomic_mass}
              </div>
            </motion.div>

            <motion.div
             
              style={{
                color: "#dadcca",
              }}
              className=" w-[75%] text-[15px] pt-[20px] overflow-scroll scrollbar-hide"
            >
              <p className="text-[30px] mb-[10px] font-bold text-">
                {activeElement.name}
              </p>
              {activeElement.summary}
            </motion.div>
          </motion.div>

          {data.map((data) => (
            <PeriodicElement
              key={data.number}
              data={data}
              setActiveElement={setActiveElement}
              setCursor={setCursor}
              activeElement={activeElement}
            />

          ))}
        </motion.div>

      </motion.div>


    </motion.div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideUp, textVariant } from "@/utils/motion";
import PeriodicElement from "@/components/PeriodicElement";
import CursorDiv from "@/components/CursorDiv";

export default function Home() {
  const data = require("../utils/data.json");

  const [activeElement, setActiveElement] = useState(data[0]);
  const [cursor, setCursor] = useState(true);

  const main = useRef(null);


//  for handlling the cursor div
  useEffect(() => {
    const crsr = document.querySelector(".cursor");

    const handleCrsr = (event) => {
      const offSet = 20;
    

      let newLeft = event.x + offSet;
      let newTop = event.y + offSet;
    

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
    
      if (newLeft + crsr.clientWidth > windowWidth-200) {
        newLeft=event.x-350
      }
     
    

      if (newTop + crsr.clientHeight > windowHeight-500) {
        newTop = windowHeight -500;
      }
    
      
  
      crsr.style.left = newLeft+"px";
      crsr.style.top = newTop + "px";
    };
    

     main.current.addEventListener("mousemove", handleCrsr);
   

  }, []);

  return (
    <motion.div ref={main} className="background overflow-x-scroll scrollbar-hide">


{/* cursor div for elment detail */}
      <motion.div
      variants={slideUp(0.1,0.5)}
      animate={!cursor ? "show" : "hidden"}
        className={`
        ${!cursor ? "w-[200px]":"hidden"}
         fixed cursor h-[30px] z-[20] bg-black rounded-full text-center `}>

          <CursorDiv
          activeElement={activeElement}
          cursor={cursor}
          />

          </motion.div>



      <motion.div className="h-[100vh] mt-[150px] md:mt-[120px] w-[1348px] mx-auto">
        <motion.div className="periodictable ">

          <motion.div
           variants={textVariant()}
           animate={!cursor ? "show" : "hidden"}
            className={`relative w-[680px] h-[190px] z-[10] ml-[100px] poppins flex flex-row justify-around `}
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

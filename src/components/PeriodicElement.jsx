import React from 'react'
import { colorCode,top } from '@/utils/utils';
import Link from 'next/link';
import { usePeriodicTable } from "../useContext/UseContext";


const PeriodicElement = ({data,setActiveElement,setCursor,activeElement}) => {

const data2=require('../utils/data.json')
  const [tableData,element,setElement,number,setNumber] =usePeriodicTable()

  const updateElement=(number)=>{
    setElement(data2[number])
  }
  

    function t(number) {
        return top.includes(number);
      }

  return (
        <div
          style={{
            gridRow: data.ypos,
            gridColumn: data.xpos,
            color:
              activeElement.number === data.number
                ? "black"
                : colorCode[data.category],
            backgroundColor:
              activeElement.number === data.number
                ? colorCode[data.category]
                : "transparent",
            transition: "background-color 0.7s ease-in-out z-[1000]",
          }}

          onMouseEnter={() => {
            setActiveElement(data), setCursor(false);
          }}

          onMouseLeave={() => {
            setCursor(true),setActiveElement([]);
          }}

          onClick={()=>setNumber(prevNumber=>{
            const newNumber=data.number-1;
            updateElement(newNumber);
            return newNumber
          })}

          className={`
        ${t(data.number)
            ? "border-b-[0.5px] cursor-pointer  border-l-[0.5px] border-r-[0.5px]"
            : "border-[0.5px]"
        } border-zinc-600 poppins `}

        
        >
       <Link href='/elementpage'>
          <div className={` leading-[16px]`}>
            <span className="pl-[2px] text-[10px]">{data.number}</span>
            <div className="flex flex-col text-center justify-center items-center pt-[5px]">
              <span className="text-[22px]">{data.symbol}</span>
              <span className="text-[10px] pt-[5px]">{data.name}</span>
            </div>
          </div>
       </Link>
     
        </div>
   

  )
}

export default PeriodicElement
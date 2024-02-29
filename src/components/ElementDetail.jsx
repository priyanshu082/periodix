'use client'
import  {usePeriodicTable}  from '../useContext/UseContext'
import React, { useState } from 'react'
import arrow from '../../public/next.svg'
import Image from 'next/image'
import { ElementData, colorCode } from '@/utils/utils'

const ElementDetail = () => {
    
   
    const [tableData,element,setElement,number,setNumber]=usePeriodicTable()

    
    const updateElement=(number)=>{
        setElement(tableData[number])
    }

    console.log(element)

    return (

     <div className='flex flex-row w-full justify-around'>
    {/* left section */}
      <div 
      className='w-[30%] h-[650px] rounded-lg'>
        
        {/* upper section */}
        <div className='flex flex-row justify-around text-white py-[10px] poppins '>

    {number!==0 ? (  <div 
        className={` w-[50px] rotate-180 flex justify-center items-center cursor-pointer`}
        onClick={() => setNumber(prevNumber => {
            const newNumber = prevNumber - 1;
            updateElement(newNumber);
            return newNumber;
        })}
        >
           <Image src={arrow} />
        </div>)
        :
        (<div 
            className={`opacity-0 w-[50px] rotate-180 flex justify-center items-center`}
            >
               <Image src={arrow} />
            </div>)}
      

      {/* element detail */}
            <div 
            style={{
                color:colorCode[element.category]
            }}
            className='text-white text-[14px] text-center flex flex-col justify-center items-center w-[50%]'>
                <div className='w-fit px-[25px] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                <p>{element.number}</p>
                <div className='leading-[30px] pt-[15px]'>
                <p className='text-[50px] font-bold'>{element.symbol}</p>
                <p className='font-bold '>{element.name}</p>
                </div>
                </div>
               
            </div>

        {number!==117 ? (  <div 
        className={` w-[50px] flex justify-center items-center cursor-pointer`}
        onClick={() => setNumber(prevNumber => {
            const newNumber = prevNumber + 1;
            updateElement(newNumber);
            return newNumber;
        })}
        >
           <Image src={arrow}/>
        </div>):( <div 
        className={`opacity-0 w-[50px] flex justify-center items-center`}
       
        >
           <Image src={arrow}/>
        </div>)}
          
        </div>

        {/* lower section */}
        <div
        style={{
            color:colorCode[element.category]
        }} 
        className=' w-[100%] px-[20px] poppins pt-[15px] '>

        {ElementData.map((data)=>(
    <div key={data.id} className='flex flex-row justify-between border-b-[0.5px] border-zinc-700 mt-[18.5px] pb-[2px] text-[13px]'>
    <span className='text-zinc-400 '>{data.name}</span>
    <span className='pr-[5px]'>{element[data.detail]}</span>
    </div>
        ))} 

    <div className='flex flex-row justify-between border-b-[0.5px] border-zinc-700 mt-[18.5px] pb-[2px] text-[13px]'>
    <span className='text-zinc-400 '>Melting Point</span>
    <div>
    <span className='pr-[5px]'>{Math.round(element.melt)}°K ,</span>
    <span className='pr-[5px]'>{Math.round(element.melt)-273.15}°C ,</span>
    <span className='pr-[5px]'>{Math.round((element.melt - 273.15) * 1.8) + 32}°F</span>
    </div>
    </div>

    <div className='flex flex-row justify-between border-b-[0.5px] border-zinc-700 mt-[18.5px] pb-[2px] text-[13px]'>
    <span className='text-zinc-400 '>Boiling Point</span>
    <div>
    <span className='pr-[5px]'>{Math.round(element.boil)}°K ,</span>
    <span className='pr-[5px]'>{Math.round(element.boil)}°C ,</span>
    <span className='pr-[5px]'>{Math.round((element.boil - 273.15) * 1.8) + 32}°F</span>
    </div>
    </div>

        </div>

      </div>

      {/* rightsection */}

      <div 
      style={{
        color:colorCode[element.category]
      }}
      
      className='w-[65%] h-[650px] bg-[#151515] rounded-lg text-[40px] poppins flex flex-col justify-center items-center'>
        Futher details will be added here
      </div>
        </div>
    )
}

export default ElementDetail
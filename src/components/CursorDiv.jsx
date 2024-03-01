import React from 'react'
import { colorCode,ElementData } from '@/utils/utils'

const CursorDiv = ({activeElement,cursor}) => {


  return (
    <div 
      className='w-[280px] md:w-[350px] h-fit rounded-lg backgroundCursorDiv pb-[10px]'>
        
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
    <span className='text-zinc-400 overflow-clip'>{data.name}</span>
    <span className='pr-[5px]'>{activeElement[data.detail]}</span>
    </div>
        ))} 


    <div className='flex flex-row justify-between border-b-[0.5px] border-zinc-700 mt-[8.5px] pb-[2px] text-[13px]'>
    <span className='text-zinc-400 '>Boiling Point</span>
    <div>
    <span className='pr-[5px]'>{Math.round(activeElement.boil)}°K ,</span>
    <span className='pr-[5px]'>{Math.round(activeElement.boil-273.15)}°C ,</span>
    <span className='pr-[5px]'>{Math.round((activeElement.boil - 273.15) * 1.8) + 32}°F</span>
    </div>
    </div>

        </div>

      </div>
  )
}

export default CursorDiv
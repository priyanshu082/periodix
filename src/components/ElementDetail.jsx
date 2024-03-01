'use client'
import  {usePeriodicTable}  from '../useContext/UseContext'
import React from 'react'
import arrow from '../../public/next.svg'
import Image from 'next/image'
import { ElementData, colorCode } from '@/utils/utils'


const ElementDetail = () => {
    
   
    const [tableData,element,setElement,number,setNumber]=usePeriodicTable()

    
    const updateElement=(number)=>{
        setElement(tableData[number])
    }


    return (

     <div className='flex flex-col md:flex-row w-full justify-around poppins2'>
    {/* left section */}
      <div 
      className=' md:w-[30%] h-[650px] rounded-lg'>
        
        {/* upper section */}
        <div className='flex flex-row justify-around text-white py-[10px]  '>

    {number!==0 ? ( <div 
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
                <div className='leading-[35px] pt-[15px]'>
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
        className={`opacity-0 w-[50px] flex justify-center items-center`}>
           <Image src={arrow}/>
        </div>)}
          
        </div>

        {/* lower section */}
        <div
        style={{
            color:colorCode[element.category]
        }} 
        className=' w-[100%] px-[20px]  pt-[15px] '>

        {ElementData.map((data)=>(
    <div key={data.id} className='flex flex-row justify-between border-b-[0.5px] border-zinc-700 mt-[22.5px] pb-[2px] text-[13px]'>
    <span className='text-zinc-400 '>{data.name}</span>
    <span className='pr-[5px]'>{element[data.detail]}</span>
    </div>
        ))} 

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
      
      className='md:w-[65%] h-[630px] backgroundCursorDiv overflow-scroll rounded-lg scrollbar-hide  flex flex-col px-[20px]'>

        <div className='flex flex-row justify-around w-[100%] mx-auto mt-[20px] border-b-[1px] border-zinc-700 pb-[20px]'>

        <div className='flex flex-col text-center '>
            <p >Electron</p>
            <p className='text-zinc-400'>{element.number}</p>
        </div>
        <div className='flex flex-col text-center'>
            <p >Proton</p>
            <p className='text-zinc-400'>{element.number}</p>
        </div>
        <div className='flex flex-col text-center'>
            <p >Neutron</p>
            <p className='text-zinc-400'>{Math.ceil(element.atomic_mass-element.number)}</p>
        </div>
        
        </div>

        <div className='mt-[20px] mx-auto border-b-[1px] border-zinc-700 pb-[20px]'>
            <p className=''>Summary:</p>
            <p className='text-zinc-300 tracking-tighter mt-[7px]'>{element.summary}</p>
        </div>


        <div className='mt-[20px] mx-auto border-b-[1px] w-[100%] border-zinc-700 pb-[20px]'>
            <div className=''>Spectrals Line:</div>
            <div className='bg-zinc-600 p-[5px] w-[90%] mx-auto mt-[15px] h-fit text-center'>
            <img src={element.spectral_img} alt='Image Not Available' className='w-[100%] text-white' />
            </div>
        </div>

        <div className='mt-[20px] mx-auto border-b-[1px] w-[100%] border-zinc-700 pb-[20px]'>
            <p className=''>Electronic Configuration Semantic:</p>
            <p className='text-zinc-300 tracking-tighter mt-[7px]'>{element.electron_configuration_semantic}</p>
        </div>

        <div className='mt-[20px] mx-auto border-b-[1px] w-[100%] border-zinc-700 pb-[20px]'>
            <p className=''>Ionization Energy:</p>
            <p className='text-zinc-300 tracking-tighter mt-[7px] flex flex-row'>{element.ionization_energies.map((energy,index)=>(
                <div key={index}>
                    &nbsp;{energy},
                </div>
            ))}</p>
        </div>
        <div className='mt-[20px] mx-auto w-[100%]'>
            <div className=''>Melting Point:</div>
            <div className='text-zinc-300 mt-[7px]'>
    <span className='pr-[5px]'>{Math.round(element.melt)}°K ,</span>
    <span className='pr-[5px]'>{Math.round(element.melt)-273.15}°C ,</span>
    <span className='pr-[5px]'>{Math.round((element.melt - 273.15) * 1.8) + 32}°F</span>
    </div>        
    </div>


      </div>

        </div>
    )
}

export default ElementDetail
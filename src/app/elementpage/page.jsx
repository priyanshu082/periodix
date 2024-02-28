'use client'
import { myDebounce } from '@/utils/debounce'
import  {usePeriodicTable}  from '../../useContext/UseContext'
import React, { useState } from 'react'

const Page = () => {
    
   
    const [tableData,element,setElement,number,setNumber]=usePeriodicTable()

    
    const updateElement=(number)=>{
        setElement(tableData[number])
    }
    
   
    
    console.log(number)
     console.log(element)
     console.log(tableData[number])

    return (
      <div className='pt-[200px]'>
        <div 
        className={`${number===0 ? "hidden" : "flex"} bg-yellow-300`}
        onClick={() => setNumber(prevNumber => {
            const newNumber = prevNumber - 1;
            updateElement(newNumber);
            return newNumber;
        })}
        >
            left
        </div>
        <div 
        className={`${number===117 ? "hidden" : "flex"} bg-green-300`}
        onClick={() => setNumber(prevNumber => {
            const newNumber = prevNumber + 1;
            updateElement(newNumber);
            return newNumber;
        })}        >
            right
        </div>
        {element.name}
            {number}
      </div>
    )
}

export default Page
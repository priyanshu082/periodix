'use client'

import React, { useEffect,useState } from 'react'

const Page = () => {
   
    const data=require('../../utils/data.json')
    const [Tabledata, setTableData] = useState(data)
    const [searchQuery, setSearchQuery] = useState('')

   

    const handleSearch=(event)=>{
        setSearchQuery(event.target.value)
        const result=data.filter(item=>item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setTableData(result)
    }

    const Mydebounce=(fn,d)=>{
      let timer

      const debounce =(...args)=>{

        if(timer) clearInterval(timer)
          timer= setTimeout(() =>fn(...args) , d);
      };

      return debounce
    }

    const myfunct=(...arg)=>{
      console.log(...arg)
    }

    const debounceFunction=Mydebounce(myfunct,500)
    debounceFunction(100,100,100,100)

  return (
    <div className='pt-[200px] pl-[200px]'>
        <input
        className='bg-black text-white'
        value={searchQuery}
        onChange={handleSearch}
        />
      

{/*   {Tabledata.map((searcData,key)=>(
           <div key={key} className=''>
            {searcData.name}
           </div> 
        ))} */}

        <div onClick={()=>debounceFunction(100,100,103)}>
        click me
        </div>
       
    </div>
  )
}

export default Page
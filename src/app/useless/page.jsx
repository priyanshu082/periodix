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

    useEffect(()=>{

    })

  return (
    <div className='pt-[200px] pl-[200px]'>
        <input
        className='bg-black text-white'
        value={searchQuery}
        onChange={handleSearch}
        />
        {/* {data.map((data)=>(
            <div>{data.name}</div>
        ))} */}


        {Tabledata.map((searcData,key)=>(
           <div key={key} className=''>
            {searcData.name}
           </div> 
         
        ))}
       
    </div>
  )
}

export default Page
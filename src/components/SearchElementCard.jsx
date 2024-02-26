import React from 'react'
import Element from './Element'

const SearchElementCard = ({data}) => {
   
  return (
    <div className='w-[100%] bg-transparent flex flex-row items-center border-[2px] border-zinc-600 mt-[14px] rounded-md hover:scale-[98%] transition-all duration-300 ease-in-out '>
          <div className='scale-110'>
                <Element data={data}/>
            </div>
            <div className='ml-[10px p-[5px]'>
                {data.name}
            </div>
    </div>
  )
}

export default SearchElementCard
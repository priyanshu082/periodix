import React from 'react'
import Element from './Element'

const SearchElementCard = ({data}) => {
   
  return (
    <div className='w-[100%] bg-transparent flex flex-row items-center border-[1px] p-[5px] mt-[5px] rounded-md hover:scale-[98%] transition-all duration-300 ease-in-out'>
          <div className=''>
                <Element data={data}/>
            </div>
            <div className='ml-[10px]'>
                {data.name}
            </div>
    </div>
  )
}

export default SearchElementCard
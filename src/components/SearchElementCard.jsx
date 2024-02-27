import React from 'react'
import { colorCode } from '@/utils/utils'


const SearchElementCard = ({data}) => {
   

  const parts=data.category
  const color=colorCode[parts]
  return (
    
    <div className='w-[100%] bg-transparent flex flex-row items-center border-[2px] border-zinc-600 mt-[14px] rounded-md hover:scale-[98%] transition-all duration-300 ease-in-out '>
          <div className=''>
          <div style={{
               color:colorCode[data.category],
            }} key={data.number}>
              <div
                className={`element leading-[16px] pt-[3px]`}
              >
                <span className="pl-[3px]">{data.number}</span>
                <div className="flex flex-col text-center justify-center items-center pt-[7px]">
                  <span className="text-[24px]">{data.symbol}</span>
                  <span className="text-[11px] pt-[5px]">{data.name}</span>
                </div>
              </div>
            </div>
            </div>
            <div className='ml-[10px p-[5px]'>
                {data.name}
            </div>
    </div>
  )
}

export default SearchElementCard
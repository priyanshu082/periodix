import React from 'react'
import { colorCode } from '@/utils/utils'


const SearchElementCard = ({data}) => {
   

  const parts=data.category
  const color=colorCode[parts]
  return (
    
    <div className='w-[100%] p-[10px] bg-transparent flex flex-row items-center border-[1px] border-zinc-600 mt-[14px] rounded-md hover:scale-[98%] transition-all duration-300 ease-in-out '>
          
          <div style={{
               color:colorCode[data.category],
            }} key={data.number}>
              <div
                className={` leading-[16px] w-[65px] h-[65px] `}
              >
                <span className="text-[11px]">{data.number}</span>
                <div className="flex flex-col text-center justify-center items-center">
                  <span className="text-[24px]">{data.symbol}</span>
                  <span className="text-[11px] pt-[5px]">{data.name}</span>
                </div>
              </div>
            </div>
       
            <div 
            style={{
              color:colorCode[data.category]
            }}
            className='ml-[10px] p-[5px] w-[35%] '>
                <p className='tracking-tighter text-[14px] font-bold'>{data.number}.{data.name}</p>
                <p className='text-[11px] text-zinc-200'>Discovered by:{data.discovered_by}</p>
            </div>

            <div 
            style={{
              color:colorCode[data.category]
            }}
            className='text-[12px]'>
              <p>Period:<span className='text-zinc-200'>{data.period}</span></p>
              <p className=''>Distribution:<span className='text-zinc-200'> {data.electron_configuration_semantic}</span></p>
              <p className=''>Atomic Mass:<span className='text-zinc-200'> {data.atomic_mass}</span></p>
            </div>
    </div>
  )
}

export default SearchElementCard
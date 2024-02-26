import React from 'react'


const Element = ({data}) => {

    const parts=data.groupBlock.split(' ')
    const name=parts[0]
  return (
    <div className=' cursor-pointer transition-all duration-300 ease-in-out'>
    <div className={`${name} element leading-[16px] pt-[3px]`}>

        <span className='pl-[3px]'>{data.atomicNumber}</span>
        <div className='flex flex-col text-center justify-center items-center pt-[7px]'>
        <span className='text-[24px]'>{data.symbol}</span>
        <span className='text-[11px] pt-[5px]'>{data.name}</span>
        </div>

    </div>
    </div>
  )
}

export default Element
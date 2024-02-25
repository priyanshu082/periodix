import React from 'react'


const Element = ({data}) => {

    const parts=data.groupBlock.split(' ')
    const name=parts[0]
  return (
    <div className={`${name} element`}>
        <span className='text-[12px] absolute'>{data.atomicNumber}</span>
        <div className='flex flex-col text-center pt-[10px]'>
        <span className='text-[24px]'>{data.symbol}</span>
        <span className='text-[11px]'>{data.name}</span>
        </div>
    </div>
  )
}

export default Element
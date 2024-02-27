'use client'
import  {usePeriodicTable}  from '../../useContext/UseContext'
import React, { useContext } from 'react'

const Page = () => {
    
    const element2=require('../../utils/data.json')
    const [element,setElement]=usePeriodicTable()

    return (
      <div className='pt-[200px]'>
        {element.name}
      </div>
    )
}

export default Page
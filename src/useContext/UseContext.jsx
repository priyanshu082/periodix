'use client'
import React, { createContext, useContext, useState } from 'react'

export const TableContext=createContext();

export const TableProvider = ({children}) => {

    const data=require('../utils/data.json')

    const [element, setElement]=useState(data[0]);

  return (
    <TableContext.Provider value={[element,setElement]}>
        {children}
    </TableContext.Provider>
  )
}

export function usePeriodicTable(){
    return useContext(TableContext)
}

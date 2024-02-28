'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'


export const TableContext=createContext();

export const TableProvider = ({children}) => {

    const data=require('../utils/data.json')

    const [tableData,setTableData]=useState(data)
    
    const [number,setNumber]=useState(0);
    const [element, setElement]=useState(tableData[number]);
    
  return (
    <TableContext.Provider value={[tableData,element,setElement,number,setNumber]}>
        {children}
    </TableContext.Provider>
  )
}

export function usePeriodicTable(){
    return useContext(TableContext)
}

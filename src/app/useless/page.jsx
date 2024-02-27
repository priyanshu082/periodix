// 'use client'

// import React, { useEffect,useState } from 'react'

// const Page = () => {
   
//     const data=require('../../utils/data.json')
//     const [Tabledata, setTableData] = useState(data)
//     const [searchQuery, setSearchQuery] = useState('')

   

//     const handleSearch=(event)=>{
//         setSearchQuery(event.target.value)
//         const result=data.filter(item=>item.name.toLowerCase().includes(searchQuery.toLowerCase()));
//         setTableData(result)
//     }

//     const Mydebounce=(fn,d)=>{
//       let timer

//       const debounce =(...args)=>{

//         if(timer) clearInterval(timer)
//           timer= setTimeout(() =>fn(...args) , d);
//       };

//       return debounce
//     }

//     const myfunct=(...arg)=>{
//       console.log(...arg)
//     }

//     const debounceFunction=Mydebounce(myfunct,500)
//     debounceFunction(100,100,100,100)

//   return (
//     <div className='pt-[200px] pl-[200px]'>
//         <input
//         className='bg-black text-white'
//         value={searchQuery}
//         onChange={handleSearch}
//         />
      

//         <div onClick={()=>debounceFunction(100,100,103)}>
//         click me
//         </div>
       
//     </div>
//   )
// }

// export default Page

'use client'

import React from 'react'

const Page = () => {

  const elements=require('../../utils/data.json')
  const elements2=require('../../utils/data2.json')

  console.log(elements.length)
  console.log(elements2.length)

  return (
    <div className="periodictable bg-black pt-[200px]">
       {elements.map((element, index) => (
        <div key={index} className={`element ${element.group}`}>
          <div className="atomic-number">{element.atomicNumber}</div>
          <div className="element-symbol">{element.symbol}</div>
          <div className="element-name">{element.name}</div>
        </div>
      ))} 


    </div>
  )
}

export default Page
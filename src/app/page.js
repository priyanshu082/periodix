"use client";

import { useEffect, useState } from "react";
import { colorCode, top} from "@/utils/utils";

export default function Home() {
  // const [data,setData]=useState(null)
  // const [error,setError]=useState(null)
  // const [loading,setLoading]=useState(true)

  //   useEffect(()=>{
  //     const fetchData= async () => {
  //       try{
  //         const response = await fetch('https://periodictable.p.rapidapi.com/',{
  //          method:"GET" ,
  //          mode:"no-cors",
  //          headers: {
  //           'X-RapidAPI-Key': '8f398bc350msh575b261e9215a8dp126ad8jsna90a9109e66a',
  //           'X-RapidAPI-Host': 'periodictable.p.rapidapi.com'
  //         }
  //       })
  //         if(!response.ok){
  //           throw new Error('Network is not working')
  //         }

  //          const result =await response.json()
  //          setData(result)
  //          console.log(result)

  //       }
  //       catch (error){
  //         setError(error)
  //       } finally {
  //         setLoading(false)
  //       }
  //     }

  //     fetchData()
  //   },[])

  //  if(loading){
  //   return <div>Loading...</div>
  //  }

  //  if(error){
  //    return <p>Error:{error.message}</p>
  //  }

  const data = require("../utils/data.json");

  const [activeElement, setActiveElement] = useState(data[0])


  function t(number){
    return top.includes(number)
  }

  return (
    <div className="bg-[#1f2e39] overflow-x-scroll">
      <div className="h-[100vh] mt-[120px] w-[1320px] mx-auto">

        <div className="periodictable ">

        <div className="relative w-[680px] h-[190px] ml-[100px] font1 flex flex-row justify-around">
        <div 
        style={{
          color:"#dadcca",
        }}
        className="flex flex-col pt-[60px]">
          <div className="text-center text-[13px]">
            {activeElement.number}
          </div>
          <div className="text-[40px] text-center font-bold">
            {activeElement.symbol}
          </div>
          <div className="text-center text-[12px]">
            {activeElement.atomic_mass}
          </div>
        </div>

        <div 
        style={{
          color:"#dadcca"
        }}
        className=" w-[75%] text-[15px] pt-[20px] overflow-scroll scrollbar-hide">
          <p className="text-[30px] mb-[10px] font-bold text-">{activeElement.name}</p>
        {activeElement.summary}
        </div>
      </div>



          {data.map((data) => (
             <div style={{
              gridRow: data.ypos,
              gridColumn: data.xpos,
              color: activeElement.number===data.number ? "black" : colorCode[data.category],
              backgroundColor: activeElement.number===data.number ? colorCode[data.category] : "transparent",
              transition: "background-color 0.2s ease-in-out",
            }} 
            className={`
            ${t(data.number) ? "border-b-[0.5px] cursor-pointer  border-l-[0.5px] border-r-[0.5px]" : "border-[0.5px]" } border-zinc-600 `} 
              onClick={()=>setActiveElement(data)}
            key={data.number}>
              <div
                className={`element leading-[16px]`}>
                <span className="pl-[2px] text-[10px]">{data.number}</span>
                <div className="flex flex-col text-center justify-center items-center pt-[5px]">
                  <span className="text-[22px]">{data.symbol}</span>
                  <span className="text-[10px] pt-[5px]">{data.name}</span>
                </div>
              </div>
            </div>
        
          ))}
        </div>
      </div>

      


    </div>
  );
}

{
  /* <div>s
          
     
            <div className="flex flex-row justify-between  border-[1px] border-zinc-500  ">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${element.period === 1 ? "flex" : "hidden"}`}>
                  <div className="">
                    <Element data={element} />
                  </div>
                </div>
              ))}
            </div>

      
          <div className="flex flex-row justify-between w-full border-[1px]">
            <div className="flex flex-row">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${
                    element.period === 2 &&
                    (element.atomicNumber === 4 ||
                      element.atomicNumber === 5)
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <Element data={element} />
                </div>
              ))}
            </div>


            <div className="flex flex-row ">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${
                    element.period === "2" &&
                    !(
                      element.atomicNumber === "4" ||
                      element.atomicNumber === "3"
                    )
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <Element data={element} />
                </div>
              ))}
            </div>
          </div>

    
          <div className="flex flex-row justify-between w-full border-[1px]">
            <div className="flex flex-row">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${
                    element.period === "3" &&
                    (element.atomicNumber === "11" ||
                      element.atomicNumber === "12")
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <Element data={element} />
                </div>
              ))}
            </div>

            <div className="flex flex-row">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${
                    element.period === "3" &&
                    !(
                      element.atomicNumber === "11" ||
                      element.atomicNumber === "12"
                    )
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <Element data={element} />
                </div>
              ))}
            </div>
          </div>

          {data && (
            <div className="flex flex-grow w-1/18 flex-row justify-between border-[1px]">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${element.period === "4" ? "flex" : "hidden"}`}
                >
                  <Element data={element} />
                </div>
              ))}
            </div>
          )}

          {data && (
            <div className="flex flex-row justify-between border-[1px]">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${element.period === "5" ? "flex" : "hidden"}`}
                >
                  <Element data={element} />
                </div>
              ))}
            </div>
          )}

          {data && (
            <div className="flex flex-row justify-between border-[1px]">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${
                    element.period === "6" &&
                    element.atomicNumber >= 55 &&
                    element.atomicNumber <= 86 &&
                    !(element.atomicNumber >= 57 && element.atomicNumber < 71)
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  {element.atomicNumber === "71" ? (
                    <div className="element ">
                      <div className="text-center pt-[16px] ">57-71</div>
                      <div className="text-[11px] text-center">Lanthanides</div>
                    </div>
                  ) : (
                    <Element data={element} />
                  )}
                </div>
              ))}
            </div>
          )}

   
          {data && (
            <div className="flex flex-row justify-between border-[1px]">
              {data.map((element, key) => (
                <div
                  key={key}
                  className={`${
                    element.atomicNumber >= 87 &&
                    element.atomicNumber <= 118 &&
                    !(element.atomicNumber >= 89 && element.atomicNumber < 103)
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  {element.atomicNumber === "103" ? (
                    <div className="element ">
                      <div className="text-center pt-[16px] ">89-103</div>
                      <div className="text-[12px] text-center">Actinides</div>
                    </div>
                  ) : (
                    <Element data={element} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>  */
}

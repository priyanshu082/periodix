"use client";

import { useEffect, useState } from "react";
import Element from "@/components/Element";

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

  const data = require("./../../data.json");

  return (
    <div className="bg-black h-[100vh] pt-[100px] absolute">
      {/* period 1 */}
      {data && (
        <div className="flex flex-row justify-between">
          {data.map((element, key) => (
            <div
              key={key}
              className={`${element.period === "1" ? "flex" : "hidden"}`}
            >
              <div className="">
                <Element data={element} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* period 2 */}
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row">
          {data.map((element, key) => (
            <div
              key={key}
              className={`${
                element.period === "2" &&
                (element.atomicNumber === "4" || element.atomicNumber === "3")
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
                element.period === "2" &&
                !(element.atomicNumber === "4" || element.atomicNumber === "3")
                  ? "flex"
                  : "hidden"
              }`}
            >
              <Element data={element} />
            </div>
          ))}
        </div>
      </div>

      {/* period 3 */}
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row">
          {data.map((element, key) => (
            <div
              key={key}
              className={`${
                element.period === "3" &&
                (element.atomicNumber === "11" || element.atomicNumber === "12")
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
                  element.atomicNumber === "11" || element.atomicNumber === "12"
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

      {/* period 4 */}
      {data && (
        <div className="flex flex-row justify-between">
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

      {/* period 5 */}
      {data && (
        <div className="flex flex-row justify-between">
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

      {/* period 6 */}
      {data && (
        <div className="flex flex-row justify-between">
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
              <Element data={element} />
            </div>
          ))}
        </div>
      )}

      {/* period 7 */}
      {data && (
        <div className="flex flex-row justify-between">
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
              <Element data={element} />
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}

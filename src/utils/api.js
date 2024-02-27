 import { useEffect, useState } from "react";

 const [data,setData]=useState(null)
 const [loading,setLoading]=useState(false)
 const [error,setError]=useState(null)

 useEffect(()=>{

     const fetchData= async()=>{
         try{
             const response =await fetch('https://periodictable.p.rapidapi.com/',{
                 method:"GET",
                 headers: {
                     'X-RapidAPI-Key': '8f398bc350msh575b261e9215a8dp126ad8jsna90a9109e66a',
                     'X-RapidAPI-Host': 'periodictable.p.rapidapi.com'
                   }
             })

             if(!response.ok){
                 throw new Error("Unabale to load data")
             }

             const result=response.json()
             setData(result)
             console.log(data)

            
         } catch (error){
             setError(error)
         } finally {
             setLoading(true)
         }
     }


     fetchData()
 },[])
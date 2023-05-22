import React, { useEffect } from 'react'
import getData from '../Api/getData'
export default function Canvas() {

    useEffect(()=>{
        const data = getData();
        console.log(data);
    },[])

  return (
    <div>Canvas</div>
  )
}

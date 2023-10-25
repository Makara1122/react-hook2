import React from 'react'
import { useState } from 'react'

export default function Hook() {
    const [name, setName] = useState("Makara");
  return (
    <>
    <h1>hello {name} how are you today </h1>
    <button
    type="button"
    onClick={() =>{
        setName("La La");
    }}
    >change name</button>
    </>

    
  )
}

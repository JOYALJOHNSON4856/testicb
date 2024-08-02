'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
   const counts= useSelector((state)=>state.counter.value)
  return (
    <div style={{width:'100%',backgroundColor:'black',height:'60px',color:'white'}}>
        <p> Header count{counts}</p>
        </div>
  )
}

export default Header
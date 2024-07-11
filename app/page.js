'use client'

import Link from 'next/link';
import React, { useState } from 'react'

const HomePage = () => {

  const [roomId,setRoomId]=useState('')




  return (
    <div className="h-screen flex items-center flex-col justify-center bg-custom-image bg-cover bg-center bg-no-repeat">
      <h1 className="text-[25px] mb-[1rem] md:text-[30px] lg:text-[40px] text-center font-bold leading-[4rem] text-cyan-600">
        ChatterBox
      </h1>
      <input 
      type="text" 
      placeholder="Enter Room ID" 
      className="px-8 py-3 w-[50%] rounded-lg bg-gray-400" 
      onChange={(e) => setRoomId(e.target.value)}
      value={roomId}
      />
      <Link href={`room/${roomId}`} >
      <button className="px-8 py-2 rounded-lg bg-cyan-800 text-white mt-[1rem]">
        Join
        </button>
      </Link>
      </div>
  )
}

export default HomePage;
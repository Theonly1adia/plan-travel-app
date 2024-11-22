import React from 'react'
import  {Button}  from "@/components/ui/Button";
import Link from "next/link";


function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1
        className='font-extrabold text-[50px] text-center mt-16'
        >
            <span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span>Personalized Itenraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curaor, creating custom itinerairies tailored to your interests and budget</p>

        <Link href= '/create-trip'>
            <Button>Get Started!</Button>
        </Link>
    </div>
  )
}

export default Hero
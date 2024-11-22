import React from 'react'
import { Button } from "@/components/ui/Button";

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src='/logo.jpg' width={75}/>
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header
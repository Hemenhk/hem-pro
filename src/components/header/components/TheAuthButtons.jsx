import { Button } from '../..//ui/button'
import React from 'react'

export default function TheAuthButtons() {
  return (
    <div className='flex gap-3'>
        <Button variant="ghost" className="text-[#001480]">Sign in</Button>
        <Button>Get Started</Button>
    </div>
  )
}

"use client"

import { useEffect } from 'react'
import { Bot } from 'lucide-react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full h-[calc(100svh-80px)] absolute z-10 bg-white'>
      <div className='w-[1400px] h-full mx-auto flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-col items-center'>
          <Bot className='size-16' />
          <span className='flex text-2xl font-mono'>Something went wrong!</span>
        </div>
        <button
        className='text-xl border rounded-full px-4 py-1 hover:bg-black hover:text-white transition-colors duration-500'
          onClick={
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  )
}
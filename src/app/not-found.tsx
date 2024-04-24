import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'OLB | Page Not Found'
}
 
export default function NotFound() {
  return (
    <div className='404 flex flex-col gap-5 h-[60svh] w-full items-center justify-center'>
      <span className='text-xl font-semibold'>Page Not Found</span>
      <p className='text-sm'>Could not find requested resource.</p>
      <Link href="/" className='font-semibold border-b-2 text-black hover:text-black/60 transition-colors duration-300'>Return to Main Page</Link>
    </div>
  )
}
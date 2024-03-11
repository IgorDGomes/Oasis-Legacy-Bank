import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='404 flex flex-col gap-5 h-[60svh] w-full items-center justify-center'>
      <span className='text-xl font-semibold'>Not Found</span>
      <p className='text-sm'>Could not find requested resource</p>
      <Link href="/" className='font-semibold border-b-2 text-black hover:text-black/60 transition-colors duration-300'>Return Home</Link>
    </div>
  )
}
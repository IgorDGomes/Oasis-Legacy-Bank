import { Metadata } from 'next'
import Image from 'next/image'

import Temp from "@/assets/Instagram.svg"

export const metadata: Metadata = {
    title: 'OLB | Mobile App'
}

export default function MobileApp() {
    return (
        <div className='flex flex-col gap-10 lg:max-w-[1440px] mx-auto pb-10'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col items-center justify-center lg:max-w-[550px]'>
                    <h1>Mobile App</h1>
                    <p>Description</p>
                </div>
                <div className='relative'>
                    <Image src={Temp} alt='' className='absolute top-0 right-0 left-0' />
                </div>
            </div>
            <div className='flex flex-col gap-8 items-center justify-center'>
                <h2>Subtitle</h2>
                <div className='grid grid-cols-3 w-full'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={Temp} alt='' />
                        <h3>Subtitle</h3>
                        <p>Description</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={Temp} alt='' />
                        <h3>Subtitle</h3>
                        <p>Description</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={Temp} alt='' />
                        <h3>Subtitle</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>
            <div></div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-col items-center'>
                    <h2 className='pb-2'>Subtitle</h2>
                    <p>Description</p>
                </div>
                <div className='flex gap-10'>
                    <button type="button">Download for Apple</button>
                    <button type="button">Download for Android</button>
                </div>
            </div>
        </div>
    )
}
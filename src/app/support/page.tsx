import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { FAQ } from '@/components/support/main/accordion'

import worker from "../../assets/Worker1.png"

export const metadata: Metadata = {
    title: 'OLB | Support'
}

export default function Support() {
    return (
        <>
            <div className='w-full bg-gradient-to-l from-black/70 to-white'>
                <div className='w-[1300px] mx-auto flex justify-between'>
                    <div className='flex flex-col items-start justify-center max-w-[800px] gap-5'>
                        <h2 className='text-4xl font-semibold font-title'>Unrivaled Excellence: Elevating Your Experience at Oasis Legacy.</h2>
                        <p className='text-lg max-w-[90%]'>Our commitment to providing top-tier financial solutions is complemented by a client support team dedicated to your satisfaction. Whether you have inquiries, need assistance, or seek expert advice, our responsive and knowledgeable support staff is here for you. We pride ourselves on delivering services that go beyond expectations, ensuring your financial journey is seamless and rewarding.</p>
                        <Link href="/support/chat-support" className=" mt-5 px-6 py-1.5 rounded-full border-2 border-black hover:bg-black hover:text-white font-medium text-lg transition-colors duration-[400ms]">AI chat support</Link>
                    </div>
                    <Image src={worker} alt='male worker'  />
                </div>
            </div>
            <div id='faq' className='py-20'>
                <FAQ />
            </div>
        </>
    )
}
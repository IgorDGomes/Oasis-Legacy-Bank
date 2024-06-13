import Image from "next/image"
import { Metadata } from "next"

import Temp from "@/assets/Instagram.svg"

export const metadata: Metadata = {
    title: 'OLB | About Us'
}

export default function AboutUs() {
    return (
        <div className='flex flex-col gap-10 lg:max-w-[1440px] mx-auto pb-20'>
            <div className="flex items-center justify-around">
                <h1>Title</h1>
                <Image src={Temp} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
                <h2>Subtitle</h2>
                <p>Description</p>
            </div>
            <div className="flex flex-col gap-20">
                <div className="grid grid-cols-2 place-items-center">
                    <Image src={Temp} alt="" />
                    <div className="flex flex-col gap-2">
                        <h3>Subtitle</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 place-items-center">
                    <div className="flex flex-col gap-2">
                        <h3>Subtitle</h3>
                        <p>Description</p>
                    </div>
                    <Image src={Temp} alt="" />
                </div>
                <div className="grid grid-cols-2 place-items-center">
                    <Image src={Temp} alt="" />
                    <div className="flex flex-col gap-2">
                        <h3>Subtitle</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";
import { Metadata } from "next";

import Temp from "@/assets/Instagram.svg"

export const metadata: Metadata = {
    title: 'OLB | Refer a Friend'
}

export default function ReferAFriend() {
    return (
        <div className='flex flex-col gap-10 lg:max-w-[1440px] mx-auto pb-10'>
            <div className="relative grid lg:grid-cols-2">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1>Refer a Friend</h1>
                    <p>Description</p>
                </div>
                <div className="absolute top-0 right-0 left-0">
                    <Image src={Temp} alt="" />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image src={Temp} alt="" />
                    <h2>Subtitle</h2>
                    <p>Description</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image src={Temp} alt="" />
                    <h2>Subtitle</h2>
                    <p>Description</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image src={Temp} alt="" />
                    <h2>Subtitle</h2>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}
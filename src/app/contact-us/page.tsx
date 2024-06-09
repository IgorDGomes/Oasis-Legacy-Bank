import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

import Temp from "@/assets/Instagram.svg"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { FAQ } from "@/components/support/main"

export const metadata: Metadata = {
    title: 'OLB | Contact Us'
}

export default function ContactUs() {
    console.log(new Date())
    return (
        <div className="flex flex-col gap-10 lg:max-w-[1440px] mx-auto">
            <div className="relative">
                <Image src={Temp} alt="" className="absolute top-0 right-0 left-0 -z-10" />
                <div className="flex flex-col">
                    <h1>Title</h1>
                    <p>Paragraph</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
                <h2>Subtitle</h2>
                <div className="flex justify-center items-center gap-10">
                    <button type="button"><ArrowLeft /></button>
                    <div className="flex justify-center items-center gap-20">
                        <Image src={Temp} alt="" />
                        <Image src={Temp} alt="" />
                        <Image src={Temp} alt="" />
                        <Image src={Temp} alt="" />
                        <Image src={Temp} alt="" />
                        <Image src={Temp} alt="" />
                    </div>
                    <button type="button"><ArrowRight /></button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2>Subtitle</h2>
                <Link href={"/"}>Login</Link>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="flex flex-col gap-10 items-center">
                    <h2>Call Us</h2>
                    <ul className="list-none">
                        <li>
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="pb-1">North America</h3>
                                <p className="font-medium underline underline-offset-1">1 800 123 456 78</p>
                            </div>
                        </li>
                        <li>
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="pb-1">South America</h3>
                                <p className="font-medium underline underline-offset-1">1 800 123 456 78</p>
                            </div>
                        </li>
                        <li>
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="pb-1">Europe</h3>
                                <p className="font-medium underline underline-offset-1">1 800 123 456 78</p>
                            </div>
                        </li>
                        <li>
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="pb-1">Asia</h3>
                                <p className="font-medium underline underline-offset-1">1 800 123 456 78</p>
                            </div>
                        </li>
                        <li>
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="pb-1">Africa</h3>
                                <p className="font-medium underline underline-offset-1">1 800 123 456 78</p>
                            </div>
                        </li>
                        <li>
                            <div className="grid md:grid-cols-2 gap-10">
                                <h3 className="pb-1">Oceania</h3>
                                <p className="font-medium underline underline-offset-1">1 800 123 456 78</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-10 items-center">
                    <h2>Local</h2>
                    <div>
                        <ul className="list-none">
                            <li>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <h3>United States</h3>
                                    <div className="pb-4">
                                        <p>1600, Pennsylvania Avenue NW</p>
                                        <p>Washington, DC, 20500</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <h3>England</h3>
                                    <div className="pb-4">
                                        <p>10, Downing Street</p>
                                        <p>London</p>
                                        <p>SW1A 2AA</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <h3>Germany</h3>
                                    <div className="pb-4">
                                        <p>Pariser Platz, 2</p>
                                        <p>10117, Berlin</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-24">
                <FAQ />
            </div>
        </div>
    )
}
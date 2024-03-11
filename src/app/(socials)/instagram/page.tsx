import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'OLB | Instagram'
}

export default function Instagram() {
    return (
        <>
            <main>
                <div className="flex">
                    <Image src='' alt="" />
                    <div>
                        <div className="flex">
                            <div className="flex">
                                <h1>Oasis Legacy</h1>
                                <Image src='' alt="" />
                            </div>
                            <div className="flex">
                                <button>Follow</button>
                                <button>Message</button>
                            </div>
                            <button><Image src='' alt="" /></button>
                        </div>
                        <div className="flex">
                            <p>12 posts</p>
                            <p>2.4 M followers</p>
                            <p>37 Following</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Oasis Legacy</p>
                            <span>🏦 Simplifying banking for you! 💼 Streamlining processes and embracing innovation to make managing finances effortless. Join us on the journey to convenience!</span>
                            <div className="flex">
                                <Image src='' alt="" />
                                <Link href='/' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        <Image src='' alt="" className="rounded-full" />
                        <p>News</p>
                    </div>
                    <div className="flex flex-col">
                        <Image src='' alt="" className="rounded-full" />
                        <p>Events</p>
                    </div>
                    <div className="flex flex-col">
                        <Image src='' alt="" className="rounded-full" />
                        <p>Mobile App</p>
                    </div>
                </div>
                <div className="flex bordert-[1px]">
                    <div className="flex">
                        <Image src='' alt="" />
                        <p>POSTS</p>
                    </div>
                    <div className="flex">
                        <Image src='' alt="" />
                        <p>REELS</p>
                    </div>
                    <div className="flex">
                        <Image src='' alt="" />
                        <p>IDENTIFICATION</p>
                    </div>
                </div>
            </main>
        </>
    )
}
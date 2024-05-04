import { Locate, Search } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'OLB | Our Location'
}

export default function ATMLocation() {
    return (
        <>
            <div className="h-[calc(100vh-80px)] w-full flex bg-main/15">
                <div className="flex flex-col gap-10 w-[30%] my-10">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-medium">Oasis Legacy Locations</h1>
                            <p className="font-light">Find Oasis Legacy ATMs and Branches, wherever you need the most.</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <label htmlFor="location" className="font-medium">Find a location</label>
                            <div className="flex gap-2 w-fit">
                                <div className="flex px-2 items-center justify-center gap-2 rounded-md bg-white min-w-[350px]">
                                    <Locate />
                                    <input type="text" name="location" id="location" placeholder="Find ATMs and Branches near..." className="outline-none w-full h-full py-3 bg-white hover:bg-white/60 transition-all" />
                                    <button>
                                        <Search size={20} />
                                    </button>
                                </div>
                                <button className="px-3 rounded-md bg-white hover:bg-white/60 transition-all">
                                    Filters
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto text-center">
                        <h2 className="text-xl font-semibold">Want to know more about us?</h2>
                        <span><Link href={"/sign-in"} className="underline">Sign In</Link> or <Link href={"mobile-app"} className="underline">download the Mobile App</Link></span>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}
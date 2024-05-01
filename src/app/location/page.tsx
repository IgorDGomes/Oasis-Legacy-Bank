import Link from "next/link";

export default function ATMLocation() {
    return (
        <>
            <div className="h-[calc(100vh-80px)] w-full flex bg-main/40">
                <div className="flex flex-col gap-10 w-[30%] my-10">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-medium">Oasis Legacy Locations</h1>
                            <p className="font-light">Find Oasis Legacy ATMs and Branches, wherever you need the most.</p>
                        </div>
                        <div>
                            <label htmlFor="location">Find a location</label>
                            <div className="flex gap-2 w-full">
                                <div className="flex">
                                    svg
                                    <input type="text" name="location" id="location" placeholder="Find ATMs and Branches near..." />
                                    <button>
                                        svg
                                    </button>
                                </div>
                                <button className="px-2 py-1.5">
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
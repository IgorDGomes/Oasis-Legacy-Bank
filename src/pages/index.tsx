import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>OLB | Home</title> 
            </Head>
            <main className="bg-main/95">
                <div className="grid grid-cols-2 max-w-[1440px] mx-auto min-h-[600px]">
                    <div className="flex flex-col gap-20 items-center justify-center h-full">
                        <div className="flex flex-col gap-10">
                            <h1 className="font-semibold text-4xl">Welcome to Oasis Legacy, your financial oasis.</h1>
                            <p className="font-medium">Your trusted partner in financial success. Beyond transactions, we&apos;re your ally on a journey of integrity and innovation. Join us for a banking experience where dreams are secured, wealth grows, and the future thrives.</p>
                        </div>
                        <div className="flex justify-around w-full">
                            <Link href='/sign-up' className="bg-button px-4 py-3 rounded-xl font-medium text-main hover:bg-orange-400 transition-colors duration-300">Create Account</Link>
                            <Link href='/support/contact' className="border-2 border-white bg-transparent px-3.5 py-2.5 rounded-xl font-medium text-white hover:bg-white hover:text-main transition-colors duration-300">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
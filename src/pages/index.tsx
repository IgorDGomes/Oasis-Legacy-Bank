import { Login } from "@/components/main-page/login";
import { Airplane, Computer, CreditCards, PiggyBank, ShopFourTiles, Wallet } from "iconoir-react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>OLB | Home</title> 
            </Head>
            <main>
                <div className="home-main">
                    <div className="grid grid-cols-2 max-w-[1440px] mx-auto min-h-[600px]">
                        <div className="flex flex-col gap-20 items-center justify-center h-full">
                            <div className="flex flex-col gap-10">
                                <h1 className="font-semibold text-4xl text-white">Welcome to Oasis Legacy, your financial oasis.</h1>
                                <p className="font-medium text-white">Your trusted partner in financial success. Beyond transactions, we&apos;re your ally on a journey of integrity and innovation. Join us for a banking experience where dreams are secured, wealth grows, and the future thrives.</p>
                            </div>
                            <div className="flex justify-evenly w-full">
                                <Link href='/sign-up' className="bg-orange-500 px-4 py-3 rounded-xl font-medium text-main hover:bg-orange-500/80 transition-colors duration-[400ms]">Create Account</Link>
                                <Link href='/support/contact' className="border-2 border-white bg-transparent px-3.5 py-2.5 rounded-xl font-medium text-white hover:bg-white hover:text-main transition-colors duration-[400ms]">Contact Us</Link>
                            </div>
                        </div>

                        <Login />
                    </div>
                </div>
                <div className="flex flex-col gap-10 max-w-[1440px] mx-auto items-center py-10">
                    <p className="text-2xl font-semibold">How can we help you today?</p>
                    <div className="flex gap-8">
                        <Link href='' className="flex flex-col items-center">
                            <CreditCards />
                            <p>Credit Card</p>
                        </Link>
                        <Link href='' className="flex flex-col items-center">
                            <Computer />
                            <p>Online Banking</p>
                        </Link>
                        <Link href='' className="flex flex-col items-center">
                            <Wallet />
                            <p>Loans</p>
                        </Link>
                        <Link href='' className="flex flex-col items-center">
                            <ShopFourTiles />
                            <p>Business</p>
                        </Link>
                        <Link href='' className="flex flex-col items-center">
                            <Airplane />
                            <p>Travel</p>
                        </Link>
                        <Link href='' className="flex flex-col items-center">
                            <PiggyBank />
                            <p>Savings</p>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
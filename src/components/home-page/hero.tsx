import Link from "next/link";
import { Login } from "./login";

export function Hero() {
    return (
    <div className="home-main">
        <div className="grid grid-cols-2 max-w-[1440px] mx-auto min-h-[600px]">
            <div className="flex flex-col gap-20 items-center justify-center h-full">
                <div className="flex flex-col gap-10">
                    <h1 className="font-semibold text-4xl text-white font-title">Welcome to Oasis Legacy, your financial oasis.</h1>
                    <p className="font-medium text-white">Your trusted partner in financial success. Beyond transactions, we&apos;re your ally on a journey of integrity and innovation. Join us for a banking experience where dreams are secured, wealth grows, and the future thrives.</p>
                </div>
                <div className="flex justify-evenly w-full">
                    <Link href='/sign-up' className="flex items-center bg-orange-500 px-6 py-2 rounded-xl font-medium text-main hover:bg-orange-500/80 transition-colors duration-[400ms]">Create Account</Link>
                    <Link href='/support/contact' className="flex items-center border-2 border-white px-6 py-2 rounded-xl font-medium text-white hover:bg-white hover:text-main transition-colors duration-[400ms]">Contact Us</Link>
                </div>
            </div>

            <Login />
        </div>
    </div>
    )
}

import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

import '../globals.css'

import logo from '../assets/logo.png'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <header>
                <div className="flex max-w-[1440px] min-h-[80px] mx-auto justify-between items-center">
                    <div>
                        <Link href="/" title="Oasis Legacy Bank">
                            <Image src={logo} alt="" priority />
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex gap-10 font-medium">
                            <li><Link href="/" title="Home" className="text-white">Home</Link></li>
                            <li><Link href="/services" title="Services" className="text-white">Services</Link></li>
                            <li><Link href="/support" title="Support" className="text-white">Support</Link></li>
                            <li><Link href="/about-us" title="About Us" className="text-white">About Us</Link></li>
                        </ul>
                    </nav>
                    <div className="flex gap-10 font-medium items-center">
                        <Link href='/login' title="Login" className="px-4 py-1 rounded-md bg-orange-500 hover:bg-orange-400 transition-colors duration-300">Login</Link>
                        <Link href="/sign-up" title="Sign In" className="border-white border px-4 py-1 rounded-md text-white hover:bg-white hover:text-main transition-colors duration-300">Sign In</Link>
                    </div>
                </div>
            </header>
            <Component {...pageProps} />
        </>
    )
}
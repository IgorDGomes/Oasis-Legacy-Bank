import Image from "next/image";
import Link from "next/link";

import logo from '../../assets/Logo.png'

export function Header() {
    return (
        <header className="sticky top-0 right-0 left-0 bg-main z-10">
            <div className="flex max-w-[1440px] min-h-[80px] mx-auto justify-between items-center">
                <Link href="/" title="Oasis Legacy Bank">
                    <Image src={logo} alt="" priority />
                </Link>
                <nav>
                    <ul className="flex gap-10 font-medium">
                        <li><Link href="/" title="Home" className="text-white nav-link">Home</Link></li>
                        <li><Link href="/services" title="Services" className="text-white nav-link">Services</Link></li>
                        <li><Link href="/support" title="Support" className="text-white nav-link">Support</Link></li>
                        <li><Link href="/about-us" title="About Us" className="text-white nav-link">About Us</Link></li>
                    </ul>
                </nav>
                <div className="flex gap-10 font-medium items-center">
                    <Link href='/login' title="Login" className="border border-orange-500 px-4 py-1 rounded-md bg-orange-500 hover:bg-orange-500/80 hover:border-transparent transition-colors duration-[400ms]">Login</Link>
                    <Link href="/sign-up" title="Sign In" className="border-white border px-4 py-1 rounded-md text-white hover:bg-white hover:text-main transition-colors duration-[400ms]">Sign Up</Link>
                </div>
            </div>
        </header>
    )
}
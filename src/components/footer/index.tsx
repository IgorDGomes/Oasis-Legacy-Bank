import Image from "next/image";
import Link from "next/link";

import { Bank, Instagram, X, Facebook, Linkedin, Youtube, Github } from 'iconoir-react'

export function Footer() {
    return (
    <footer>
        <div className="bg-main/95 mt-20">
            <div className="max-w-[1440px] mx-auto flex justify-between py-5 px-10 items-center">
                <Link href='/' className="bg-gray-300 rounded-lg p-1">
                    <Bank />
                </Link>
                <div className="flex gap-5">
                    <Link href='/instagram'>
                        <Instagram color="white" />
                    </Link>
                    <Link href='/X'>
                        <X color="white" />
                    </Link>
                    <Link href='/facebook'>
                        <Facebook color="white" />
                    </Link>
                    <Link href='/linkedin'>
                        <Linkedin color="white" />
                    </Link>
                    <Link href='/youtube'>
                        <Youtube color="white" />
                    </Link>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto flex justify-around text-center py-10">
                <ul className="text-white flex flex-col gap-2">
                    <li className="text-xl font-medium pb-2"><span>Products & Services</span></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/services/credit-card'>Credit Card</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/services/savings'>Savings</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/services/online-banking'>Online Banking</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/services/auto'>Auto</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/services/business'>Business</Link></li>
                </ul>

                <ul className="text-white flex flex-col gap-2">
                    <li className="text-xl font-medium pb-2"><span>About</span></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/about-us'>About Oasis Legacy</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/contact'>Contact Us</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/services/investment'>Investor Relations</Link></li>
                </ul>

                <ul className="text-white flex flex-col gap-2">
                    <li className="text-xl font-medium pb-2"><span>Legal</span></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/legal/privacy'>Privacy</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/legal/security'>Secutiry</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/legal/terms-of-use'>Terms of Use</Link></li>
                </ul>

                <ul className="text-white flex flex-col gap-2">
                    <li className="text-xl font-medium pb-2"><span>Quick Link</span></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/mobile-app'>Mobile App</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/atm-location'>ATM Locator</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/refer'>Refer a friend</Link></li>
                    <li className="text-sm font-light hover:text-white/60"><Link href='/sitemap'>Sitemap</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex items-center justify-between py-5 bg-main/85">
            <span className="max-w-[1440px] mx-auto text-xs text-white">{`©${new Date().getFullYear()} Oasis Legacy`}</span>
            <ul className="max-w-[1440px] mx-auto text-xs font-semibold flex">
                <Link href='/privacy' className="px-2.5 border-r-[1px] text-white hover:text-white/60 transition-colors duration-300">Privacy</Link>
                <Link href='/terms-conditions' className="px-2.5 text-white hover:text-white/60 transition-colors duration-300">Terms & Conditions</Link>
            </ul>
            <div className="max-w-[1440px] mx-auto flex gap-5">
                <Link href='https://github/user/IgorDGomes' className="text-white hover:text-white/60 transition-colors duration-300">
                    <Github />
                </Link>
                <Link href='' className="text-white hover:text-white/60 transition-colors duration-300">
                    <Linkedin />
                </Link>
            </div>
        </div>
    </footer>
        
    )
}
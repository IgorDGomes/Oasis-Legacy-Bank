import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

import { Bank, Instagram, X, Facebook, Linkedin, Youtube, Github } from 'iconoir-react'

import './globals.css'

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
                            <li><Link href="/" title="Home" className="text-white nav-link">Home</Link></li>
                            <li><Link href="/services" title="Services" className="text-white nav-link">Services</Link></li>
                            <li><Link href="/support" title="Support" className="text-white nav-link">Support</Link></li>
                            <li><Link href="/about-us" title="About Us" className="text-white nav-link">About Us</Link></li>
                        </ul>
                    </nav>
                    <div className="flex gap-10 font-medium items-center">
                        <Link href='/login' title="Login" className="px-4 py-1 rounded-md bg-orange-500 hover:bg-orange-500/80 transition-colors duration-[400ms]">Login</Link>
                        <Link href="/sign-up" title="Sign In" className="border-white border px-4 py-1 rounded-md text-white hover:bg-white hover:text-main transition-colors duration-[400ms]">Sign In</Link>
                    </div>
                </div>
            </header>
            <Component {...pageProps} />
            <footer>
                <div className="bg-main/95">
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
                            <li className="text-sm font-light hover:text-white/60">Credit Card</li>
                            <li className="text-sm font-light hover:text-white/60">Checking and Savings</li>
                            <li className="text-sm font-light hover:text-white/60">Online Banking</li>
                            <li className="text-sm font-light hover:text-white/60">Auto</li>
                            <li className="text-sm font-light hover:text-white/60">Business</li>
                        </ul>

                        <ul className="text-white flex flex-col gap-2">
                            <li className="text-xl font-medium pb-2"><span>About</span></li>
                            <li className="text-sm font-light hover:text-white/60">About Oasis Legacy</li>
                            <li className="text-sm font-light hover:text-white/60">Contact Us</li>
                            <li className="text-sm font-light hover:text-white/60">Investor Relations</li>
                        </ul>

                        <ul className="text-white flex flex-col gap-2">
                            <li className="text-xl font-medium pb-2"><span>Legal</span></li>
                            <li className="text-sm font-light hover:text-white/60">Privacy</li>
                            <li className="text-sm font-light hover:text-white/60">Secutiry</li>
                            <li className="text-sm font-light hover:text-white/60">Terms of Use</li>
                        </ul>

                        <ul className="text-white flex flex-col gap-2">
                            <li className="text-xl font-medium pb-2"><span>Quick Link</span></li>
                            <li className="text-sm font-light hover:text-white/60">Mobile App</li>
                            <li className="text-sm font-light hover:text-white/60">ATM Locator</li>
                            <li className="text-sm font-light hover:text-white/60">Refer a friend</li>
                            <li className="text-sm font-light hover:text-white/60">Sitemap</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between py-5 bg-main/85">
                    <span className="max-w-[1440px] mx-auto text-xs">{`©${new Date().getFullYear()} Oasis Legacy`}</span>
                    <ul className="max-w-[1440px] mx-auto text-xs font-semibold flex">
                        <Link href='/privacy' className="px-2.5 border-r-[1px] text-black hover:text-white transition-colors duration-300">Privacy</Link>
                        <Link href='/terms-conditions' className="px-2.5 text-black hover:text-white transition-colors duration-300">Terms & Conditions</Link>
                    </ul>
                    <div className="max-w-[1440px] mx-auto flex gap-5">
                        <Link href='https://github/user/IgorDGomes' className="hover:text-white transition-colors duration-300">
                            <Github />
                        </Link>
                        <Link href='' className="hover:text-white transition-colors duration-300">
                            <Linkedin />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
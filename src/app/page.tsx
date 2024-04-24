import { Metadata } from "next";

import { Features } from "@/components/home-page/features";
import { Hero } from "@/components/home-page/hero";
import { Mobile } from "@/components/home-page/mobile";
import { Options } from "@/components/home-page/options";

export const metadata: Metadata = {
    title: 'OLB | Home'
}

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <Options />
                <Mobile />
            </main>
        </>
    )
}
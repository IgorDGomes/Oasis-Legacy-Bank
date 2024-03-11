import { Features } from "@/components/home-page/features";
import { Hero } from "@/components/home-page/hero";
import { Mobile } from "@/components/home-page/mobile";
import { Options } from "@/components/home-page/options";

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